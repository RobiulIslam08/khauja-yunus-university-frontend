
import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import AcademicPolicy from "../pages/AcademicPolicy";
import ScienceEngineering from "../pages/faculty/ScienceEngineering";
import Business from "../pages/faculty/Business";
import BioMedical from "../pages/faculty/BioMedical";
import Law from "../pages/faculty/Law";
import HumanScience from "../pages/faculty/HumanScience";
import MainLayout from "../components/layout/MainLayout";
// ABOUT
import History from "../pages/About/History";
import MissionVision from "../pages/About/MissionVision";
import Founder from "../pages/About/Founder";
import BoT from "../pages/About/BoT";
import Accreditation from "../pages/About/Accreditation";
import InternationalRelation from "../pages/About/InternationalRelation";
import Achievement from "../pages/About/Achievement";
import PhotoGallery from "../pages/About/Gallery/PhotoGallery";
import TourGallery from "../pages/About/Gallery/TourGallery";
import VideoGallery from "../pages/About/Gallery/VideoGallery";
// ADMISSION
import AdmissionInfo from "../pages/Admission/AdmissionInfo";
import Undergraduate from "../pages/Admission/Undergraduate";
import Graduate from "../pages/Admission/Graduate";
// AUTHORITIES
import Syndicate from "../pages/Authorities/Syndicate";
import AcademicCouncil from "../pages/Authorities/AcademicCouncil";
// OFFICES
import ViceChancellor from "../pages/Offices/ViceChancellor";
import Treasurer from "../pages/Offices/Treasurer";
import ControllerExams from "../pages/Offices/ControllerExams";
import Registrar from "../pages/Offices/Registrar";
import Proctor from "../pages/Offices/Proctor";
import ITCell from "../pages/Offices/ITCell";
import Accounts from "../pages/Offices/Accounts";
import AdmissionOffice from "../pages/Offices/AdmissionOffice";
import Librarian from "../pages/Offices/Librarian";
// PEOPLE
import Deans from "../pages/People/Deans";
import FacultyMembers from "../pages/People/FacultyMembers";
import FacultyStaffs from "../pages/People/FacultyStaffs";

// STUDENTS
import Campus from "../pages/Students/Campus";
import Facility from "../pages/Students/Facility";
import Classroom from "../pages/Students/Classroom";
import Lab from "../pages/Students/Lab";
import CulturalClub from "../pages/Students/CulturalClub";
import BloodDonationClub from "../pages/Students/BloodDonationClub";
import SportClub from "../pages/Students/SportClub";
import DebatingClub from "../pages/Students/DebatingClub";
import FutureStudent from "../pages/Students/FutureStudent";
import CurrentStudent from "../pages/Students/CurrentStudent";
import DegreeVerification from "../pages/Students/DegreeVerification";
// TOP LINKS
import Journal from "../pages/Journal";
import Library from "../pages/Library";
import IQAC from "../pages/IQAC";
import Career from "../pages/Career";
import Alumni from "../pages/Alumni";
import HelpDesk from "../pages/HelpDesk";
import Result from "../pages/Result";

import Notices from "../pages/Notices";
import ErrorPage from "../pages/ErrorPage";
import Contact from "../pages/Contact";
import PostGraduateDiploma from "../pages/Admission/PostGraduateDiploma";


import BiochemistryLayout from "../pages/Academic/Departments/BiochemistyBiotechnology/BiochemistryLayout";
import BiochemistryHome from "../pages/Academic/Departments/BiochemistyBiotechnology/BiochemistryHome";
import BscInBcbt from "../pages/Academic/Departments/BiochemistyBiotechnology/BscInBcbt";
import FacultyMembersPageBcbt from "../pages/Academic/Departments/BiochemistyBiotechnology/FacultyMembersPageBcbt";
import FacultyStuffPageBcbt from "../pages/Academic/Departments/BiochemistyBiotechnology/FacultyStuffPageBCBT";

