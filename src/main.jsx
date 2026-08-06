import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import './index.css';
import App from './App.jsx';
import Calculators from './pages/Calculators.jsx';
import BlogIndex from './pages/BlogIndex.jsx';
import Tools from './pages/Tools.jsx';
import Subscribe from './pages/Subscribe.jsx';
import RouteSeo from './components/RouteSeo.jsx';
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
import AiMealPlanningForCatholicFamiliesStretchTheBudgetAndAccelerateFi from './pages/ai-meal-planning-for-catholic-families-stretch-the-budget-and-accelerate-fi.jsx';
import CatholicFamiliesAiForBackToSchoolSavingsAndFaithFilledFinancialFreedom from './pages/catholic-families-ai-for-back-to-school-savings-and-faith-filled-financial-freedom.jsx';
import ProtectYourFamilysDigitalPrivacyStewardshipToolsForCatholicFi from './pages/protect-your-familys-digital-privacy-stewardship-tools-for-catholic-fi.jsx';
import TreatYourFiJourneyLikeAPilgrimageLessonsFromStJamesForCatholicFamilies from './pages/treat-your-fi-journey-like-a-pilgrimage-lessons-from-st-james-for-catholic-families.jsx';
import LessonsFromJoachimAndAnneForBuildingALastingFamilyLegacy from './pages/lessons-from-joachim-and-anne-for-building-a-lasting-family-legacy.jsx';
import BuildMarginToGiveFreelyLessonsFromStPantaleon from './pages/build-margin-to-give-freely-lessons-from-st-pantaleon.jsx';
import BuildAMoneySabbathIntoYourWeek from './pages/build-a-money-sabbath-into-your-week.jsx';
import ServeWithoutTheAnxietyLessonsFromMarthaMaryAndLazarus from './pages/serve-without-the-anxiety-lessons-from-martha-mary-and-lazarus.jsx';
import DetachmentCreatesRealFreedomLessonsFromStAlphonsusLiguori from './pages/detachment-creates-real-freedom-lessons-from-st-alphonsus-liguori.jsx';
import WhenLittleIsEnoughLessonsFromTheLoavesAndFishes from './pages/when-little-is-enough-lessons-from-the-loaves-and-fishes.jsx';
import BuildMarginForTrueHospitalityLessonsFromStLydia from './pages/build-margin-for-true-hospitality-lessons-from-st-lydia.jsx';
import SimplicityCreatesRealMarginLessonsFromStJohnVianney from './pages/simplicity-creates-real-margin-lessons-from-st-john-vianney.jsx';
import BuildOnTrustNotAnxietyLessonsFromOurLadyOfTheSnows from './pages/build-on-trust-not-anxiety-lessons-from-our-lady-of-the-snows.jsx';
import SeeTheGloryAheadLessonsFromTheTransfiguration from './pages/see-the-glory-ahead-lessons-from-the-transfiguration.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <RouteSeo />
        <Analytics />
        <SpeedInsights />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/subscribe" element={<Subscribe />} />

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
          <Route path="/blog/ai-meal-planning-for-catholic-families-stretch-the-budget-and-accelerate-fi" element={<AiMealPlanningForCatholicFamiliesStretchTheBudgetAndAccelerateFi />} />
          <Route path="/blog/catholic-families-ai-for-back-to-school-savings-and-faith-filled-financial-freedom" element={<CatholicFamiliesAiForBackToSchoolSavingsAndFaithFilledFinancialFreedom />} />
          <Route path="/blog/protect-your-familys-digital-privacy-stewardship-tools-for-catholic-fi" element={<ProtectYourFamilysDigitalPrivacyStewardshipToolsForCatholicFi />} />
          <Route path="/blog/treat-your-fi-journey-like-a-pilgrimage-lessons-from-st-james-for-catholic-families" element={<TreatYourFiJourneyLikeAPilgrimageLessonsFromStJamesForCatholicFamilies />} />
          <Route path="/blog/lessons-from-joachim-and-anne-for-building-a-lasting-family-legacy" element={<LessonsFromJoachimAndAnneForBuildingALastingFamilyLegacy />} />
          <Route path="/blog/build-margin-to-give-freely-lessons-from-st-pantaleon" element={<BuildMarginToGiveFreelyLessonsFromStPantaleon />} />
          <Route path="/blog/build-a-money-sabbath-into-your-week" element={<BuildAMoneySabbathIntoYourWeek />} />
          <Route path="/blog/serve-without-the-anxiety-lessons-from-martha-mary-and-lazarus" element={<ServeWithoutTheAnxietyLessonsFromMarthaMaryAndLazarus />} />
          <Route path="/blog/detachment-creates-real-freedom-lessons-from-st-alphonsus-liguori" element={<DetachmentCreatesRealFreedomLessonsFromStAlphonsusLiguori />} />
          <Route path="/blog/when-little-is-enough-lessons-from-the-loaves-and-fishes" element={<WhenLittleIsEnoughLessonsFromTheLoavesAndFishes />} />
          <Route path="/blog/build-margin-for-true-hospitality-lessons-from-st-lydia" element={<BuildMarginForTrueHospitalityLessonsFromStLydia />} />
          <Route path="/blog/simplicity-creates-real-margin-lessons-from-st-john-vianney" element={<SimplicityCreatesRealMarginLessonsFromStJohnVianney />} />
          <Route path="/blog/build-on-trust-not-anxiety-lessons-from-our-lady-of-the-snows" element={<BuildOnTrustNotAnxietyLessonsFromOurLadyOfTheSnows />} />
          <Route path="/blog/see-the-glory-ahead-lessons-from-the-transfiguration" element={<SeeTheGloryAheadLessonsFromTheTransfiguration />} />

          <Route path="*" element={<App />} />
        </Routes>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
