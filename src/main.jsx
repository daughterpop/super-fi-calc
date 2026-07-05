import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import BlogIndex from './pages/BlogIndex';
import WhyFIForEveryone from './pages/WhyFIForEveryone';
import RaisingFaithFilledKidsWhileBuildingFinancialFreedom from './pages/RaisingFaithFilledKidsWhileBuildingFinancialFreedom';
import CatholicFamiliesCanReachFiTogetherAiPrayerAndSmartStewardship from './pages/catholic-families-can-reach-fi-together-ai-prayer-and-smart-stewardship';
import CatholicFamiliesLeverageAiForPrayerfulFinancialFreedomAndLastingLegacy from './pages/catholic-families-leverage-ai-for-prayerful-financial-freedom-and-lasting-legacy';
import AiAssistedStewardshipHowCatholicFamiliesLeverageSmartToolsForFiAndFaithfulLiving from './pages/ai-assisted-stewardship-how-catholic-families-leverage-smart-tools-for-fi-and-faithful-living';
import CatholicDadsLeadingFamilyFiWithAiAndFaith from './pages/catholic-dads-leading-family-fi-with-ai-and-faith';
import CatholicFamiliesHarnessAiForPrayerfulFiAndGenerationalLegacy from './pages/catholic-families-harness-ai-for-prayerful-fi-and-generational-legacy';
import CatholicMomsDadsUseAiToBuildDebtFreeFaithFilledFamilyLegacy from './pages/catholic-moms-dads-use-ai-to-build-debt-free-faith-filled-family-legacy';
import CatholicParentsBuildingFiLegacyWithAiAndPrayer from './pages/catholic-parents-building-fi-legacy-with-ai-and-prayer';
import FaithfulParentingOnThePathToFiCreatingMarginForWhatMattersMostInYourChristianHome from './pages/faithful-parenting-on-the-path-to-fi-creating-margin-for-what-matters-most-in-your-christian-home';
import HowChristianCouplesUnlockFinancialFreedomTogetherFaithTeamworkAndALegacyYourFamilyWillThankYouFor from './pages/how-christian-couples-unlock-financial-freedom-together-faith-teamwork-and-a-legacy-your-family-will-thank-you-for';
import PrayingYourWayToFinancialFreedomHowChristianFamiliesCanBuildWealthGenerosityAndPeaceTogether from './pages/praying-your-way-to-financial-freedom-how-christian-families-can-build-wealth-generosity-and-peace-together';
import CatholicFamiliesAiForBackToSchoolSavingsAndFaithFilledFinancialFreedom from './pages/catholic-families-ai-for-back-to-school-savings-and-faith-filled-financial-freedom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/why-fi-for-everyone" element={<WhyFIForEveryone />} />
        <Route path="/blog/raising-faith-filled-kids-while-building-financial-freedom" element={<RaisingFaithFilledKidsWhileBuildingFinancialFreedom />} />
        <Route path="/blog/catholic-families-can-reach-fi-together-ai-prayer-and-smart-stewardship" element={<CatholicFamiliesCanReachFiTogetherAiPrayerAndSmartStewardship />} />
        <Route path="/blog/catholic-families-leverage-ai-for-prayerful-financial-freedom-and-lasting-legacy" element={<CatholicFamiliesLeverageAiForPrayerfulFinancialFreedomAndLastingLegacy />} />
        <Route path="/blog/ai-assisted-stewardship-how-catholic-families-leverage-smart-tools-for-fi-and-faithful-living" element={<AiAssistedStewardshipHowCatholicFamiliesLeverageSmartToolsForFiAndFaithfulLiving />} />
        <Route path="/blog/catholic-dads-leading-family-fi-with-ai-and-faith" element={<CatholicDadsLeadingFamilyFiWithAiAndFaith />} />
        <Route path="/blog/catholic-families-harness-ai-for-prayerful-fi-and-generational-legacy" element={<CatholicFamiliesHarnessAiForPrayerfulFiAndGenerationalLegacy />} />
        <Route path="/blog/catholic-moms-dads-use-ai-to-build-debt-free-faith-filled-family-legacy" element={<CatholicMomsDadsUseAiToBuildDebtFreeFaithFilledFamilyLegacy />} />
        <Route path="/blog/catholic-parents-building-fi-legacy-with-ai-and-prayer" element={<CatholicParentsBuildingFiLegacyWithAiAndPrayer />} />
        <Route path="/blog/faithful-parenting-on-the-path-to-fi-creating-margin-for-what-matters-most-in-your-christian-home" element={<FaithfulParentingOnThePathToFiCreatingMarginForWhatMattersMostInYourChristianHome />} />
        <Route path="/blog/how-christian-couples-unlock-financial-freedom-together-faith-teamwork-and-a-legacy-your-family-will-thank-you-for" element={<HowChristianCouplesUnlockFinancialFreedomTogetherFaithTeamworkAndALegacyYourFamilyWillThankYouFor />} />
        <Route path="/blog/praying-your-way-to-financial-freedom-how-christian-families-can-build-wealth-generosity-and-peace-together" element={<PrayingYourWayToFinancialFreedomHowChristianFamiliesCanBuildWealthGenerosityAndPeaceTogether />} />
        <Route path="/blog/catholic-families-ai-for-back-to-school-savings-and-faith-filled-financial-freedom" element={<CatholicFamiliesAiForBackToSchoolSavingsAndFaithFilledFinancialFreedom />} />
        {/* Catch-all for any other blog posts or 404 handling - falls back to home or can add a 404 page */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
