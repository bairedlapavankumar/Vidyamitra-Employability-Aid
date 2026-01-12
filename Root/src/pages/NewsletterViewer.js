import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;

const NewsletterViewer = () => {
    const { year } = useParams();
    const [searchParams] = useSearchParams();
    const pdfUrl = searchParams.get('url');
    const [content, setContent] = useState('');
    const [numPages, setNumPages] = useState(null);
    const [pdfWidth, setPdfWidth] = useState(Math.min(window.innerWidth - 40, 800));

    useEffect(() => {
        const handleResize = () => {
            setPdfWidth(Math.min(window.innerWidth - 40, 800));
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    useEffect(() => {
        if (pdfUrl) return; // Skip fetching HTML if showing PDF

        const fetchContent = async () => {
            try {
                let response = await fetch(`/newsletters/${year}.htm`);
                let text = await response.text();

                // Check if we got the React app (SPA fallback) instead of the file
                if (!response.ok || text.includes('<div id="root">') || text.includes('<!doctype html>')) {
                    // Try .html extension
                    response = await fetch(`/newsletters/${year}.html`);
                    text = await response.text();
                }

                // Check again for fallback
                if (!response.ok || text.includes('<div id="root">') || text.includes('<!doctype html>')) {
                    throw new Error('Newsletter not found');
                }

                const parser = new DOMParser();
                const doc = parser.parseFromString(text, 'text/html');

                // Heuristic: Find the sidebar by looking for common links
                const links = doc.querySelectorAll('a');
                let sidebarCell = null;

                for (let link of links) {
                    const href = link.getAttribute('href');
                    if (href && (href.includes('HOME.htm') || href.includes('Background.htm') || href.includes('Formation and Funding.htm'))) {
                        // Found a sidebar link, traverse up to find the containing TD
                        let parent = link.parentElement;
                        while (parent && parent.tagName !== 'TD') {
                            parent = parent.parentElement;
                        }
                        if (parent && parent.tagName === 'TD') {
                            sidebarCell = parent;
                            break;
                        }
                    }
                }

                if (sidebarCell) {
                    sidebarCell.remove();
                }

                // Remove next/prev navigation
                const navImages = doc.querySelectorAll('img[src*="prev.gif"], img[src*="next.gif"]');
                navImages.forEach(img => {
                    const anchor = img.closest('a');
                    if (anchor) {
                        anchor.remove();
                    } else {
                        img.remove();
                    }
                });

                // Fix broken images (e.g., bookstack.gif)
                const images = doc.querySelectorAll('img');
                images.forEach(img => {
                    const src = img.getAttribute('src');
                    if (src && src.toLowerCase().includes('bookstack.gif')) {
                        img.src = '/assets/bookstack2.gif';
                        img.removeAttribute('width');
                        img.removeAttribute('height');
                        img.style.width = '100px';
                        img.style.height = 'auto';
                    }
                });

                // Also fix relative image paths if necessary
                const base = doc.createElement('base');
                base.href = `${window.location.origin}/newsletters/`;
                doc.head.appendChild(base);

                setContent(doc.documentElement.outerHTML);
            } catch (error) {
                console.error('Error loading newsletter:', error);
                setContent('Error loading content.');
            }
        };

        fetchContent();
    }, [year, pdfUrl]);

    if (pdfUrl) {
        return (
            <div style={{ width: '100%', minHeight: '100vh', backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={<div style={{ color: 'black' }}>Loading PDF...</div>}
                    error={<div style={{ color: 'red' }}>Failed to load PDF.</div>}
                >
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                            width={pdfWidth}
                            className="pdf-page"
                        />
                    ))}
                </Document>
                <style>{`
                    .pdf-page {
                        margin-bottom: 20px;
                        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <iframe
                srcDoc={content}
                title={`Newsletter ${year}`}
                style={{ width: '100%', height: '100%', border: 'none' }}
            />
        </div>
    );
};

export default NewsletterViewer;
