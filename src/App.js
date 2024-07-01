import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import AffortableHousing from "./components/AffortableHousing/AffortableHousing";
import AffortableHousingDiscription from "./components/AffortableHousing/AffortableHousingDiscription";
import AffortableHousingAbout from "./components/AffortableHousing/AffortableHousingAbout";
import AffortableHousingbenefits from "./components/AffortableHousing/AffortableHousingbenefits";
import BasaltMining from "./components/BasaltMining/BasaltMining";
import BasaltMiningDiscription from "./components/BasaltMining/BasaltMiningDiscription";
import BasaltMiningbenefits from "./components/BasaltMining/BasaltMiningbenefits";
import GreenCementbenefits from "./components/GreenCement/GreenCementbenefits";
import GreenCementDiscription from "./components/GreenCement/GreenCementDiscription";
import GreenCement from "./components/GreenCement/GreenCement";
import GreenCementQuality from "./components/GreenCement/GreenCementQuality";
import SewageSludgecharateristics from "./components/SewageSludge/SewageSludgecharateristics";
import SewageSludgeAdvantage from "./components/SewageSludge/SewageSludgeAdvantage";
import SewageSludgeDiscription from "./components/SewageSludge/SewageSludgeDiscription";
import SewageSludge from "./components/SewageSludge/SewageSludge";
import Gasification from "./components/Gasification/Gasification";
import GasificationDiscription from "./components/Gasification/GasificationDiscription";
import GasificationAdvantage from "./components/Gasification/GasificationAdvantage";
import Gasificationcharateristics from "./components/Gasification/Gasificationcharateristics";
import Cholestrol from "./components/Cholestrol/Cholestrol";
import CholestrolDiscription from "./components/Cholestrol/CholestrolDiscription";
import CholestrolAdvantage from "./components/Cholestrol/CholestrolAdvantage";
import Cholestrolcharateristics from "./components/Cholestrol/Cholestrolcharateristics";
import Strategize from "./components/Strategize/Strategize";
import PatentLicensing from "./components/PatentLicensing/PatentLicensing";
import PatentValuation from "./components/PatentValuation/PatentValuation";
import TechnologyTransfer from "./components/TechnologyTransfer/TechnologyTransfer";
import SUNSULTechnology from "./components/SUNSULTechnology/SUNSULTechnology";
import SUNSULTechnologyDiscription from "./components/SUNSULTechnology/SUNSULTechnologyDiscription";
import SUNSULTechnologyAdvantage from "./components/SUNSULTechnology/SUNSULTechnologyAdvantage";
import SUNSULTechnologybenefits from "./components/SUNSULTechnology/SUNSULTechnologybenefits";
import ElectricBus from "./components/ElectricBus/ElectricBus";
import ElectricBusDiscription from "./components/ElectricBus/ElectricBusDiscription";
import ElectricBusAdvantage from "./components/ElectricBus/ElectricBusAdvantage";
import ElectricBusbenefits from "./components/ElectricBus/ElectricBusbenefits";
import HighPerformanecCrete from "./components/HighPerformanecCrete/HighPerformanecCrete";
import HighPerformanecCreteDiscription from "./components/HighPerformanecCrete/HighPerformanecCreteDiscription";
import HighPerformanecCreteAdvantage from "./components/HighPerformanecCrete/HighPerformanecCreteAdvantage";
import HighPerformanecCretebenefits from "./components/HighPerformanecCrete/HighPerformanecCretebenefits";
import BasaltRebar from "./components/BasaltRebar/BasaltRebar";
import BasaltRebarDiscription from "./components/BasaltRebar/BasaltRebarDiscription";
import BasaltRebarbenefits from "./components/BasaltRebar/BasaltRebarbenefits";
import PatentMonetization from "./components/PatentMonetization/PatentMonetization";
import PatentCommercialization from "./components/PatentCommercialization/PatentCommercialization";
import Invest from "./components/Invest/Invest";
import PatentsDevelopmentProgram from "./components/PatentsDevelopmentProgram/PatentsDevelopmentProgram";
import Research from "./components/Research/Research";
import CompanyOverview from "./components/CompanyOverview/CompanyOverview";
import Founder from "./components/Founder/Founder";
import Carrier from "./components/Carrier/Carrier";
import News from "./components/News/News";
import FAQS from "./components/FAQS/FAQS";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* SUNSUL_Technology */}
        <Route path="/SUNSUL_Technology" element={<SUNSULTechnology />}>
          <Route
            path="/SUNSUL_Technology/Description"
            element={<SUNSULTechnologyDiscription />}
          />
          <Route
            path="/SUNSUL_Technology/Advantage"
            element={<SUNSULTechnologyAdvantage />}
          />
          <Route
            path="/SUNSUL_Technology/benefits"
            element={<SUNSULTechnologybenefits />}
          />
        </Route>
        {/* Sewage_sludge */}
        <Route path="/Sewage_sludge" element={<SewageSludge />}>
          <Route
            path="/Sewage_sludge/Description"
            element={<SewageSludgeDiscription />}
          />
          <Route
            path="/Sewage_sludge/Advantage"
            element={<SewageSludgeAdvantage />}
          />
          <Route
            path="/Sewage_sludge/charateristics"
            element={<SewageSludgecharateristics />}
          />
        </Route>
        {/* Basalt_Mining */}
        <Route path="/Basalt_Mining" element={<BasaltMining />}>
          <Route
            path="/Basalt_Mining/Description"
            element={<BasaltMiningDiscription />}
          />
          <Route
            path="/Basalt_Mining/benefits"
            element={<BasaltMiningbenefits />}
          />
        </Route>
        {/* Electric Bus */}
        <Route path="/Electric_Bus" element={<ElectricBus />}>
          <Route
            path="/Electric_Bus/Description"
            element={<ElectricBusDiscription />}
          />
          <Route
            path="/Electric_Bus/Advantage"
            element={<ElectricBusAdvantage />}
          />
          <Route
            path="/Electric_Bus/benefits"
            element={<ElectricBusbenefits />}
          />
        </Route>
        {/* Gasification */}
        <Route path="/Gasification" element={<Gasification />}>
          <Route
            path="/Gasification/Description"
            element={<GasificationDiscription />}
          />
          <Route
            path="/Gasification/Advantage"
            element={<GasificationAdvantage />}
          />
          <Route
            path="/Gasification/charateristics"
            element={<Gasificationcharateristics />}
          />
        </Route>
        {/* Green_cement */}
        <Route path="/Green_cement" element={<GreenCement />}>
          <Route
            path="/Green_cement/Description"
            element={<GreenCementDiscription />}
          />
          <Route
            path="/Green_cement/Quality"
            element={<GreenCementQuality />}
          />
          <Route
            path="/Green_cement/benefits"
            element={<GreenCementbenefits />}
          />
        </Route>
        {/* High_Performanec_Crete */}
        <Route
          path="/High_Performanec_Crete"
          element={<HighPerformanecCrete />}
        >
          <Route
            path="/High_Performanec_Crete/Description"
            element={<HighPerformanecCreteDiscription />}
          />
          <Route
            path="/High_Performanec_Crete/Advantage"
            element={<HighPerformanecCreteAdvantage />}
          />
          <Route
            path="/High_Performanec_Crete/Characteristics"
            element={<HighPerformanecCretebenefits />}
          />
        </Route>
        {/* AffortableHousing */}
        <Route path="/affortable_housing" element={<AffortableHousing />}>
          <Route
            path="/affortable_housing/Description"
            element={<AffortableHousingDiscription />}
          />
          <Route
            path="/affortable_housing/Affordable_housing"
            element={<AffortableHousingAbout />}
          />
          <Route
            path="/affortable_housing/benefits"
            element={<AffortableHousingbenefits />}
          />
        </Route>
        {/* Basalt Rebar */}
        <Route path="/Basalt_Rebar" element={<BasaltRebar />}>
          <Route
            path="/Basalt_Rebar/Description"
            element={<BasaltRebarDiscription />}
          />
          <Route
            path="/Basalt_Rebar/benefits"
            element={<BasaltRebarbenefits />}
          />
        </Route>

        {/* cholestrol */}
        <Route path="/Cholestrol" element={<Cholestrol />}>
          <Route
            path="/Cholestrol/Description"
            element={<CholestrolDiscription />}
          />
          <Route
            path="/Cholestrol/Advantage"
            element={<CholestrolAdvantage />}
          />
          <Route
            path="/Cholestrol/charateristics"
            element={<Cholestrolcharateristics />}
          />
        </Route>
        {/* Patent_Monetization */}
        <Route path="/Patent_Monetization" element={<PatentMonetization />} />
        {/* Patent_Commercialization */}
        <Route
          path="/Patent_Commercialization"
          element={<PatentCommercialization />}
        />
        {/* Invest */}
        <Route path="/Invest" element={<Invest />} />
        {/* Patents Development Program */}
        <Route
          path="/Patents_Development_Program"
          element={<PatentsDevelopmentProgram />}
        />
        {/* Research */}
        <Route path="/Research" element={<Research />} />
        {/* Strategize */}
        <Route path="/Strategize" element={<Strategize />} />
        {/* Patent Licensing */}
        <Route path="/PatentLicensing" element={<PatentLicensing />} />
        {/* Patent Valuation */}
        <Route path="/PatentValuation" element={<PatentValuation />} />
        {/* TechnologyTransfer */}
        <Route path="/TechnologyTransfer" element={<TechnologyTransfer />} />
        {/* Company Overview */}
        <Route path="/Company_Overview" element={<CompanyOverview />} />
        {/* Founder */}
        <Route path="/Founder" element={<Founder />} />
        {/* Carrier */}
        <Route path="/Carrier" element={<Carrier />} />
        {/* FAQS */}
        <Route path="/FAQS" element={<FAQS />} />
        {/* Carrier */}
        {/* News Updates */}
        <Route path="/News" element={<News />} />
      </Routes>
    </>
  );
};

export default App;
