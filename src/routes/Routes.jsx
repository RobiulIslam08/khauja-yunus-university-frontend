import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
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
import PostGraduateDiploma from "../pages/Admission/PostGraduateDiploma";
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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
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
    ],
  },
]);