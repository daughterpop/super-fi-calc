import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Analytics } from '@vercel/analytics/react';

import Home from './pages/Home.jsx';
import SuperFiCalculator from './Super-Fi-Calculator.jsx';
import BlogPost from './pages/BlogPost.jsx';
import WhyFIForEveryone from './pages/WhyFIForEveryone.jsx';
import RaisingFaithFilledKidsWhileBuildingFinancialFreedom from './pages/RaisingFaithFilledKidsWhileBuildingFinancialFreedom.jsx';
import StewardingYourFamilysFuture from './pages/stewarding-your-familys-future-building-generational-wealth-through-faith-and-fi.jsx';
import RaisingGenerousGroundedKidsFaithFamilyBudgetingAndSharedFinancialFreedom from './pages/raising-generous-grounded-kids-faith-family-budgeting-and-shared-financial-freedom.jsx';
import PrayingYourWayToFinancialFreedomHowChristianFamiliesCanBuildWealthGenerosityAndPeaceTogether from './pages/praying-your-way-to-financial-freedom-how-christian-families-can-build-wealth-generosity-and-peace-together.jsx';
import FaithfulParentingOnThePathToFiCreatingMarginForWhatMattersMostInYourChristianHome from './pages/faithful-parenting-on-the-path-to-fi-creating-margin-for-what-matters-most-in-your-christian-home.jsx';
import HowChristianCouplesUnlockFinancialFreedomTogetherFaithTeamworkAndALegacyYourFamilyWillThankYouFor from './pages/how-christian-couples-unlock-financial-freedom-together-faith-teamwork-and-a-legacy-your-family-will-thank-you-for.jsx';
import AiAssistedStewardshipHowCatholicFamiliesLeverageSmartToolsForFiAndFaithfulLiving from './pages/ai-assisted-stewardship-how-catholic-families-leverage-smart-tools-for-fi-and-faithful-living.jsx';
import CatholicDadsLeadingFamilyFiWithAiAndFaith from './pages/catholic-dads-leading-family-fi-with-ai-and-faith.jsx';
import CatholicMomsDadsUseAiToBuildDebtFreeFaithFilledFamilyLegacy from './pages/catholic-moms-dads-use-ai-to-build-debt-free-faith-filled-family-legacy.jsx';
import CatholicParentsBuildingFiLegacyWithAiAndPrayer from './pages/catholic-parents-building-fi-legacy-with-ai-and-prayer.jsx';
import CatholicFamiliesHarnessAiForPrayerfulFiAndGenerationalLegacy from './pages/catholic-families-harness-ai-for-prayerful-fi-and-generational-legacy.jsx';
import CatholicFamiliesUsingAiForSabbathRestAndFiStewardship from './pages/catholic-families-using-ai-for-sabbath-rest-and-fi-stewardship.jsx';
import CatholicFamiliesAiBudgetingTithingFasterFiWithoutBurnout from './pages/catholic-families-ai-budgeting-tithing-faster-fi-without-burnout.jsx';
import CatholicFamiliesAiSummerStewardshipFaithFunAndFi from './pages/catholic-families-ai-summer-stewardship-faith-fun-and-fi.jsx';
import BlogIndex from './pages/BlogIndex.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<SuperFiCalculator />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/first-post" element={<BlogPost />} />
        <Route path="/blog/why-fi-for-everyone" element={<WhyFIForEveryone />} />
        <Route path="/blog/raising-faith-filled-kids-while-building-financial-freedom" element={<RaisingFaithFilledKidsWhileBuildingFinancialFreedom />} />
        <Route path="/blog/stewarding-your-familys-future-building-generational-wealth-through-faith-and-fi" element={<StewardingYourFamilysFuture />} />
        <Route path="/blog/raising-generous-grounded-kids-faith-family-budgeting-and-shared-financial-freedom" element={<RaisingGenerousGroundedKidsFaithFamilyBudgetingAndSharedFinancialFreedom />} />
        <Route path="/blog/praying-your-way-to-financial-freedom-how-christian-families-can-build-wealth-generosity-and-peace-together" element={<PrayingYourWayToFinancialFreedomHowChristianFamiliesCanBuildWealthGenerosityAndPeaceTogether />} />
        <Route path="/blog/faithful-parenting-on-the-path-to-fi-creating-margin-for-what-matters-most-in-your-christian-home" element={<FaithfulParentingOnThePathToFiCreatingMarginForWhatMattersMostInYourChristianHome />} />
        <Route path="/blog/how-christian-couples-unlock-financial-freedom-together-faith-teamwork-and-a-legacy-your-family-will-thank-you-for" element={<HowChristianCouplesUnlockFinancialFreedomTogetherFaithTeamworkAndALegacyYourFamilyWillThankYouFor />} />
        <Route path="/blog/ai-assisted-stewardship-how-catholic-families-leverage-smart-tools-for-fi-and-faithful-living" element={<AiAssistedStewardshipHowCatholicFamiliesLeverageSmartToolsForFiAndFaithfulLiving />} />
        <Route path="/blog/catholic-dads-leading-family-fi-with-ai-and-faith" element={<CatholicDadsLeadingFamilyFiWithAiAndFaith />} />
        <Route path="/blog/catholic-moms-dads-use-ai-to-build-debt-free-faith-filled-family-legacy" element={<CatholicMomsDadsUseAiToBuildDebtFreeFaithFilledFamilyLegacy />} />
        <Route path="/blog/catholic-parents-building-fi-legacy-with-ai-and-prayer" element={<CatholicParentsBuildingFiLegacyWithAiAndPrayer />} />
        <Route path="/blog/catholic-families-harness-ai-for-prayerful-fi-and-generational-legacy" element={<CatholicFamiliesHarnessAiForPrayerfulFiAndGenerationalLegacy />} />
        <Route path="/blog/catholic-families-using-ai-for-sabbath-rest-and-fi-stewardship" element={<CatholicFamiliesUsingAiForSabbathRestAndFiStewardship />} />
        <Route path="/blog/catholic-families-ai-budgeting-tithing-faster-fi-without-burnout" element={<CatholicFamiliesAiBudgetingTithingFasterFiWithoutBurnout />} />
        <Route path="/blog/catholic-families-ai-summer-stewardship-faith-fun-and-fi" element={<CatholicFamiliesAiSummerStewardshipFaithFunAndFi />} />
        <Route path="*" element={<div className="p-10 text-center text-xl">Page not found — <a href="/" className="text-indigo-600 underline">Go Home</a></div>} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </React.StrictMode>
);
