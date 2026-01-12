import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProfileViewer = () => {
    const { year } = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch(`/profiles/${year}.htm`);
                let text = await response.text();

                // Clean up encoding artifacts
                // Remove replacement characters and other common garbage from legacy encoding issues
                text = text.replace(/\uFFFD/g, '');

                const parser = new DOMParser();
                const doc = parser.parseFromString(text, 'text/html');

                // Heuristic: Find the sidebar by looking for common links
                const links = doc.querySelectorAll('a');
                let sidebarCell = null;

                for (let link of links) {
                    const href = link.getAttribute('href');
                    if (href && (href.includes('HOME.htm') || href.includes('Background.htm') || href.includes('Formation and Funding.htm'))) {
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
                        // Remove any hardcoded dimensions that might distort the new image
                        img.removeAttribute('width');
                        img.removeAttribute('height');
                        img.style.width = '100px';
                        img.style.height = 'auto';
                        img.style.display = 'block';
                        img.style.margin = '0 auto';
                    }
                });

                // Inject "Students walking" image
                const walkingImg = doc.createElement('img');
                walkingImg.src = '/assets/Objectives_files/object2.gif';
                walkingImg.alt = 'Students walking';
                walkingImg.style.width = '150px';
                walkingImg.style.height = '112px';
                walkingImg.style.float = 'left';
                walkingImg.style.marginRight = '20px';

                // Insert before the first element in the body
                if (doc.body.firstChild) {
                    doc.body.insertBefore(walkingImg, doc.body.firstChild);
                } else {
                    doc.body.appendChild(walkingImg);
                }

                // Fix relative paths
                const base = doc.createElement('base');
                base.href = `${window.location.origin}/profiles/`;
                doc.head.appendChild(base);

                // Identify and style tables
                const tables = doc.querySelectorAll('table');
                tables.forEach(table => {
                    const text = table.textContent.toLowerCase();
                    if (text.includes('name of the student') ||
                        text.includes('s.no') || text.includes('s no') || text.includes('s. no') ||
                        text.includes('course') || text.includes('plan to support')) {
                        table.classList.add('student-table');
                        table.style.clear = 'both'; // Ensure data tables start below floating images
                    } else if (text.includes('vidyamitra') || text.includes('beneficiaries')) {
                        // Header table logic
                        table.style.width = 'calc(100% - 170px)';
                        table.style.float = 'right';
                        table.style.marginBottom = '10px';
                        // Ensure text alignment within header cells
                        const cells = table.querySelectorAll('td');
                        cells.forEach(cell => {
                            cell.style.verticalAlign = 'middle';
                        });
                    }
                });

                // Inject standard styles
                const style = doc.createElement('style');
                style.textContent = `
                    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: white !important; margin: 20px; color: #333; }
                    
                    /* Styles for the student data table */
                    .student-table { width: 95%; border-collapse: collapse; margin: 20px auto; background-color: white; box-shadow: 0 1px 3px rgba(0,0,0,0.2); }
                    .student-table th, .student-table td { border: 1px solid #ddd; padding: 12px; text-align: left; }
                    .student-table th { background-color: #f8f9fa; color: #000080; font-weight: bold; text-transform: uppercase; font-size: 0.9em; }
                    .student-table tr:nth-child(even) { background-color: #f9f9f9; }
                    .student-table tr:hover { background-color: #f1f1f1; }

                    /* General styles */
                    h1, h2, h3, h4, h5, h6 { color: #000080; text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
                    p, div, span { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
                `;
                doc.head.appendChild(style);

                setContent(doc.documentElement.outerHTML);
            } catch (error) {
                console.error('Error loading profile:', error);
                setContent('Error loading content.');
            }
        };

        fetchContent();
    }, [year]);

    return (
        <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <iframe
                srcDoc={content}
                title={`Profile ${year}`}
                style={{ width: '100%', height: '100%', border: 'none' }}
            />
        </div>
    );
};

export default ProfileViewer;
