// All copy below is derived only from information supplied for this portfolio.
// Anything not explicitly provided is marked as an editable placeholder.

export const profile = {
  name: 'Budhram Kamait',
  initials: 'BK',
  title: 'Civil Engineer | Site Engineer',
  headline: ['Building Strong Foundations.', 'Creating Better Structures.'],
  intro:
    'Experienced Civil Engineer with hands-on experience in site execution, construction supervision, quality control, and project coordination.',
};

export const about = {
  paragraph:
    'Budhram Kamait is a Civil Engineer with several years of professional experience in construction and site engineering. His experience includes site supervision, coordinating construction activities, monitoring work progress, maintaining quality standards, and ensuring work is carried out according to engineering requirements.',
  stats: [
    { value: '3+', label: 'Years at Aashirwad Nirman Sewa Pvt Ltd' },
    { value: '3', label: 'Months at BKOI Builders' },
    { value: '2+', label: 'Years at Roshan Construction' },
    { value: 'CE', label: 'Civil Engineering Professional' },
  ],
};

export type Experience = {
  company: string;
  role: string;
  duration: string;
  span: string;
  description: string;
};

export const experience: Experience[] = [
  {
    company: 'Aashirwad Nirman Sewa Pvt Ltd',
    role: 'Site Engineer',
    duration: 'Sep 2021 – 2025',
    span: '3 years, 4 months',
    description:
      'Worked as a Site Engineer, contributing to day-to-day construction activities, site coordination, work supervision, and project execution.',
  },
  {
    company: 'BKOI Builders',
    role: 'Site Engineer',
    duration: 'Jun 2021 – Sep 2021',
    span: '3 months',
    description:
      'Worked as a Site Engineer with responsibilities related to site operations, construction supervision, and coordination of ongoing work.',
  },
  {
    company: 'Roshan Construction P. Ltd.',
    role: 'Site Engineer',
    duration: '2019 – 2021',
    span: '2 years',
    description:
      'Worked as a Site Engineer, gaining practical experience in construction site activities, supervision, coordination, and execution.',
  },
];

export const education = {
  institution: 'Dr. K N Modi University',
  location: 'Newai, Rajasthan',
  year: '2019',
  note: 'Degree not specified — editable placeholder',
};

export const skillGroups = [
  {
    title: 'Site Engineering',
    skills: ['Site Supervision', 'Construction Coordination', 'Work Progress Monitoring', 'Site Management'],
  },
  {
    title: 'Construction',
    skills: ['Construction Execution', 'Quality Monitoring', 'Contractor Coordination', 'On-site Problem Solving'],
  },
  {
    title: 'Professional',
    skills: ['Team Coordination', 'Project Communication', 'Time Management', 'Technical Documentation'],
  },
];

export const journey = [
  { year: '2019', company: 'Roshan Construction P. Ltd.', role: 'Site Engineer' },
  { year: '2021', company: 'BKOI Builders', role: 'Site Engineer' },
  { year: 'Sep 2021', company: 'Aashirwad Nirman Sewa Pvt Ltd', role: 'Site Engineer' },
  { year: '2025', company: 'Next Professional Chapter', role: 'Open to new opportunities' },
];

export const projectPlaceholders = [
  { type: 'Building Structure' },
  { type: 'Road Construction' },
  { type: 'Structural Framework' },
];

export const social = [
  { name: 'LinkedIn', handle: 'Budhramkamait', url: 'https://www.linkedin.com/in/budhramkamait' },
  { name: 'Instagram', handle: 'budhram.kamait', url: 'https://www.instagram.com/budhram.kamait' },
  { name: 'X', handle: 'Budhramkamait', url: 'https://x.com/Budhramkamait' },
  { name: 'YouTube', handle: 'budhramkamait', url: 'https://www.youtube.com/@budhramkamait' },
  { name: 'TikTok', handle: 'budhram.kamait', url: 'https://www.tiktok.com/@budhram.kamait' },
  { name: 'Snapchat', handle: 'BudhramKamait', url: 'https://www.snapchat.com/add/BudhramKamait' },
  { name: 'Facebook', handle: 'BudhramKamait', url: 'https://www.facebook.com/Budhramkamait' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
