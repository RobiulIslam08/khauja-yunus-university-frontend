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
    submenu: [{ label: "Academic Policy", path: "/academic/policy" }],
  },
  // ২. Faculty (অনুষদসমূহ)
  {
    label: "Faculty",
    path: "#",
    submenu: [
      {
        label: "Science and Engineering",
        path: "/faculty/science-engineering",
      },
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
      {
        label: "Biochemistry and Biotechnology",
        path: "/academic/biochemistry-biotechnology",
      },
      {
        label: "Business Administration",
        path: "/academic/business-administration",
      },
      {
        label: "Computer Science & Engineering",
        path: "/academic/computer-science-engineering",
      },
      {
        label: "Information and Communication Technology (ICT)",
        path: "/academic/information-communication-technology",
      },
      {
        label: "Electrical & Electronics Engineering",
        path: "/academic/electrical-electronics-engineering",
      },
      { label: "English", path: "/academic/english" },
      { label: "Islamic Studies", path: "/academic/islamic-studies" },
      { label: "Law", path: "/academic/law" },
      {
        label: "Library and Information Science",
        path: "/academic/library-information-science",
      },
      {
        label: "Mechatronics and Micromechatronics Engineering",
        path: "/academic/mechatronics-micromechatronics-engineering",
      },
      { label: "Medical Physics", path: "/academic/medical-physics" },
      { label: "Microbiology", path: "/academic/microbiology" },
      { label: "Pharmacy", path: "/academic/pharmacy" },
    ],
  },
  // ৪. Undergraduate Programs
  {
    label: "Undergraduate Programs",
    path: "#",
    submenu: [
      {
        label: "B.Sc. in Computer Science & Engineering",
        path: "/academic/computer-science-engineering/bachelor-of-cse",
      },
      {
        label: "B.Sc. in Information and Communications Technology",
        path: "/academic/information-communication-technology/bsc-in-ict",
      },
      {
        label: "B.Sc. in Mechatronics and Micromechatronics",
        path: "/academic/mechatronics-micromechatronics-engineering/bsc-in-mme",
      },
     
      {
        label: "Electronics and Telecommunication Engineering",
        path: "/academic/electronics-telecommunication-engineering/bsc-in-ete",
      },
      { label: "B.Sc. in Pharmacy", path: "/academic/pharmacy/bsc-in-pharmacy" },
      {
        label: "Bachelor of Business Administration (BBA)",
        path: "/academic/business-administration/bba",
      },
      {
        label: "B.Sc. in Electrical & Electronics Engineering",
        path: "/academic/electrical-electronics-engineering/bsc-in-eee",
      },
      { label: "B.A. (Hons.) in English", path: "/academic/english/ba-english" },
      { label: "B.Sc. in Microbiology", path: "/academic/microbiology/bsc-in-microbiology" },
      {
        label: "B.Sc. in Biochemistry & Biotechnology",
        path: "/academic/biochemistry-biotechnology/bsc-in-bcbt",
      },
      { label: "Bachelor of Laws (LL.B)", path: "/academic/law/llb" },
    ],
  },
  // ৫. Graduate Programs
  {
    label: "Graduate Programs",
    path: "#",
    submenu: [
      {
        label: "Master of Business Administration (MBA)",
        path: "/academic/business-administration/mba",
      },
      {
        label: "M.Sc. in Mechatronic and Micro-Mechatronics",
    path: "/academic/mechatronics-micromechatronics-engineering/msc-in-mme",
      },
      { label: "Master of Laws (LL.M)", path: "/academic/law/llm" },
      { label: "M.A. in English ELT", path: "/academic/english/ma-english" },
      {
        label: "Master of Arts in Islamic Studies (Preli)",
        path: "/academic/islamic-studies/MA-IS-Preli",
      },
    ],
  },
  // ৬. Post Graduate Diploma
  {
    label: "Post Graduate Diploma",
    path: "#",
    submenu: [
      {
        label: "PGD in Library and Information Science",
        path: "/academic/library-information-science/pgd-lis",
      },
    ],
  },
];
export const MAIN_NAV_ITEMS = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", type: "dropdown", items: ABOUT_DROPDOWN_ITEMS },
  { label: "ADMISSION", type: "dropdown", items: ADMISSION_DROPDOWN_ITEMS },
  { label: "ACADEMIC", type: "dropdown", items: ACADEMIC_DROPDOWN_ITEMS },
  { label: "AUTHORITIES", type: "dropdown", items: AUTHORITIES_ITEMS },
  { label: "OFFICES", type: "dropdown", items: OFFICES_ITEMS },
  { label: "PEOPLE", type: "dropdown", items: PEOPLE_ITEMS },
  { label: "STUDENTS", type: "dropdown", items: STUDENTS_ITEMS },
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