// Department Home Pages
import BusinessAdministrationHome from "../pages/Academic/Departments/BusinessAdministration/BusinessAdministrationHome";
import ComputerScienceEngineeringHome from "../pages/Academic/Departments/ComputerScienceEngineering/ComputerScienceEngineeringHome";
import InformationCommunicationTechnologyHome from "../pages/Academic/Departments/InformationCommunicationTechnology/InformationCommunicationTechnologyHome";
import ElectricalElectronicsEngineeringHome from "../pages/Academic/Departments/ElectricalElectronicsEngineering/ElectricalElectronicsEngineeringHome";
import EnglishHome from "../pages/Academic/Departments/English/EnglishHome";
import IslamicStudiesHome from "../pages/Academic/Departments/IslamicStudies/IslamicStudiesHome";
import LawHome from "../pages/Academic/Departments/Law/LawHome";
import LibraryInformationScienceHome from "../pages/Academic/Departments/LibraryInformationScience/LibraryInformationScienceHome";
import MechatronicsMicromechatronicsEngineeringHome from "../pages/Academic/Departments/MechatronicsMicromechatronicsEngineering/MechatronicsMicromechatronicsEngineeringHome";
import MedicalPhysicsHome from "../pages/Academic/Departments/MedicalPhysics/MedicalPhysicsHome";
import MicrobiologyHome from "../pages/Academic/Departments/Microbiology/MicrobiologyHome";
import PharmacyHome from "../pages/Academic/Departments/Pharmacy/PharmacyHome";
import BusinessAdministrationLayout from "../pages/Academic/Departments/BusinessAdministration/BusinessAdministrationLayout";
import ComputerScienceEngineeringLayout from "../pages/Academic/Departments/ComputerScienceEngineering/ComputerScienceEngineeringLayout";
import InformationCommunicationTechnologyLayout from "../pages/Academic/Departments/InformationCommunicationTechnology/InformationCommunicationTechnologyLayout";
import ElectricalElectronicsEngineeringLayout from "../pages/Academic/Departments/ElectricalElectronicsEngineering/ElectricalElectronicsEngineeringLayout";
import EnglishLayout from "../pages/Academic/Departments/English/EnglishLayout";
import IslamicStudiesLayout from "../pages/Academic/Departments/IslamicStudies/IslamicStudiesLayout";
import LawLayout from "../pages/Academic/Departments/Law/LawLayout";
import LibraryInformationScienceLayout from "../pages/Academic/Departments/LibraryInformationScience/LibraryInformationScienceLayout";
import MechatronicsMicromechatronicsEngineeringLayout from "../pages/Academic/Departments/MechatronicsMicromechatronicsEngineering/MechatronicsMicromechatronicsEngineeringLayout";
import MedicalPhysicsLayout from "../pages/Academic/Departments/MedicalPhysics/MedicalPhysicsLayout";
import MicrobiologyLayout from "../pages/Academic/Departments/Microbiology/MicrobiologyLayout";
import PharmacyLayout from "../pages/Academic/Departments/Pharmacy/PharmacyLayout";
import FacultyMembersPageBA from "../pages/Academic/Departments/BusinessAdministration/FacultyMembersPageBA";
import FacultyStaffPageBA from "../pages/Academic/Departments/BusinessAdministration/FacultyStaffPageBA";
import FacultyMembersPageCSE from "../pages/Academic/Departments/ComputerScienceEngineering/FacultyMembersPageCSE";
import FacultyStaffPageCSE from "../pages/Academic/Departments/ComputerScienceEngineering/FacultyStaffPageCSE";
import FacultyMembersPageICT from "../pages/Academic/Departments/InformationCommunicationTechnology/FacultyMembersPageICT";
import FacultyStaffPageICT from "../pages/Academic/Departments/InformationCommunicationTechnology/FacultyStaffPageICT";
import FacultyMembersPageEEE from "../pages/Academic/Departments/ElectricalElectronicsEngineering/FacultyMembersPageEEE";
import FacultyStaffPageEEE from "../pages/Academic/Departments/ElectricalElectronicsEngineering/FacultyStaffPageEEE";
import FacultyMembersPageENG from "../pages/Academic/Departments/English/FacultyMembersPageENG";
import FacultyStaffPageENG from "../pages/Academic/Departments/English/FacultyStaffPageENG";
import FacultyMembersPageISL from "../pages/Academic/Departments/IslamicStudies/FacultyMembersPageISL";
import FacultyStaffPageISL from "../pages/Academic/Departments/IslamicStudies/FacultyStaffPageISL";
import FacultyMembersPageLAW from "../pages/Academic/Departments/Law/FacultyMembersPageLAW";
import FacultyStaffPageLAW from "../pages/Academic/Departments/Law/FacultyStaffPageLAW";
import FacultyMembersPageLIS from "../pages/Academic/Departments/LibraryInformationScience/FacultyMembersPageLIS";
import FacultyStaffPageLIS from "../pages/Academic/Departments/LibraryInformationScience/FacultyStaffPageLIS";
import FacultyMembersPageMME from "../pages/Academic/Departments/MechatronicsMicromechatronicsEngineering/FacultyMembersPageMME";
import FacultyStaffPageMME from "../pages/Academic/Departments/MechatronicsMicromechatronicsEngineering/FacultyStaffPageMME";
import FacultyMembersPageMP from "../pages/Academic/Departments/MedicalPhysics/FacultyMembersPageMP";
import FacultyStaffPageMP from "../pages/Academic/Departments/MedicalPhysics/FacultyStaffPageMP";
import FacultyMembersPageMIC from "../pages/Academic/Departments/Microbiology/FacultyMembersPageMIC";
import FacultyStaffPageMIC from "../pages/Academic/Departments/Microbiology/FacultyStaffPageMIC";
import FacultyMembersPagePHR from "../pages/Academic/Departments/Pharmacy/FacultyMembersPagePHR";
import FacultyStaffPagePHR from "../pages/Academic/Departments/Pharmacy/FacultyStaffPagePHR";
import BSCinCSe from "../pages/UnderGraduatePrograms/BSCinCSe";
import BSCinMME from "../pages/UnderGraduatePrograms/BSCinMME";
import MSCinMME from "../pages/UnderGraduatePrograms/MSCinMME";
import BSCinETE from "../pages/UnderGraduatePrograms/BSCinETE";
import BSCinPharmac from "../pages/UnderGraduatePrograms/BSCinPharmac";
import BSCinBBA from "../pages/UnderGraduatePrograms/BSCinBBA";
import BSCinEEE from "../pages/UnderGraduatePrograms/BSCinEEE";
import BAEnglish from "../pages/UnderGraduatePrograms/BAEnglish";
import BSCinMicrobiology from "../pages/UnderGraduatePrograms/BSCinMicrobiology";
import LLB from "../pages/UnderGraduatePrograms/LLB";
import PGDinLIS from "../pages/PostGraduatePrograms/PGDinLIS";
import MBA from "../pages/GraduatePrograms/MBA";
import LLM from "../pages/GraduatePrograms/LLM";
import MAEnglish from "../pages/GraduatePrograms/MAEnglish";
import MAIslamicStudies from "../pages/GraduatePrograms/MAIslamicStudies";
import EMBA from "../pages/GraduatePrograms/EMBA";


