import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Background from './pages/Background';
import FormationAndFunding from './pages/FormationAndFunding';
import Objectives from './pages/Objectives';
import SelectionOfBeneficiaries from './pages/SelectionOfBeneficiaries';
import ScopeOfSupport from './pages/ScopeOfSupport';
import BeneficiaryResponsibility from './pages/BeneficiaryResponsibility';
import MonitoringAndCounselling from './pages/MonitoringAndCounselling';
import TypicalYearlyExpenditure from './pages/TypicalYearlyExpenditure';
import HowCanIParticipate from './pages/HowCanIParticipate';
import HowCanIHelp from './pages/HowCanIHelp';
import ContactUs from './pages/ContactUs';
import Admins from './pages/Admins';
import ProfileViewer from './pages/ProfileViewer';
import NewsletterViewer from './pages/NewsletterViewer';
import StudentJoineesManager from './employability/StudentJoineesManager';
import NewsLetterManager from './employability/NewsLetterManager';
import EmployabilityRoutes from './employability/EmployabilityRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Employability Aid Routes */}
        <Route path="/employability-aid/*" element={<EmployabilityRoutes />} />

        {/* Ramadevi Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="background" element={<Background />} />
          <Route path="formation-and-funding" element={<FormationAndFunding />} />
          <Route path="objectives" element={<Objectives />} />
          <Route path="selection-of-beneficiaries" element={<SelectionOfBeneficiaries />} />
          <Route path="scope-of-support" element={<ScopeOfSupport />} />
          <Route path="beneficiary-responsibility" element={<BeneficiaryResponsibility />} />
          <Route path="monitoring-and-counselling" element={<MonitoringAndCounselling />} />
          <Route path="typical-yearly-expenditure" element={<TypicalYearlyExpenditure />} />
          <Route path="how-can-i-participate" element={<HowCanIParticipate />} />
          <Route path="how-can-i-help" element={<HowCanIHelp />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="admins" element={<Admins />} />
          <Route path="student-joinees" element={<StudentJoineesManager />} />
          <Route path="newsletters" element={<NewsLetterManager />} />


          <Route path="profiles/:year" element={<ProfileViewer />} />
          <Route path="newsletters/:year" element={<NewsletterViewer />} />

          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
