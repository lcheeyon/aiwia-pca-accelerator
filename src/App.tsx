
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import DataProtectionTrustmark from "./pages/services/DataProtectionTrustmark";
import DigitalTransformation from "./pages/services/DigitalTransformation";
import AIAdoption from "./pages/services/AIAdoption";
import Compliance from "./pages/services/Compliance";
import AITechnologyTraining from "./pages/services/AITechnologyTraining";
import GenerativeAIUsage from "./pages/services/GenerativeAIUsage";
import PrivacySecurityTraining from "./pages/services/PrivacySecurityTraining";
import DataProtectionFundamentals from "./pages/services/DataProtectionFundamentals";
import CybersecurityEssentials from "./pages/services/CybersecurityEssentials";
import ComplianceImplementation from "./pages/services/ComplianceImplementation";
import AgileAdoptionTraining from "./pages/services/AgileAdoptionTraining";
import ProfessionalScrumMaster from "./pages/services/ProfessionalScrumMaster";
import ProfessionalProductOwner from "./pages/services/ProfessionalProductOwner";
import CustomerServiceAI from "./pages/services/CustomerServiceAI";
import FraudDetection from "./pages/services/FraudDetection";
import AutomatedReporting from "./pages/services/AutomatedReporting";
import HROptimization from "./pages/services/HROptimization";
import ISO27001 from "./pages/services/ISO27001";
import ISO42001 from "./pages/services/ISO42001";
import DPOService from "./pages/services/DPOService";
import MicrosoftCopilot from "./pages/services/MicrosoftCopilot";
import AIWIAPCAFramework from "./pages/news/AIWIAPCAFramework";
import ISO42001GameChanger from "./pages/news/ISO42001GameChanger";
import SingaporeDataProtectionTrustmark from "./pages/news/SingaporeDataProtectionTrustmark";
import FutureRAGTechnologies from "./pages/news/FutureRAGTechnologies";
import AgileTransformationBeyondSoftware from "./pages/news/AgileTransformationBeyondSoftware";
import CybersecurityAIAge from "./pages/news/CybersecurityAIAge";
import OpenAIAgenticAI from "./pages/news/OpenAIAgenticAI";
import MicrosoftCopilotAgentic from "./pages/news/MicrosoftCopilotAgentic";
import GoogleAgentSpaces from "./pages/news/GoogleAgentSpaces";
import AgenticAIEnterpriseAdoption from "./pages/news/AgenticAIEnterpriseAdoption";
import AgenticAIGovernance from "./pages/news/AgenticAIGovernance";
import Healthcare from "./pages/ai-applications/Healthcare";
import FinanceInsurance from "./pages/ai-applications/FinanceInsurance";
import Energy from "./pages/ai-applications/Energy";
import Transportation from "./pages/ai-applications/Transportation";
import Housing from "./pages/ai-applications/Housing";
import Defence from "./pages/ai-applications/Defence";
import Singapore from "./pages/ai-regulations/Singapore";
import EUAIAct from "./pages/ai-regulations/EUAIAct";
import USA from "./pages/ai-regulations/USA";
import China from "./pages/ai-regulations/China";
import Global from "./pages/ai-regulations/Global";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/data-protection-trustmark" element={<DataProtectionTrustmark />} />
          <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/services/ai-adoption" element={<AIAdoption />} />
          <Route path="/services/compliance" element={<Compliance />} />
          <Route path="/services/ai-technology-training" element={<AITechnologyTraining />} />
          <Route path="/services/generative-ai-usage" element={<GenerativeAIUsage />} />
          <Route path="/services/privacy-security-training" element={<PrivacySecurityTraining />} />
          <Route path="/services/data-protection-fundamentals" element={<DataProtectionFundamentals />} />
          <Route path="/services/cybersecurity-essentials" element={<CybersecurityEssentials />} />
          <Route path="/services/compliance-implementation" element={<ComplianceImplementation />} />
          <Route path="/services/agile-adoption-training" element={<AgileAdoptionTraining />} />
          <Route path="/services/professional-scrum-master" element={<ProfessionalScrumMaster />} />
          <Route path="/services/professional-product-owner" element={<ProfessionalProductOwner />} />
          <Route path="/services/customer-service-ai" element={<CustomerServiceAI />} />
          <Route path="/services/fraud-detection" element={<FraudDetection />} />
          <Route path="/services/automated-reporting" element={<AutomatedReporting />} />
          <Route path="/services/hr-optimization" element={<HROptimization />} />
          <Route path="/services/iso-27001" element={<ISO27001 />} />
          <Route path="/services/iso-42001" element={<ISO42001 />} />
          <Route path="/services/dpo-service" element={<DPOService />} />
          <Route path="/services/microsoft-copilot" element={<MicrosoftCopilot />} />
          <Route path="/news/aiwia-pca-framework" element={<AIWIAPCAFramework />} />
          <Route path="/news/iso-42001-game-changer" element={<ISO42001GameChanger />} />
          <Route path="/news/singapore-data-protection-trustmark" element={<SingaporeDataProtectionTrustmark />} />
          <Route path="/news/future-rag-technologies" element={<FutureRAGTechnologies />} />
          <Route path="/news/agile-transformation-beyond-software" element={<AgileTransformationBeyondSoftware />} />
          <Route path="/news/cybersecurity-ai-age" element={<CybersecurityAIAge />} />
          <Route path="/news/openai-agentic-ai-revolution" element={<OpenAIAgenticAI />} />
          <Route path="/news/microsoft-copilot-agentic-update" element={<MicrosoftCopilotAgentic />} />
          <Route path="/news/google-agent-spaces-launch" element={<GoogleAgentSpaces />} />
          <Route path="/news/agentic-ai-enterprise-adoption" element={<AgenticAIEnterpriseAdoption />} />
          <Route path="/news/agentic-ai-governance-framework" element={<AgenticAIGovernance />} />
          <Route path="/ai-applications/healthcare" element={<Healthcare />} />
          <Route path="/ai-applications/finance-insurance" element={<FinanceInsurance />} />
          <Route path="/ai-applications/energy" element={<Energy />} />
          <Route path="/ai-applications/transportation" element={<Transportation />} />
          <Route path="/ai-applications/housing" element={<Housing />} />
          <Route path="/ai-applications/defence" element={<Defence />} />
          <Route path="/ai-regulations/singapore" element={<Singapore />} />
          <Route path="/ai-regulations/eu-ai-act" element={<EUAIAct />} />
          <Route path="/ai-regulations/usa" element={<USA />} />
          <Route path="/ai-regulations/china" element={<China />} />
          <Route path="/ai-regulations/global" element={<Global />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
