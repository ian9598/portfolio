export interface SkillGroup {
  group: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  subSections: { title: string; points: string[] }[];
}

export interface Project {
  title: string;
  description: string;
  features: string[];
  tags: string[];
}

export const portfolio = {
  personal: {
    name: 'Muhammad Safiyan Roslan',
    shortName: 'Safiyan Roslan',
    title: 'Software Engineer',
    tagline: 'Building secure, scalable healthcare systems that make a difference.',
    summary:
      'Software Engineer with strong experience in Hospital Management Systems (HMS), HL7 integrations, and API development. Skilled in PHP, JavaScript, Laravel, and healthcare system integrations using Mirth Connect. Proven ability to develop secure, scalable systems and work closely with users during pilot testing and production rollout.',
    location: 'Shah Alam, Selangor',
    email: 'safiyanroslan@gmail.com',
    linkedin: 'https://linkedin.com/in/safiyan-roslan',
    linkedinDisplay: 'Safiyan Roslan',
  },

  skills: [
    {
      group: 'Programming Languages',
      items: ['PHP', 'JavaScript', 'HTML/CSS', 'jQuery'],
    },
    {
      group: 'Frameworks & Tools',
      items: ['Laravel', 'Mirth Connect'],
    },
    {
      group: 'API & Integration',
      items: ['JWT Authentication', 'Swagger UI', 'JSON', 'HL7 Protocol (ORM, ORU, ACK)', 'ICD-10', 'ICD-11'],
    },
    {
      group: 'Other',
      items: ['GitLab', 'AJAX', 'PDF/ZIP Processing'],
    },
  ] satisfies SkillGroup[],

  languages: [
    { name: 'Malay', level: 'Native' },
    { name: 'English', level: 'Intermediate' },
  ],

  experiences: [
    {
      company: 'Management And Science University (MSU)',
      role: 'Software Engineer',
      period: 'January 2023 – Present',
      highlights: [
        'Developed and maintained HMS modules including Laboratory, Radiology, and Medical Records.',
        'Implemented HL7 integrations to enable seamless data exchange with external healthcare systems.',
      ],
      subSections: [
        {
          title: 'Laboratory & Radiology Integration (HL7)',
          points: [
            'Integrated HMS with LabLink using HL7 ORM, ORU, and ACK messages for lab orders and results.',
            'Integrated Radiology module with Philips Vue PACS for imaging orders and report updates.',
            'Ensured reliable data synchronization across HMS/PACS and HMS/LIS using open-source interface engine Mirth Connect.',
          ],
        },
        {
          title: 'Medical Record & SMRP Integration',
          points: [
            'Developed and maintained Medical Record workflows including creation, request, checkout/check-in, transfer, return, and enquiry.',
            'Implemented patient document management with PDF upload and ZIP compression to optimize server storage.',
            'Developed ICD Coder functionality supporting ICD-10 and ICD-11 for accurate clinical coding.',
            'Implemented JSON-based integration with SMRP for inpatient, daycare and ward census data.',
          ],
        },
        {
          title: 'Queue Management System (QMS)',
          points: [
            'Developed secure JWT-based authentication, including login and registration with input validation.',
            'Developed counter and ticket management APIs.',
            'Built HMS-QMS integration APIs to synchronize patient and visit data.',
            'Implemented Swagger UI for API documentation, testing, and integration support.',
            'Actively involved in pilot testing and user feedback sessions.',
          ],
        },
      ],
    },
    {
      company: 'Employees Provident Fund (EPF)',
      role: 'IT Protégé',
      period: 'June 2022 – December 2022',
      highlights: [],
      subSections: [
        {
          title: 'Technical Support',
          points: [
            'Assisting users for first time user login when getting new PC/notebook.',
            'Solving basic network connection problems such as no internet or cannot connect to office Wi-Fi.',
            'Installing application and software.',
            'Solving problems with various appliances including printers & scanners.',
          ],
        },
        {
          title: 'Assets Management',
          points: ['Collecting PC & notebook inventory number, serial number and hostname.'],
        },
      ],
    },
    {
      company: 'HOMICO SDN BHD',
      role: 'PHP Software Engineer',
      period: 'April 2022 – May 2022',
      highlights: [
        'Develop website using WordPress and work closely with the UI/UX team for the design.',
      ],
      subSections: [
        {
          title: 'Laravel Framework',
          points: [
            'Fix bugs and features in frontend and backend of the system.',
            'Create new sub-module of the system including frontend and backend API integration.',
            'Create remote data search using AJAX from API to frontend to avoid slow response times to fetch the data.',
            'Use Gitlab to pull/push/merge current code from local to develop/main.',
          ],
        },
      ],
    },
  ] satisfies Experience[],

  projects: [
    {
      title: 'Hospital Management System (HMS)',
      description:
        'A comprehensive HMS powering multiple hospital modules (Laboratory, Radiology, Medical Records) with HL7-based data exchange to external systems.',
      features: [
        'Modular architecture covering Lab, Radiology & Medical Records',
        'HL7 ORM/ORU/ACK message integration with LabLink & Philips Vue PACS',
        'Mirth Connect interface engine for reliable data synchronization',
      ],
      tags: ['PHP', 'Laravel', 'HL7', 'Mirth Connect', 'JavaScript'],
    },
    {
      title: 'Medical Record & SMRP Integration',
      description:
        'End-to-end medical record management with document handling, ICD clinical coding, and real-time census data exchange via JSON APIs.',
      features: [
        'Full workflow: creation, request, checkout/check-in, transfer, return, enquiry',
        'PDF upload with ZIP compression for optimized storage',
        'ICD-10 & ICD-11 clinical coding support',
        'JSON-based integration with SMRP for inpatient/daycare/ward census',
      ],
      tags: ['PHP', 'Laravel', 'JSON API', 'ICD-10/11'],
    },
    {
      title: 'Queue Management System (QMS)',
      description:
        'RESTful QMS with JWT authentication, counter/ticket management, HMS integration APIs, and Swagger UI documentation.',
      features: [
        'JWT-based secure authentication with input validation',
        'Counter & ticket management APIs',
        'HMS-QMS data synchronization',
        'Swagger UI for API docs & integration testing',
      ],
      tags: ['PHP', 'Laravel', 'JWT', 'REST API', 'Swagger'],
    },
    {
      title: 'WordPress & Laravel Development',
      description:
        'Full-stack web development using WordPress for front-end sites and Laravel for feature-rich sub-modules with AJAX-powered data retrieval.',
      features: [
        'WordPress site development with UI/UX team collaboration',
        'Laravel sub-module creation with API integration',
        'AJAX remote data search for optimized response times',
        'GitLab workflow (pull/push/merge)',
      ],
      tags: ['WordPress', 'Laravel', 'AJAX', 'jQuery', 'GitLab'],
    },
  ] satisfies Project[],

  education: [
    {
      degree: 'Bachelor of Computer Science (Hons.)',
      institution: 'Universiti Teknologi MARA (UiTM), Shah Alam',
      period: 'Sep 2019 – Feb 2022',
      result: 'CGPA: 3.66',
    },
    {
      degree: 'Diploma in Computer Science (Hons.)',
      institution: 'Universiti Teknologi MARA (UiTM), Kuala Terengganu',
      period: 'May 2016 – Jan 2019',
      result: 'CGPA: 3.89',
    },
    {
      degree: 'Malaysian Certificate of Education (SPM)',
      institution: 'Sekolah Menengah Kebangsaan Bukit Gading',
      period: 'Jan 2011 – Dec 2015',
      result: 'Result: 7As',
    },
  ],

  certifications: [
    { title: 'Participant: Laravel Training (Iverson Associates)', year: '2026' },
    {
      title:
        "Participant & Presenter: Seminar on Information Retrieval and Knowledge Management (SIRKM'20)",
      year: '2020',
    },
    { title: 'Participant: MDEC-Intel® AI Academy', year: '2019' },
    { title: 'Participant: Training of Trainers', year: '2017' },
    { title: 'Tutor: Tutor and Tutee Program', year: '2017' },
    {
      title: "Dean's Award (Semester 3, 5 & 6) and Vice Chancellor's Award (Diploma)",
      year: null,
    },
  ],

  navItems: [
    { slug: 'about', label: 'About' },
    { slug: 'skills', label: 'Skills' },
    { slug: 'experience', label: 'Experience' },
    { slug: 'projects', label: 'Projects' },
    { slug: 'education', label: 'Education' },
    { slug: 'contact', label: 'Contact' },
  ],
};

// BASE_URL has no trailing slash (e.g. "/portfolio"), so normalise it.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const resumePath = `${base}/resume/Muhammad-Safiyan-Roslan-Resume.pdf`;
export const faviconPath = `${base}/favicon.svg`;
export const portraitPath = `${base}/images/portrait.jpg`;
