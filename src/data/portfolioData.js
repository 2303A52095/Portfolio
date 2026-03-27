import {
  FiAward,
  FiBookOpen,
  FiCode,
  FiDatabase,
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiServer,
} from 'react-icons/fi'

const baseUrl = import.meta.env.BASE_URL
const withBase = (path) => `${baseUrl}${path.replace(/^\//, '')}`

export const portfolioData = {
  hero: {
    name: 'Chirra Ramcharan',
    title: 'AI/ML Developer | Full Stack Projects | B.Tech CSE (AI & ML)',
    tagline:
      'Building practical AI, machine learning, and web solutions with a focus on clear execution, usability, and measurable outcomes.',
    typedRoles: [
      'Developing practical AI and ML solutions',
      'Building web applications with clean user experiences',
      'Turning academic learning into real project delivery',
    ],
    resumeHref: withBase('/Chirra_Ramcharan_Resume.pdf'),
  },
  about: {
    summary:
      'I am a B.Tech CSE (AI & ML) student building a strong foundation in artificial intelligence, machine learning, Python, and full stack development. My work is centered on translating technical concepts into practical projects that demonstrate problem-solving, reliable execution, and client-focused thinking.',
    stats: [
      { label: 'Focus', value: 'AI, ML, Web Apps' },
      { label: 'Strengths', value: 'Python, GenAI, Delivery' },
      { label: 'Stack', value: 'React, Node.js, Python' },
    ],
  },
  skills: [
    { title: 'Languages', icon: FiCode, items: ['Python', 'DSA'], level: 89 },
    { title: 'Databases', icon: FiDatabase, items: ['SQL', 'PL/SQL', 'MongoDB'], level: 82 },
    { title: 'Web', icon: FiGlobe, items: ['HTML', 'CSS', 'JavaScript'], level: 84 },
    {
      title: 'AI / ML',
      icon: FiAward,
      items: ['Machine Learning', 'Python', 'Generative AI'],
      level: 86,
    },
    {
      title: 'Libraries',
      icon: FiBookOpen,
      items: ['OpenCV', 'Scikit-Learn', 'NumPy'],
      level: 82,
    },
    { title: 'Full Stack', icon: FiServer, items: ['React', 'Node.js'], level: 78 },
    { title: 'Tools', icon: FiGithub, items: ['Git', 'GitHub', 'Docker'], level: 85 },
  ],
  projects: [
    {
      title: 'Quiz Application with Animations',
      typeLabel: 'Internship Project',
      badge: 'SkillCraft Technology',
      period: 'March 2026 - April 2026',
      verified: true,
      offerLetter: withBase('/Offer_Letter.pdf'),
      description:
        'Developed during a Web Development Internship at SkillCraft Technology as a responsive quiz application with smooth animations and interactive user experience.',
      bullets: [
        'Built with HTML, CSS, and JavaScript for a responsive multiple-choice quiz flow',
        'Implemented score tracking, animated UI updates, and a user-friendly interface',
        'Highlights frontend development capability, problem-solving, and structured project delivery',
      ],
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/2303A52095/Quiz-Application',
      liveDemo: 'https://2303a52095.github.io/Quiz-Application/',
      preview: 'quiz',
    },
    {
      title: 'Stopwatch Web Application',
      typeLabel: 'JavaScript Project',
      badge: 'SkillCraft Technology',
      period: 'March 2026 - April 2026',
      verified: true,
      offerLetter: withBase('/Offer_Letter.pdf'),
      description:
        'Developed a responsive stopwatch web application using HTML, CSS, and JavaScript with clean interactions and reliable timing behavior.',
      bullets: [
        'Implemented Start, Stop, and Reset controls with accurate hours, minutes, and seconds tracking',
        'Built a clean and user-friendly interface with responsive layout behavior',
        'Demonstrates understanding of JavaScript timing functions and DOM manipulation',
      ],
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/2303A52095/Stop-Watch-Web-Application',
      liveDemo: 'https://2303a52095.github.io/Stop-Watch-Web-Application/',
      preview: 'stopwatch',
    },
    {
      title: 'Fake Currency Detection System',
      description:
        'A Python-based workflow that detects fake Rs.500 and Rs.2000 notes using OpenCV with a desktop GUI.',
      bullets: [
        'ORB + SSIM based comparison pipeline for note verification',
        'Tkinter interface for image upload, analysis, and visual feedback',
        'Achieved 79% genuine-note accuracy and 83% counterfeit detection accuracy',
      ],
      tags: ['Python', 'OpenCV', 'Tkinter', 'ORB', 'SSIM'],
      github: 'https://github.com/chirra-ramcharan/fake-currency-detection',
      datasetHref: 'https://www.kaggle.com/code/raviiloveyou/fake-currency-detection',
      codeFileHref: withBase('/fake-currency-project-code.py'),
      reportHref: withBase('/fake-currency-detector-report.pdf'),
      preview: 'vision',
    },
  ],
  internships: [
    {
      title: 'AI Internship',
      organization: 'Plasmid Innovation Limited',
      period: 'Recent Experience',
      description:
        'Worked on applied AI concepts, experimentation, and hands-on project execution with a focus on practical model development and implementation.',
      documents: [
        {
          label: 'Letter of Recommendation',
          href: withBase('/plasmid-letter-of-recommendation.pdf'),
        },
        {
          label: 'Internship Certificate',
          href: withBase('/plasmid-internship-certificate.pdf'),
        },
        {
          label: 'Industrial Certificate',
          href: withBase('/plasmid-industrial-certificate.pdf'),
        },
        {
          label: 'Minor Project: Report on K Means Clustering',
          href: withBase('/plasmid-k-means-report.pdf'),
        },
        {
          label: 'Major Project: Detailed Report on Spam News Detection',
          href: withBase('/plasmid-spam-news-report.pdf'),
        },
      ],
    },
    {
      title: 'Loan Prediction',
      organization: 'Vaidsys Technologies',
      period: 'Machine Learning Internship',
      description:
        'Completed a machine learning internship focused on loan prediction, covering the loan approval workflow with supporting internship documents, a project report, and the final project file.',
      documents: [
        {
          label: 'Internship Certificate',
          href: withBase('/loan-approval-internship-certificate.pdf'),
        },
        {
          label: 'Offer Letter',
          href: withBase('/loan-approval-offer-letter.pdf'),
        },
        {
          label: 'Project Report',
          href: withBase('/loan-approval-prediction-report.pdf'),
        },
        {
          label: 'Project PDF',
          href: withBase('/loan-approval-prediction-project.pdf'),
        },
      ],
    },
  ],
  certifications: [
    {
      title: 'Microsoft Azure AI Fundamentals',
      href: withBase('/microsoft-azure-ai-fundamentals.pdf'),
    },
    {
      title: 'Python Full Stack',
      href: withBase('/python-full-stack.pdf'),
    },
    {
      title: 'Google Virtual Internship AI/ML',
      href: withBase('/google-virtual-internship-aiml.pdf'),
    },
    {
      title: 'Data Science Master Virtual Internship',
      href: withBase('/data-science-master-virtual-internship.pdf'),
    },
  ],
  education: [
    {
      title: 'B.Tech CSE (AI & ML)',
      organization: 'SR University',
      period: '2023 - 2027',
      description:
        'Focused on artificial intelligence, machine learning foundations, and modern software engineering practices with an emphasis on practical application.',
    },
    {
      title: 'Intermediate',
      organization: 'Narayana Junior College',
      period: '2021 - 2023',
      description:
        'Completed higher secondary education with a strong academic grounding for engineering studies.',
    },
    {
      title: 'Schooling',
      organization: 'Sri Chaitanya',
      period: '2021',
      description:
        'Built the academic fundamentals and discipline that led into technical studies.',
    },
  ],
  contact: {
    email: 'chirraramcharan29@gmail.com',
    phone: '+91 9346468380',
    linkedin: 'https://www.linkedin.com/in/chirra-ramcharan-119156295/',
    github: 'https://github.com/2303A52095',
  },
}

export const socialLinks = [
  { label: 'GitHub', href: portfolioData.contact.github, icon: FiGithub },
  { label: 'LinkedIn', href: portfolioData.contact.linkedin, icon: FiLinkedin },
  {
    label: 'Email',
    href: `mailto:${portfolioData.contact.email}`,
    icon: FiMail,
  },
]

portfolioData.socialLinks = socialLinks
