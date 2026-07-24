import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import BlogIndex from './pages/BlogIndex.jsx';

import WhyFIForEveryone from './pages/WhyFIForEveryone.jsx';
import CatholicFamiliesLeverageAiForPrayerfulFinancialFreedomAndLastingLegacy from './pages/catholic-families-leverage-ai-for-prayerful-financial-freedom-and-lasting-legacy.jsx';
import AiAssistedStewardshipHowCatholicFamiliesLeverageSmartToolsForFiAndFaithfulLiving from './pages/ai-assisted-stewardship-how-catholic-families-leverage-smart-tools-for-fi-and-faithful-living.jsx';
import PrayingYourWayToFinancialFreedomHowChristianFamiliesCanBuildWealthGenerosityAndPeaceTogether from './pages/praying-your-way-to-financial-freedom-how-christian-families-can-build-wealth-generosity-and-peace-together.jsx';
import RaisingFaithFilledKidsWhileBuildingFinancialFreedom from './pages/raising-faith-filled-kids-while-building-financial-freedom.jsx';
import RaisingGenerousGroundedKidsFaithFamilyBudgetingAndSharedFinancialFreedom from './pages/raising-generous-grounded-kids-faith-family-budgeting-and-shared-financial-freedom.jsx';
import StewardingYourFamilysFutureBuildingGenerationalWealthThroughFaithAndFi from './pages/stewarding-your-familys-future-building-generational-wealth-through-faith-and-fi.jsx';
import FaithfulParentingOnThePathToFiCreatingMarginForWhatMattersMostInYourChristianHome from './pages/faithful-parenting-on-the-path-to-fi-creating-margin-for-what-matters-most-in-your-christian-home.jsx';
import HowChristianCouplesUnlockFinancialFreedomTogetherFaithTeamworkAndALegacyYourFamilyWillThankYouFor from './pages/how-christian-couples-unlock-financial-freedom-together-faith-teamwork-and-a-legacy-your-family-will-thank-you-for.jsx';
import CatholicDadsLeadingFamilyFiWithAiAndFaith from './pages/catholic-dads-leading-family-fi-with-ai-and-faith.jsx';
import CatholicMomsDadsUseAiToBuildDebtFreeFaithFilledFamilyLegacy from './pages/catholic-moms-dads-use-ai-to-build-debt-free-faith-filled-family-legacy.jsx';
import CatholicParentsBuildingFiLegacyWithAiAndPrayer from './pages/catholic-parents-building-fi-legacy-with-ai-and-prayer.jsx';
import CatholicFamiliesHarnessAiForPrayerfulFiAndGenerationalLegacy from './pages/catholic-families-harness-ai-for-prayerful-fi-and-generational-legacy.jsx';
import CatholicFamiliesUnlockingFiFasterWithAiAndPrayerfulPlanning from './pages/catholic-families-unlocking-fi-faster-with-ai-and-prayerful-planning.jsx';
import CatholicFamiliesCanReachFiTogetherAiPrayerAndSmartStewardship from './pages/catholic-families-can-reach-fi-together-ai-prayer-and-smart-stewardship.jsx';
import CatholicFamiliesBuildingGenerationalWealthWithAiPrayerAndFiStewardship from './pages/catholic-families-building-generational-wealth-with-ai-prayer-and-fi-stewardship.jsx';
import AiPoweredFamilyBudgetingForCatholicFi from './pages/ai-powered-family-budgeting-for-catholic-fi.jsx';
import AiForCatholicFamiliesTitheMoreStressLessReachFiFaster from './pages/ai-for-catholic-families-tithe-more-stress-less-reach-fi-faster.jsx';
import MakeTithingEasyAiToolsForCatholicFamiliesChasingFi from './pages/make-tithing-easy-ai-tools-for-catholic-families-chasing-fi.jsx';
import TitheMoreRetireEarlierAiForCatholicFamilyFi from './pages/tithe-more-retire-earlier-ai-for-catholic-family-fi.jsx';
import AiStewardshipCatholicFamiliesTithingBoldlyFi from './pages/ai-stewardship-catholic-families-tithing-boldly-fi.jsx';
import CatholicFamiliesAiForTithingAndFiWithoutTheStress from './pages/catholic-families-ai-for-tithing-and-fi-without-the-stress.jsx';
import CatholicFamiliesAiBudgetingTithingFasterFiWithoutBurnout from './pages/catholic-families-ai-budgeting-tithing-faster-fi-without-burnout.jsx';
import HowAiHelpsCatholicParentsBuildFiAndRaiseGenerousKids from './pages/how-ai-helps-catholic-parents-build-fi-and-raise-generous-kids.jsx';
import HowAiHelpsCatholicParentsRaiseFiSmartFaithFilledKids from './pages/how-ai-helps-catholic-parents-raise-fi-smart-faith-filled-kids.jsx';
import HowCatholicCouplesUseAiToBuildFiAndStrongerMarriages from './pages/how-catholic-couples-use-ai-to-build-fi-and-stronger-marriages.jsx';
import StrengthenYourCatholicMarriageWithAiForFamilyFiAndDeeperFaith from './pages/strengthen-your-catholic-marriage-with-ai-for-family-fi-and-deeper-faith.jsx';
import CatholicParentsAiToolsForDebtFreeFamilyLifeAndFi from './pages/catholic-parents-ai-tools-for-debt-free-family-life-and-fi.jsx';
import CatholicFamiliesUsingAiForSabbathRestAndFiStewardship from './pages/catholic-families-using-ai-for-sabbath-rest-and-fi-stewardship.jsx';
import CatholicFamiliesAiForSummerStewardshipAndBuildingFamilyFiLegacy from './pages/catholic-families-ai-for-summer-stewardship-and-building-family-fi-legacy.jsx';
import CatholicFamiliesAiPoweredSummerPlanningForFaithFunAndFasterFi from './pages/catholic-families-ai-powered-summer-planning-for-faith-fun-and-faster-fi.jsx';
import CatholicFamiliesAiForEpicSummerRoadTripsFaithAndFinancialFreedom from './pages/catholic-families-ai-for-epic-summer-road-trips-faith-and-financial-freedom.jsx';
import CatholicFamiliesAiSummerRoadTripsFaithAndFi from './pages/catholic-families-ai-summer-road-trips-faith-and-fi.jsx';
import CatholicFamiliesAiSummerStewardshipFaithFunAndFi from './pages/catholic-families-ai-summer-stewardship-faith-fun-and-fi.jsx';
import CatholicFamiliesAiForBackToSchoolSavingsAndFaithFilledFinancialFreedom from './pages/catholic-families-ai-for-back-to-school-savings-and-faith-filled-financial-freedom.jsx';
import CatholicFamiliesAiHolyBackToSchoolStewardshipFaithFamilyAndFi from './pages/catholic-families-ai-holy-back-to-school-stewardship-faith-family-and-fi.jsx';
import CatholicFamiliesAiFamilyPrayerRoutinesAndFiStewardship2026 from './pages/catholic-families-ai-family-prayer-routines-and-fi-stewardship-2026.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<BlogIndex />} />

        <Route path="/blog/why-fi-for-everyone" element={<WhyFIForEveryone />} />
        <Route path="/blog/catholic-families-leverage-ai-for-prayerful-financial-freedom-and-lasting-legacy" element={<CatholicFamiliesLeverageAiForPrayerfulFinancialFreedomAndLastingLegacy />} />
        <Route path="/blog/ai-assisted-stewardship-how-catholic-families-leverage-smart-tools-for-fi-and-faithful-living" element={<AiAssistedStewardshipHowCatholicFamiliesLeverageSmartToolsForFiAndFaithfulLiving />} />
        <Route path="/blog/praying-your-way-to-financial-freedom-how-christian-families-can-build-wealth-generosity-and-peace-together" element={<PrayingYourWayToFinancialFreedomHowChristianFamiliesCanBuildWealthGenerosityAndPeaceTogether />} />
        <Route path="/blog/raising-faith-filled-kids-while-building-financial-freedom" element={<RaisingFaithFilledKidsWhileBuildingFinancialFreedom />} />
        <Route path="/blog/raising-generous-grounded-kids-faith-family-budgeting-and-shared-financial-freedom" element={<RaisingGenerousGroundedKidsFaithFamilyBudgetingAndSharedFinancialFreedom />} />
        <Route path="/blog/stewarding-your-familys-future-building-generational-wealth-through-faith-and-fi" element={<StewardingYourFamilysFutureBuildingGenerationalWealthThroughFaithAndFi />} />
        <Route path="/blog/faithful-parenting-on-the-path-to-fi-creating-margin-for-what-matters-most-in-your-christian-home" element={<FaithfulParentingOnThePathToFiCreatingMarginForWhatMattersMostInYourChristianHome />} />
        <Route path="/blog/how-christian-couples-unlock-financial-freedom-together-faith-teamwork-and-a-legacy-your-family-will-thank-you-for" element={<HowChristianCouplesUnlockFinancialFreedomTogetherFaithTeamworkAndALegacyYourFamilyWillThankYouFor />} />
        <Route path="/blog/catholic-dads-leading-family-fi-with-ai-and-faith" element={<CatholicDadsLeadingFamilyFiWithAiAndFaith />} />
        <Route path="/blog/catholic-moms-dads-use-ai-to-build-debt-free-faith-filled-family-legacy" element={<CatholicMomsDadsUseAiToBuildDebtFreeFaithFilledFamilyLegacy />} />
        <Route path="/blog/catholic-parents-building-fi-legacy-with-ai-and-prayer" element={<CatholicParentsBuildingFiLegacyWithAiAndPrayer />} />
        <Route path="/blog/catholic-families-harness-ai-for-prayerful-fi-and-generational-legacy" element={<CatholicFamiliesHarnessAiForPrayerfulFiAndGenerationalLegacy />} />
        <Route path="/blog/catholic-families-unlocking-fi-faster-with-ai-and-prayerful-planning" element={<CatholicFamiliesUnlockingFiFasterWithAiAndPrayerfulPlanning />} />
        <Route path="/blog/catholic-families-can-reach-fi-together-ai-prayer-and-smart-stewardship" element={<CatholicFamiliesCanReachFiTogetherAiPrayerAndSmartStewardship />} />
        <Route path="/blog/catholic-families-building-generational-wealth-with-ai-prayer-and-fi-stewardship" element={<CatholicFamiliesBuildingGenerationalWealthWithAiPrayerAndFiStewardship />} />
        <Route path="/blog/ai-powered-family-budgeting-for-catholic-fi" element={<AiPoweredFamilyBudgetingForCatholicFi />} />
        <Route path="/blog/ai-for-catholic-families-tithe-more-stress-less-reach-fi-faster" element={<AiForCatholicFamiliesTitheMoreStressLessReachFiFaster />} />
        <Route path="/blog/make-tithing-easy-ai-tools-for-catholic-families-chasing-fi" element={<MakeTithingEasyAiToolsForCatholicFamiliesChasingFi />} />
        <Route path="/blog/tithe-more-retire-earlier-ai-for-catholic-family-fi" element={<TitheMoreRetireEarlierAiForCatholicFamilyFi />} />
        <Route path="/blog/ai-stewardship-catholic-families-tithing-boldly-fi" element={<AiStewardshipCatholicFamiliesTithingBoldlyFi />} />
        <Route path="/blog/catholic-families-ai-for-tithing-and-fi-without-the-stress" element={<CatholicFamiliesAiForTithingAndFiWithoutTheStress />} />
        <Route path="/blog/catholic-families-ai-budgeting-tithing-faster-fi-without-burnout" element={<CatholicFamiliesAiBudgetingTithingFasterFiWithoutBurnout />} />
        <Route path="/blog/how-ai-helps-catholic-parents-build-fi-and-raise-generous-kids" element={<HowAiHelpsCatholicParentsBuildFiAndRaiseGenerousKids />} />
        <Route path="/blog/how-ai-helps-catholic-parents-raise-fi-smart-faith-filled-kids" element={<HowAiHelpsCatholicParentsRaiseFiSmartFaithFilledKids />} />
        <Route path="/blog/how-catholic-couples-use-ai-to-build-fi-and-stronger-marriages" element={<HowCatholicCouplesUseAiToBuildFiAndStrongerMarriages />} />
        <Route path="/blog/strengthen-your-catholic-marriage-with-ai-for-family-fi-and-deeper-faith" element={<StrengthenYourCatholicMarriageWithAiForFamilyFiAndDeeperFaith />} />
        <Route path="/blog/catholic-parents-ai-tools-for-debt-free-family-life-and-fi" element={<CatholicParentsAiToolsForDebtFreeFamilyLifeAndFi />} />
        <Route path="/blog/catholic-families-using-ai-for-sabbath-rest-and-fi-stewardship" element={<CatholicFamiliesUsingAiForSabbathRestAndFiStewardship />} />
        <Route path="/blog/catholic-families-ai-for-summer-stewardship-and-building-family-fi-legacy" element={<CatholicFamiliesAiForSummerStewardshipAndBuildingFamilyFiLegacy />} />
        <Route path="/blog/catholic-families-ai-powered-summer-planning-for-faith-fun-and-faster-fi" element={<CatholicFamiliesAiPoweredSummerPlanningForFaithFunAndFasterFi />} />
        <Route path="/blog/catholic-families-ai-for-epic-summer-road-trips-faith-and-financial-freedom" element={<CatholicFamiliesAiForEpicSummerRoadTripsFaithAndFinancialFreedom />} />
        <Route path="/blog/catholic-families-ai-summer-road-trips-faith-and-fi" element={<CatholicFamiliesAiSummerRoadTripsFaithAndFi />} />
        <Route path="/blog/catholic-families-ai-summer-stewardship-faith-fun-and-fi" element={<CatholicFamiliesAiSummerStewardshipFaithFunAndFi />} />
        <Route path="/blog/catholic-families-ai-for-back-to-school-savings-and-faith-filled-financial-freedom" element={<CatholicFamiliesAiForBackToSchoolSavingsAndFaithFilledFinancialFreedom />} />
        <Route path="/blog/catholic-families-ai-holy-back-to-school-stewardship-faith-family-and-fi" element={<CatholicFamiliesAiHolyBackToSchoolStewardshipFaithFamilyAndFi />} />
        <Route path="/blog/catholic-families-ai-family-prayer-routines-and-fi-stewardship-2026" element={<CatholicFamiliesAiFamilyPrayerRoutinesAndFiStewardship2026 />} />

        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
