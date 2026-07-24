import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import Calculators from './pages/Calculators.jsx';
import BlogIndex from './pages/BlogIndex.jsx';
import Tools from './pages/Tools.jsx';
import WhyFIForEveryone from './pages/WhyFIForEveryone.jsx';
import CatholicFamiliesLeverageAiForPrayerfulFinancialFreedomAndLastingLegacy from './pages/catholic-families-leverage-ai-for-prayerful-financial-freedom-and-lasting-legacy.jsx';
import CatholicParentsBuildingFiLegacyWithAiAndPrayer from './pages/catholic-parents-building-fi-legacy-with-ai-and-prayer.jsx';
import CatholicMomsDadsUseAiToBuildDebtFreeFaithFilledFamilyLegacy from './pages/catholic-moms-dads-use-ai-to-build-debt-free-faith-filled-family-legacy.jsx';
import CatholicFamiliesHarnessAiForPrayerfulFiAndGenerationalLegacy from './pages/catholic-families-harness-ai-for-prayerful-fi-and-generational-legacy.jsx';
import AiAssistedStewardshipHowCatholicFamiliesLeverageSmartToolsForFiAndFaithfulLiving from './pages/ai-assisted-stewardship-how-catholic-families-leverage-smart-tools-for-fi-and-faithful-living.jsx';
import RaisingFaithFilledKidsWhileBuildingFinancialFreedom from './pages/raising-faith-filled-kids-while-building-financial-freedom.jsx';
import CatholicDadsLeadingFamilyFiWithAiAndFaith from './pages/catholic-dads-leading-family-fi-with-ai-and-faith.jsx';
import PrayingYourWayToFinancialFreedomHowChristianFamiliesCanBuildWealthGenerosityAndPeaceTogether from './pages/praying-your-way-to-financial-freedom-how-christian-families-can-build-wealth-generosity-and-peace-together.jsx';
import HowChristianCouplesUnlockFinancialFreedomTogetherFaithTeamworkAndALegacyYourFamilyWillThankYouFor from './pages/how-christian-couples-unlock-financial-freedom-together-faith-teamwork-and-a-legacy-your-family-will-thank-you-for.jsx';
import FaithfulParentingOnThePathToFiCreatingMarginForWhatMattersMostInYourChristianHome from './pages/faithful-parenting-on-the-path-to-fi-creating-margin-for-what-matters-most-in-your-christian-home.jsx';
import RaisingGenerousGroundedKidsFaithFamilyBudgetingAndSharedFinancialFreedom from './pages/raising-generous-grounded-kids-faith-family-budgeting-and-shared-financial-freedom.jsx';
import StewardingYourFamilysFutureBuildingGenerationalWealthThroughFaithAndFi from './pages/stewarding-your-familys-future-building-generational-wealth-through-faith-and-fi.jsx';
import HowCatholicFamiliesCanTurnSummerIntoASeasonOfFaithAndFinancialFreedom from './pages/how-catholic-families-can-turn-summer-into-a-season-of-faith-and-financial-freedom.jsx';
import HowCatholicFamiliesCanTurnSummerAdventuresIntoFaithAndFinancialFreedomLessons from './pages/how-catholic-families-can-turn-summer-adventures-into-faith-and-financial-freedom-lessons.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/calculators" element={<Calculators />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/tools" element={<Tools />} />

        {/* Blog posts */}
        <Route path="/blog/why-fi-for-everyone" element={<WhyFIForEveryone />} />
        <Route path="/blog/catholic-families-leverage-ai-for-prayerful-financial-freedom-and-lasting-legacy" element={<CatholicFamiliesLeverageAiForPrayerfulFinancialFreedomAndLastingLegacy />} />
        <Route path="/blog/catholic-parents-building-fi-legacy-with-ai-and-prayer" element={<CatholicParentsBuildingFiLegacyWithAiAndPrayer />} />
        <Route path="/blog/catholic-moms-dads-use-ai-to-build-debt-free-faith-filled-family-legacy" element={<CatholicMomsDadsUseAiToBuildDebtFreeFaithFilledFamilyLegacy />} />
        <Route path="/blog/catholic-families-harness-ai-for-prayerful-fi-and-generational-legacy" element={<CatholicFamiliesHarnessAiForPrayerfulFiAndGenerationalLegacy />} />
        <Route path="/blog/ai-assisted-stewardship-how-catholic-families-leverage-smart-tools-for-fi-and-faithful-living" element={<AiAssistedStewardshipHowCatholicFamiliesLeverageSmartToolsForFiAndFaithfulLiving />} />
        <Route path="/blog/raising-faith-filled-kids-while-building-financial-freedom" element={<RaisingFaithFilledKidsWhileBuildingFinancialFreedom />} />
        <Route path="/blog/catholic-dads-leading-family-fi-with-ai-and-faith" element={<CatholicDadsLeadingFamilyFiWithAiAndFaith />} />
        <Route path="/blog/praying-your-way-to-financial-freedom-how-christian-families-can-build-wealth-generosity-and-peace-together" element={<PrayingYourWayToFinancialFreedomHowChristianFamiliesCanBuildWealthGenerosityAndPeaceTogether />} />
        <Route path="/blog/how-christian-couples-unlock-financial-freedom-together-faith-teamwork-and-a-legacy-your-family-will-thank-you-for" element={<HowChristianCouplesUnlockFinancialFreedomTogetherFaithTeamworkAndALegacyYourFamilyWillThankYouFor />} />
        <Route path="/blog/faithful-parenting-on-the-path-to-fi-creating-margin-for-what-matters-most-in-your-christian-home" element={<FaithfulParentingOnThePathToFiCreatingMarginForWhatMattersMostInYourChristianHome />} />
        <Route path="/blog/raising-generous-grounded-kids-faith-family-budgeting-and-shared-financial-freedom" element={<RaisingGenerousGroundedKidsFaithFamilyBudgetingAndSharedFinancialFreedom />} />
        <Route path="/blog/stewarding-your-familys-future-building-generational-wealth-through-faith-and-fi" element={<StewardingYourFamilysFutureBuildingGenerationalWealthThroughFaithAndFi />} />
        <Route path="/blog/how-catholic-families-can-turn-summer-into-a-season-of-faith-and-financial-freedom" element={<HowCatholicFamiliesCanTurnSummerIntoASeasonOfFaithAndFinancialFreedom />} />
        <Route path="/blog/how-catholic-families-can-turn-summer-adventures-into-faith-and-financial-freedom-lessons" element={<HowCatholicFamiliesCanTurnSummerAdventuresIntoFaithAndFinancialFreedomLessons />} />

        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