export const router = createBrowserRouter([
  // Academic Mega Menu Pages (OUTSIDE MainLayout)

  // MainLayout and all other routes
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "contact", element: <Contact /> },
      // ABOUT
      { path: "history", element: <History /> },
      { path: "mission-vision", element: <MissionVision /> },
      { path: "founder", element: <Founder /> },
      { path: "bot", element: <BoT /> },
      { path: "accreditation", element: <Accreditation /> },
      { path: "international-relation", element: <InternationalRelation /> },
      { path: "achievement", element: <Achievement /> },
      { path: "gallery/photo", element: <PhotoGallery /> },
      { path: "gallery/tour", element: <TourGallery /> },
      { path: "gallery/video", element: <VideoGallery /> },
      // ADMISSION
      { path: "admission-info", element: <AdmissionInfo /> },
      { path: "undergraduate", element: <Undergraduate /> },
      { path: "graduate", element: <Graduate /> },
      { path: "post-graduate-diploma", element: <PostGraduateDiploma /> },
      // AUTHORITIES
      { path: "syndicate", element: <Syndicate /> },
      { path: "academic-council", element: <AcademicCouncil /> },
      // OFFICES
      { path: "vice-chancellor", element: <ViceChancellor /> },
      { path: "treasurer", element: <Treasurer /> },
      { path: "controller-exams", element: <ControllerExams /> },
      { path: "registrar", element: <Registrar /> },
      { path: "proctor", element: <Proctor /> },
      { path: "it-cell", element: <ITCell /> },
      { path: "accounts", element: <Accounts /> },
      { path: "admission-office", element: <AdmissionOffice /> },
      { path: "librarian", element: <Librarian /> },
      // PEOPLE
      { path: "deans", element: <Deans /> },
      { path: "faculty-members", element: <FacultyMembers /> },
      { path: "faculty-staffs", element: <FacultyStaffs /> },
      // STUDENTS
      { path: "campus", element: <Campus /> },
      { path: "facility", element: <Facility /> },
      { path: "classroom", element: <Classroom /> },
      { path: "lab", element: <Lab /> },
      { path: "cultural-club", element: <CulturalClub /> },
      { path: "blood-donation-club", element: <BloodDonationClub /> },
      { path: "sport-club", element: <SportClub /> },
      { path: "debating-club", element: <DebatingClub /> },
      { path: "future-student", element: <FutureStudent /> },
      { path: "current-student", element: <CurrentStudent /> },
      { path: "degree-verification", element: <DegreeVerification /> },
      // TOP LINKS
      { path: "journal", element: <Journal /> },
      { path: "library", element: <Library /> },
      { path: "iqac", element: <IQAC /> },
      { path: "career", element: <Career /> },
      { path: "alumni", element: <Alumni /> },
      { path: "help-desk", element: <HelpDesk /> },
      { path: "notices", element: <Notices /> },
      { path: "result", element: <Result /> },
      // ACADEMIC INFO & FACULTY
      { path: "academic/policy", element: <AcademicPolicy /> },
      { path: "faculty/science-engineering", element: <ScienceEngineering /> },
      { path: "faculty/business", element: <Business /> },
      { path: "faculty/bio-medical", element: <BioMedical /> },
      { path: "faculty/law", element: <Law /> },
      { path: "faculty/human-science", element: <HumanScience /> },
    ],
  },

  // ============================================================
  // Note: These are OUTSIDE the MainLayout because they have their own Navbar/Footer
  {
    path: "academic",
    children: [
      // 2.1 BIOCHEMISTRY DEPARTMENT
      {
        path: "biochemistry-biotechnology",
        element: <BiochemistryLayout />, // This loads the specific Dept Layout
        children: [
          {
            index: true,
            element: <BiochemistryHome />
          },
          {
            path: "bsc-in-bcbt",
            element: <BscInBcbt />
          },
          {
            path: "faculty-members",
            element: <FacultyMembersPageBcbt />
          },
          {
            path: "faculty-staff",
            element: <FacultyStuffPageBcbt />
          },
        ]
      },
      // 2.2 BUSINESS ADMINISTRATION
      {
        path: "business-administration",
        element: <BusinessAdministrationLayout />,
        children: [
          {
            index: true,
            element: <BusinessAdministrationHome />
          },
          {
            path: "bba",
            element: <BSCinBBA/>
          },
          {
            path: "mba",
            element: <MBA/>
          },
          {
            path: "emba",
            element: <EMBA/>
          },
          {
            path: "faculty-members",
            element: <FacultyMembersPageBA />
          },
          {
            path: "faculty-staff",
            element: <FacultyStaffPageBA />
          },
        ]
      },
      // 2.3 COMPUTER SCIENCE & ENGINEERING
      {
        path: "computer-science-engineering",
        element: <ComputerScienceEngineeringLayout />,
        children: [
          {
            index: true,
            element: <ComputerScienceEngineeringHome />
          },
          {
            path: "bsc-in-cse",
            element: <BSCinCSe/>
          },
          {
            path: "faculty-members",
            element: <FacultyMembersPageCSE />
          },
          {
            path: "faculty-staff",
            element: <FacultyStaffPageCSE />
          },
        ]
      },
      // 2.4 INFORMATION AND COMMUNICATION TECHNOLOGY
      {
        path: "information-communication-technology",
        element: <InformationCommunicationTechnologyLayout />,
        children: [
          {
            index: true,
            element: <InformationCommunicationTechnologyHome />
          },
          {
            path: "bsc-in-ict",
            element: <BscInBcbt/>
          },
          {
            path: "faculty-members",
            element: <FacultyMembersPageICT />
          },
          {
            path: "faculty-staff",
            element: <FacultyStaffPageICT />
          },
        ]
      },
      // 2.5 ELECTRICAL & ELECTRONICS ENGINEERING
      {
        path: "electrical-electronics-engineering",
        element: <ElectricalElectronicsEngineeringLayout />,
        children: [
          {
            index: true,
            element: <ElectricalElectronicsEngineeringHome />
          },
          {
            path: "bsc-in-eee",
            element:<BSCinEEE/>
          },
          {
            path: "bsc-in-ete",
            element: <BSCinETE/>
          },
          {
            path: "faculty-members",
            element: <FacultyMembersPageEEE />
          },
          {
            path: "faculty-staff",
            element: <FacultyStaffPageEEE />
          },
        ]
      },
      // 2.6 ENGLISH
      {
        path: "english",
        element: <EnglishLayout />,
        children: [
          {
            index: true,
            element: <EnglishHome />
          },
          {
            path: "ba-english",
            element: <BAEnglish/>
          },
          {
            path: "ma-english",
            element: <MAEnglish/>
          },
          {
            path: "faculty-members",
            element: <FacultyMembersPageENG />
          },
          {
            path: "faculty-staff",
            element: <FacultyStaffPageENG />
          },
        ]
      },
      // 2.7 ISLAMIC STUDIES
      {
        path: "islamic-studies",
        element: <IslamicStudiesLayout />,
        children: [
          {
            index: true,
            element: <IslamicStudiesHome />
          },
          {
            path: "MA-IS-Preli",
            element: <MAIslamicStudies/>
          },
          {
            path: "faculty-members",
            element: <FacultyMembersPageISL />
          },
          {
            path: "faculty-staff",
            element: <FacultyStaffPageISL />
          },
        ]
      },
      // 2.8 LAW
      {
        path: "law",
        element: <LawLayout />,
        children: [
          {
            index: true,
            element: <LawHome />
          },
          {
            path: "llb",
            element: <LLB/>
          },
          {
            path: "llm",
            element: <LLM/>
          },
          {
            path: "faculty-members",
            element: <FacultyMembersPageLAW />
          },
          {
            path: "faculty-staff",
            element: <FacultyStaffPageLAW />
          },
        ]
      },
      // 2.9 LIBRARY AND INFORMATION SCIENCE
      {
        path: "library-information-science",
        element: <LibraryInformationScienceLayout />,
        children: [
          {
            index: true,
            element: <LibraryInformationScienceHome />
          },
          {
            path: "pgd-lis",
            element: <PGDinLIS/>
          },
          {
            path: "faculty-members",
            element: <FacultyMembersPageLIS />
          },
          {
            path: "faculty-staff",
            element: <FacultyStaffPageLIS />
          },
        ]
      },
      // 2.10 MECHATRONICS AND MICROMECHATRONICS ENGINEERING
      {
        path: "mechatronics-micromechatronics-engineering",
        element: <MechatronicsMicromechatronicsEngineeringLayout />,
        children: [
          {
            index: true,
            element: <MechatronicsMicromechatronicsEngineeringHome />
          },
          {
            path: "bsc-in-mme",
            element: <BSCinMME/>
          },
          {
            path: "msc-in-mme",
            element: <MSCinMME/>
          },
          {
            path: "faculty-members",
            element: <FacultyMembersPageMME />
          },
          {
            path: "faculty-staff",
            element: <FacultyStaffPageMME />
          },
        ]
      },
      // 2.11 MEDICAL PHYSICS
      {
        path: "medical-physics",
        element: <MedicalPhysicsLayout />,
        children: [
          {
            index: true,
            element: <MedicalPhysicsHome />
          },
          {
            path: "bsc-in-medical-physics",
            element: <div>B.Sc. in Medical Physics Program Page</div>
          },
          {
            path: "faculty-members",
            element: <FacultyMembersPageMP />
          },
          {
            path: "faculty-staff",
            element: <FacultyStaffPageMP />
          },
        ]
      },
      // 2.12 MICROBIOLOGY
      {
        path: "microbiology",
        element: <MicrobiologyLayout />,
        children: [
          {
            index: true,
            element: <MicrobiologyHome />
          },
          {
            path: "bsc-in-microbiology",
            element: <BSCinMicrobiology/>
          },
          {
            path: "faculty-members",
            element: <FacultyMembersPageMIC />
          },
          {
            path: "faculty-staff",
            element: <FacultyStaffPageMIC />
          },
        ]
      },
      // 2.13 PHARMACY
      {
        path: "pharmacy",
        element: <PharmacyLayout />,
        children: [
          {
            index: true,
            element: <PharmacyHome />
          },
          {
            path: "bsc-in-pharmacy",
            element: <BSCinPharmac/>
          },
          {
            path: "faculty-members",
            element: <FacultyMembersPagePHR />
          },
          {
            path: "faculty-staff",
            element: <FacultyStaffPagePHR />
          },
        ]
      },
    ]
  }
]);