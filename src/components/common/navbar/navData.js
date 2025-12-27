// All navigation dropdown data in one place

export const ABOUT_DROPDOWN_ITEMS = [
  { label: "History", path: "/history" },
  { label: "Mission & Vission", path: "/mission-vision" },
  { label: "Founder", path: "/founder" },
  { label: "Board of Trustees (BoT)", path: "/bot" },
  { label: "Accreditation", path: "/accreditation" },
  { label: "International Relation", path: "/international-relation" },
  { label: "Achievement", path: "/achievement" },
  {
    label: "Gallery",
    path: "#",
    submenu: [
      { label: "Photo Gallery", path: "/gallery/photo" },
      { label: "Tour Gallery", path: "/gallery/tour" },
      { label: "Video Gallery", path: "/gallery/video" },
    ],
  },
];

export const ADMISSION_DROPDOWN_ITEMS = [
  { label: "Admission Information", path: "/admission-info" },
  { label: "Undergraduate", path: "/undergraduate" },
  { label: "Graduate", path: "/graduate" },
  { label: "Post Graduate Diploma", path: "/post-graduate-diploma" },
];

export const AUTHORITIES_ITEMS = [
  { label: "Syndicate", path: "/syndicate" },
  { label: "Academic Council", path: "/academic-council" },
];

export const OFFICES_ITEMS = [
  { label: "Vice Chancellor", path: "/vice-chancellor" },
  { label: "Treasurer", path: "/treasurer" },
  { label: "Controller of Examinations", path: "/controller-exams" },
  { label: "Registrar", path: "/registrar" },
  { label: "Proctor", path: "/proctor" },
  { label: "Information Technology", path: "/it-cell" },
  { label: "Accounts", path: "/accounts" },
  { label: "Admission", path: "/admission-office" },
  { label: "Librarian", path: "/librarian" },
];

export const PEOPLE_ITEMS = [
  { label: "Deans of Faculties", path: "/deans" },
  { label: "Faculty Members", path: "/faculty-members" },
  { label: "Faculty Staffs", path: "/faculty-staffs" },
];

export const STUDENTS_ITEMS = [
  {
    label: "Student Life",
    path: "#",
    submenu: [
      { label: "Campus", path: "/campus" },
      { label: "Facility", path: "/facility" },
      { label: "Class Room", path: "/classroom" },
      { label: "Lab", path: "/lab" },
      { label: "Cultural Club", path: "/cultural-club" },
      { label: "Blood Donation Club", path: "/blood-donation-club" },
      { label: "Sport Club", path: "/sport-club" },
      { label: "Debating Club", path: "/debating-club" },
    ],
  },
  { label: "Future Student", path: "/future-student" },
  { label: "Current Student", path: "/current-student" },
  { label: "Degree Verification", path: "/degree-verification" },
];

export const ACADEMIC_DROPDOWN_ITEMS = [
  {
    label: "School of Science & Engineering",
    path: "#",
    submenu: [
      { label: "Computer Science & Engineering (CSE)", path: "/academic/cse" },
      { label: "Electrical & Electronic Engineering (EEE)", path: "/academic/eee" },
      { label: "Textile Engineering", path: "/academic/textile" },
      { label: "Medical Physics", path: "/academic/medical-physics" },
      { label: "Mechatronics & Micro-Mechatronics", path: "/academic/mechatronics" },
    ],
  },
  {
    label: "School of Biomedical Sciences",
    path: "#",
    submenu: [
      { label: "Biochemistry & Biotechnology", path: "/academic/bmb" },
      { label: "Microbiology", path: "/academic/microbiology" },
      { label: "Pharmacy", path: "/academic/pharmacy" },
    ],
  },
  {
    label: "School of Business",
    path: "#",
    submenu: [
      { label: "Management Information System (MIS)", path: "/academic/mis" },
      { label: "Business Administration", path: "/academic/business-admin" },
    ],
  },
  {
    label: "School of Arts & Social Science",
    path: "#",
    submenu: [
      { label: "English", path: "/academic/english" },
      { label: "Law", path: "/academic/law" },
    ],
  },
];
export const MAIN_NAV_ITEMS = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", type: "dropdown", items: ABOUT_DROPDOWN_ITEMS },
  { label: "ADMISSION", type: "dropdown", items: ADMISSION_DROPDOWN_ITEMS },
  { label: "AUTHORITIES", type: "dropdown", items: AUTHORITIES_ITEMS },
  { label: "OFFICES", type: "dropdown", items: OFFICES_ITEMS },
  { label: "PEOPLE", type: "dropdown", items: PEOPLE_ITEMS },
  { label: "STUDENTS", type: "dropdown", items: STUDENTS_ITEMS },
  { label: "ACADEMIC",  path: "/academic" },
  { label: "CONTACT US", path: "/contact" },
  { label: "RESULT", path: "/result" },
];

export const TOP_LINKS = [
  { label: "Journal", path: "/journal" },
  { label: "Library", path: "/library" },
  { label: "IQAC", path: "/iqac" },
  { label: "Career", path: "/career" },
  { label: "Alumni", path: "/alumni" },
  { label: "Help-Desk", path: "/help-desk" },
  { label: "বিজ্ঞপ্তি/শিক্ষা কার্যক্রম", path: "/notices" },
];
