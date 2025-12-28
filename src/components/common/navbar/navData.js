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
  // ১. Academic Info
  {
    label: "Academic Info",
    path: "#",
    submenu: [
      { label: "Academic Policy", path: "/academic/policy" },
    ],
  },
  // ২. Faculty (অনুষদসমূহ)
  {
    label: "Faculty",
    path: "#",
    submenu: [
      { label: "Science and Engineering", path: "/faculty/science-engineering" },
      { label: "Business", path: "/faculty/business" },
      { label: "Bio-medical Science", path: "/faculty/bio-medical" },
      { label: "Law", path: "/faculty/law" },
      { label: "Human Science", path: "/faculty/human-science" },
    ],
  },
  // ৩. Departments (বিভাগসমূহ - সব একসাথে)
  {
    label: "Departments",
    path: "#",
    submenu: [
      { label: "Biochemistry and Biotechnology", path: "/dept/bmb" },
      { label: "Business Administration", path: "/dept/dba" },
      { label: "Computer Science & Engineering", path: "/dept/cse" },
      { label: "Information and Communication Technology (ICT)", path: "/dept/ict" },
      { label: "Electrical & Electronics Engineering", path: "/dept/eee" },
      { label: "English", path: "/dept/english" },
      { label: "Islamic Studies", path: "/dept/islamic-studies" },
      { label: "Law", path: "/dept/law" },
      { label: "Library and Information Science", path: "/dept/lis" },
      { label: "Mechatronics and Micromechatronics Engineering", path: "/dept/mme" },
      { label: "Medical Physics", path: "/dept/medical-physics" },
      { label: "Microbiology", path: "/dept/microbiology" },
      { label: "Pharmacy", path: "/dept/pharmacy" },
    ],
  },
  // ৪. Undergraduate Programs
  {
    label: "Undergraduate Programs",
    path: "#",
    submenu: [
      { label: "B.Sc. in Computer Science & Engineering", path: "/program/bsc-cse" },
      { label: "B.Sc. in Information and Communications Technology", path: "/program/bsc-ict" },
      { label: "B.Sc. in Mechatronics and Micromechatronics", path: "/program/bsc-mme" },
      { label: "Electronics and Telecommunication Engineering", path: "/program/ete" },
      { label: "B.Sc. in Pharmacy", path: "/program/bpharm" },
      { label: "Bachelor of Business Administration (BBA)", path: "/program/bba" },
      { label: "B.Sc. in Electrical & Electronics Engineering", path: "/program/bsc-eee" },
      { label: "B.A. (Hons.) in English", path: "/program/ba-english" },
      { label: "B.Sc. in Microbiology", path: "/program/bsc-microbiology" },
      { label: "B.Sc. in Biochemistry & Biotechnology", path: "/program/bsc-bmb" },
      { label: "Bachelor of Laws (LL.B)", path: "/program/llb" },
    ],
  },
  // ৫. Graduate Programs
  {
    label: "Graduate Programs",
    path: "#",
    submenu: [
      { label: "Master of Business Administration (MBA)", path: "/program/mba" },
      { label: "M.Sc. in Mechatronic and Micro-Mechatronics", path: "/program/msc-mme" },
      { label: "Master of Laws (LL.M)", path: "/program/llm" },
      { label: "M.A. in English ELT", path: "/program/ma-english" },
      { label: "M.A. in Islamic Studies (Preli)", path: "/program/ma-islamic-studies" },
    ],
  },
  // ৬. Post Graduate Diploma
  {
    label: "Post Graduate Diploma",
    path: "#",
    submenu: [
      { label: "PGD in Library and Information Science", path: "/program/pgd-lis" },
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
  { label: "ACADEMIC",  type:"dropdown", items:ACADEMIC_DROPDOWN_ITEMS },
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
