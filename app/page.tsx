"use client";
import React, { useState, useEffect, useMemo, useRef, FC } from "react";
import {
  User,
  Terminal,
  Briefcase,
  Code,
  Linkedin,
  Github,
  Mail,
  Palette,
  Calendar,
  Building,
  ChevronRight,
  GitBranch,
  Layers,
  Link as LinkIcon,
  Info,
  GraduationCap,
  Send,
  UserCheck,
  AtSign,
  MessageSquare,
  Wrench,
  Search,
  BookOpen,
  Sun,
  Moon,
  MapPin,
  Type,
  FileText,
  Eye,
  Inbox,
  Pilcrow,
} from "lucide-react";

// --- Type Definitions ---
interface ColorPalette {
  row1: string[];
  row2: string[];
}

interface Theme {
  name: string;
  bg: string;
  text: string;
  primary: string;
  secondary: string;
  accent: string;
  tertiary: string;
  buttonBg: string;
  buttonText: string;
  activeTab: string;
  inactiveTab: string;
  inputBg: string;
  focusBorder: string;
  highlightBg: string;
  highlightText: string;
  colors: ColorPalette;
}

interface Font {
  name: string;
  className: string;
}

interface FontStyle {
  name: "Regular" | "Italic" | "Bold";
  className: "" | "italic" | "font-bold";
}

interface Socials {
  linkedin: string;
  github: string;
  email: string;
  resumeUrl: string;
}

interface Education {
  name: string;
  startDate: string;
  endDate: string;
  major: string;
  minor: string;
  description: string;
  coursework: string;
}

interface PortfolioData {
  name: string;
  title: string;
  location: string;
  skills: string[];
  socials: Socials;
  imageUrl: string;
  about: string;
  education: Education[];
}

interface RawJob {
  title: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  skills: string[];
}

interface RawEmployer {
  employerName: string;
  jobs: RawJob[];
}

interface WorkData {
  company: string;
  title: string;
  duration: string;
  responsibilities: string[];
  skills: string[];
}

interface PortfolioItem {
  name: string;
  description: string;
  tech: string[];
  url: string;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// --- Component Prop Types ---
interface InfoLineProps {
  icon: React.ElementType;
  label: string;
  value: string;
  url?: string;
  primaryColor: string;
  accentColor: string;
  index: number;
}

interface TabButtonProps {
  label: string;
  activeTab: string;
  theme: Theme;
  onClick: () => void;
}

interface SectionProps {
  theme: Theme;
}

// --- DATA AND CONFIGURATION ---

const fonts: Font[] = [
  { name: "Fira Code", className: "font-fira-code" },
  { name: "Source Code Pro", className: "font-source-code-pro" },
  { name: "JetBrains Mono", className: "font-jetbrains-mono" },
  { name: "Meslo LG", className: "font-meslo-lg" },
  { name: "Noto Sans Mono", className: "font-noto-sans-mono" },
  { name: "IBM Plex Mono", className: "font-ibm-plex-mono" },
  { name: "OpenDyslexic", className: "font-opendyslexic" },
];

const fontStyles: FontStyle[] = [
  { name: "Regular", className: "" },
  { name: "Italic", className: "italic" },
  { name: "Bold", className: "font-bold" },
];

const themes: Theme[] = [
  {
    name: "Catppuccin",
    bg: "bg-[#1e1e2e]",
    text: "text-[#cdd6f4]",
    primary: "text-[#cba6f7]",
    secondary: "text-[#a6adc8]",
    accent: "text-[#a6e3a1]",
    tertiary: "text-[#6c7086]",
    buttonBg: "bg-[#cba6f7]",
    buttonText: "text-[#1e1e2e]",
    activeTab: "border-[#cba6f7]",
    inactiveTab: "border-transparent",
    inputBg: "bg-[#313244]",
    focusBorder: "focus:border-[#cba6f7]",
    highlightBg: "bg-[#cba6f7]",
    highlightText: "text-[#1e1e2e]",
    colors: {
      row1: [
        "bg-[#45475a]",
        "bg-[#f38ba8]",
        "bg-[#a6e3a1]",
        "bg-[#f9e2af]",
        "bg-[#89b4fa]",
        "bg-[#f5c2e7]",
        "bg-[#94e2d5]",
        "bg-[#bac2de]",
      ],
      row2: [
        "bg-[#585b70]",
        "bg-[#eba0ac]",
        "bg-[#a6e3a1]",
        "bg-[#f9e2af]",
        "bg-[#89b4fa]",
        "bg-[#f5c2e7]",
        "bg-[#94e2d5]",
        "bg-[#cdd6f4]",
      ],
    },
  },
  {
    name: "Default",
    bg: "bg-gray-800",
    text: "text-white",
    primary: "text-cyan-400",
    secondary: "text-gray-300",
    accent: "text-green-400",
    tertiary: "text-gray-500",
    buttonBg: "bg-cyan-400",
    buttonText: "text-gray-900",
    activeTab: "border-cyan-400",
    inactiveTab: "border-transparent",
    inputBg: "bg-gray-700",
    focusBorder: "focus:border-cyan-400",
    highlightBg: "bg-cyan-400",
    highlightText: "text-gray-900",
    colors: {
      row1: [
        "bg-slate-800",
        "bg-red-600",
        "bg-green-600",
        "bg-yellow-600",
        "bg-blue-600",
        "bg-purple-600",
        "bg-cyan-600",
        "bg-gray-400",
      ],
      row2: [
        "bg-slate-700",
        "bg-red-500",
        "bg-green-500",
        "bg-yellow-500",
        "bg-blue-500",
        "bg-purple-500",
        "bg-cyan-400",
        "bg-gray-300",
      ],
    },
  },
  {
    name: "Solarized Dark",
    bg: "bg-[#002b36]",
    text: "text-[#93a1a1]",
    primary: "text-[#268bd2]",
    secondary: "text-[#839496]",
    accent: "text-[#859900]",
    tertiary: "text-[#586e75]",
    buttonBg: "bg-[#268bd2]",
    buttonText: "text-[#002b36]",
    activeTab: "border-[#268bd2]",
    inactiveTab: "border-transparent",
    inputBg: "bg-[#073642]",
    focusBorder: "focus:border-[#268bd2]",
    highlightBg: "bg-[#268bd2]",
    highlightText: "text-[#002b36]",
    colors: {
      row1: [
        "bg-[#073642]",
        "bg-[#dc322f]",
        "bg-[#859900]",
        "bg-[#b58900]",
        "bg-[#268bd2]",
        "bg-[#d33682]",
        "bg-[#2aa198]",
        "bg-[#eee8d5]",
      ],
      row2: [
        "bg-[#002b36]",
        "bg-[#cb4b16]",
        "bg-[#586e75]",
        "bg-[#657b83]",
        "bg-[#839496]",
        "bg-[#6c71c4]",
        "bg-[#93a1a1]",
        "bg-[#fdf6e3]",
      ],
    },
  },
  {
    name: "Dracula",
    bg: "bg-[#282a36]",
    text: "text-[#f8f8f2]",
    primary: "text-[#bd93f9]",
    secondary: "text-[#f8f8f2]",
    accent: "text-[#50fa7b]",
    tertiary: "text-[#6272a4]",
    buttonBg: "bg-[#bd93f9]",
    buttonText: "text-[#282a36]",
    activeTab: "border-[#bd93f9]",
    inactiveTab: "border-transparent",
    inputBg: "bg-[#44475a]",
    focusBorder: "focus:border-[#bd93f9]",
    highlightBg: "bg-[#bd93f9]",
    highlightText: "text-[#282a36]",
    colors: {
      row1: [
        "bg-[#21222C]",
        "bg-[#ff5555]",
        "bg-[#50fa7b]",
        "bg-[#f1fa8c]",
        "bg-[#bd93f9]",
        "bg-[#ff79c6]",
        "bg-[#8be9fd]",
        "bg-[#f8f8f2]",
      ],
      row2: [
        "bg-[#6272a4]",
        "bg-[#ff6e6e]",
        "bg-[#69ff94]",
        "bg-[#ffffa5]",
        "bg-[#d6acff]",
        "bg-[#ff92df]",
        "bg-[#a4ffff]",
        "bg-[#ffffff]",
      ],
    },
  },
  {
    name: "Nord",
    bg: "bg-[#2E3440]",
    text: "text-[#D8DEE9]",
    primary: "text-[#88C0D0]",
    secondary: "text-[#E5E9F0]",
    accent: "text-[#A3BE8C]",
    tertiary: "text-[#4C566A]",
    buttonBg: "bg-[#88C0D0]",
    buttonText: "text-[#2E3440]",
    activeTab: "border-[#88C0D0]",
    inactiveTab: "border-transparent",
    inputBg: "bg-[#3B4252]",
    focusBorder: "focus:border-[#88C0D0]",
    highlightBg: "bg-[#88C0D0]",
    highlightText: "text-[#2E3440]",
    colors: {
      row1: [
        "bg-[#3B4252]",
        "bg-[#BF616A]",
        "bg-[#A3BE8C]",
        "bg-[#EBCB8B]",
        "bg-[#81A1C1]",
        "bg-[#B48EAD]",
        "bg-[#88C0D0]",
        "bg-[#E5E9F0]",
      ],
      row2: [
        "bg-[#4C566A]",
        "bg-[#d08770]",
        "bg-[#a3be8c]",
        "bg-[#ebcb8b]",
        "bg-[#8fbcbb]",
        "bg-[#b48ead]",
        "bg-[#8fbcbb]",
        "bg-[#ECEFF4]",
      ],
    },
  },
  {
    name: "Groove",
    bg: "bg-[#1f2430]",
    text: "text-[#a4b1cd]",
    primary: "text-[#ff75a0]",
    secondary: "text-[#a4b1cd]",
    accent: "text-[#72f1b8]",
    tertiary: "text-[#565f79]",
    buttonBg: "bg-[#ff75a0]",
    buttonText: "text-[#1f2430]",
    activeTab: "border-[#ff75a0]",
    inactiveTab: "border-transparent",
    inputBg: "bg-[#2c344d]",
    focusBorder: "focus:border-[#ff75a0]",
    highlightBg: "bg-[#ff75a0]",
    highlightText: "text-[#1f2430]",
    colors: {
      row1: [
        "bg-[#2f3b54]",
        "bg-[#ff75a0]",
        "bg-[#72f1b8]",
        "bg-[#fce566]",
        "bg-[#75bfff]",
        "bg-[#c39ac9]",
        "bg-[#67e4e4]",
        "bg-[#a4b1cd]",
      ],
      row2: [
        "bg-[#475673]",
        "bg-[#ff8db3]",
        "bg-[#8ff8c8]",
        "bg-[#fdec8c]",
        "bg-[#94cfff]",
        "bg-[#d1b2d6]",
        "bg-[#8df0f0]",
        "bg-[#c1cde6]",
      ],
    },
  },
  {
    name: "Ayu",
    bg: "bg-[#0A0E14]",
    text: "text-[#CBCCC6]",
    primary: "text-[#FFD173]",
    secondary: "text-[#CBCCC6]",
    accent: "text-[#C3E88D]",
    tertiary: "text-[#5C6773]",
    buttonBg: "bg-[#FFD173]",
    buttonText: "text-[#0A0E14]",
    activeTab: "border-[#FFD173]",
    inactiveTab: "border-transparent",
    inputBg: "bg-[#1F2430]",
    focusBorder: "focus:border-[#FFD173]",
    highlightBg: "bg-[#FFD173]",
    highlightText: "text-[#0A0E14]",
    colors: {
      row1: [
        "bg-[#1F2430]",
        "bg-[#F07178]",
        "bg-[#C3E88D]",
        "bg-[#FFD173]",
        "bg-[#82AAFF]",
        "bg-[#C792EA]",
        "bg-[#89DDFF]",
        "bg-[#CBCCC6]",
      ],
      row2: [
        "bg-[#393F4D]",
        "bg-[#f2878e]",
        "bg-[#d3f09d]",
        "bg-[#ffe18f]",
        "bg-[#9fbcff]",
        "bg-[#d6a2f2]",
        "bg-[#a3e5ff]",
        "bg-[#ffffff]",
      ],
    },
  },
];

const highContrastDarkTheme: Theme = {
  name: "HC Dark",
  bg: "bg-black",
  text: "text-white",
  primary: "text-yellow-300",
  secondary: "text-white",
  accent: "text-white",
  tertiary: "text-gray-400",
  buttonBg: "bg-yellow-300",
  buttonText: "text-black",
  activeTab: "border-yellow-300",
  inactiveTab: "border-transparent",
  inputBg: "bg-black",
  focusBorder: "focus:border-yellow-300",
  highlightBg: "bg-yellow-300",
  highlightText: "text-black",
  colors: {
    row1: [
      "bg-black",
      "bg-white",
      "bg-yellow-300",
      "bg-blue-500",
      "bg-pink-500",
      "bg-red-500",
      "bg-green-500",
      "bg-cyan-400",
    ],
    row2: [
      "bg-gray-800",
      "bg-gray-200",
      "bg-yellow-400",
      "bg-blue-600",
      "bg-pink-600",
      "bg-red-600",
      "bg-green-600",
      "bg-cyan-500",
    ],
  },
};

const highContrastLightTheme: Theme = {
  name: "HC Light",
  bg: "bg-white",
  text: "text-black",
  primary: "text-blue-700",
  secondary: "text-gray-800",
  accent: "text-black",
  tertiary: "text-gray-600",
  buttonBg: "bg-blue-700",
  buttonText: "text-white",
  activeTab: "border-blue-700",
  inactiveTab: "border-transparent",
  inputBg: "bg-gray-100",
  focusBorder: "focus:border-blue-700",
  highlightBg: "bg-blue-700",
  highlightText: "text-white",
  colors: {
    row1: [
      "bg-gray-100",
      "bg-red-600",
      "bg-green-600",
      "bg-yellow-600",
      "bg-blue-600",
      "bg-purple-600",
      "bg-cyan-600",
      "bg-gray-700",
    ],
    row2: [
      "bg-gray-200",
      "bg-red-700",
      "bg-green-700",
      "bg-yellow-700",
      "bg-blue-700",
      "bg-purple-700",
      "bg-cyan-700",
      "bg-black",
    ],
  },
};

const portfolioData: PortfolioData = {
  name: "Simon Phillips",
  title: "Full-Stack Software Engineer",
  location: "Atlanta, GA",
  skills: [
    "React",
    "TypeScript",
    "Angular",
    "AWS",
    "Node.js",
    "Azure",
    "Java",
    "C#",
    "Next.js",
    "AI",
  ],
  socials: {
    linkedin: "simonxphillips",
    github: "tassyguy",
    email: "simonxphillips@gmail.com",
    resumeUrl:
      "https://drive.google.com/file/d/10zoCEWRpc8XblT5ZZE10HWRTkMMMTuu0/view?usp=sharing",
  },
  imageUrl: "me.jpg",
  about:
    "Hi, my name is Simon! I'm a Full-Stack Software Engineer with over 11 years of experience architecting and delivering web applications. I love working with modern frameworks like React, Angular, and Node.js, and I'm comfortable on cloud platforms like AWS and Azure. I enjoy leading complex projects from the initial idea all the way to deployment, always keeping performance, scalability, and accessibility top of mind. I'm also passionate about mentoring other developers, improving engineering workflows, and working with different teams to bring technical solutions to life that meet our business goals.",
  education: [
    {
      name: "Georgia State University",
      startDate: "August 2013",
      endDate: "May 2017",
      major: "Computer Science",
      minor: "Psychology",
      description:
        "Go Panthers! This is the college I spent my undergrad years at in Atlanta, GA.",
      coursework:
        "Data Structures, Algorithms, Calculus, Linear Algebra, Human-Computer Interaction, Abnormal Psychology, GUI, Web Development, Windowed Programming, Mobile App Development, Psychology of Interpersonal Behavior, Developmental Psychology, Adolescent Psychology",
    },
  ],
};

const rawWorkData: RawEmployer[] = [
  {
    employerName: "NICE",
    jobs: [
      {
        title: "Senior Software Engineer",
        startDate: "August 2024",
        endDate: "Present",
        responsibilities: [
          "Migrated the Nexidia Analytics platform from legacy ASPX to a modern Angular 17 front-end architecture, aligning implementation with Figma designs, sprint objectives, accessibility standards, and security requirements.",
          "Utilized Perforce, Node.js, Jenkins, Jest, and PowerShell in a Windows-based development environment to deliver responsive and maintainable UI components that could be reused among the Nexidia Analytics platform.",
          "Supported the POC team by configuring, upgrading, and troubleshooting VM instances and Windows Server 2022 environments for live customer demos, production systems, and keynote presentations.",
          "Managed and maintained system infrastructure using Active Directory, SQL Server Management Studio 2018, RabbitMQ, and internal deployment tools, increased Topics AI efficiency by over 50%.",
          "Collaborated across R&D, sales, and AI teams to prototype and refine cutting-edge features, including Topics AI demos, leveraging pre-release versions of Nexidia Analytics and integrations with both OpenAI and Mistral AI.",
          "Continuously improving deployment stability and performance across test and demo environments.",
        ],
        skills: [
          "Chrome developer tools, Firefox development tools, SCSS, Angular, Jest, Windows Server environments",
          "CI/CD, git pipelines, Windows Server 2022, Active Directory, PowerShell, CXOne Platform, Nexidia Platform",
          "Angular, Figma, Perforce, Node.js, Windows Server, TypeScript, Mistral, OpenAI, AI",
          "AWS",
          "Java",
          ".NET",
          "C#",
        ],
      },
    ],
  },
  {
    employerName: "Deloitte",
    jobs: [
      {
        title: "Senior Full-Stack Software Engineer",
        startDate: "January 2024",
        endDate: "July 2024",
        responsibilities: [
          "Worked with development team to migrate and enhance the Center for Disease Control's VAMS vaccine distribution program to a modern AWS-backed environment based on React (v18), TypeScript, Node.JS, and Redux with an AWS Serverless Infrastructure (API Gateway/AWS Lambdas).",
          "Was primary developer for guest registration and account editing functionality, led multiple developers with planning out feature rollout in addition to ensuring government-specific security and accessibility requirements were met, documented, and implemented in appropriate timing.",
          "Regularly worked with team leads, product owners, clients, and fellow developers to ensure high-quality code was built and deployed that fulfilled client's needs and requirements.",
          "Helped lead in designing, updating, and migrating API schema for project during transition from Salesforce-hosted instance to newer AWS-based instance.",
          "Regularly prepared, developed, deployed, and presented high-quality product demos at several points of development for both leadership and the client.",
        ],
        skills: [
          "Visual Studio Code, Amazon Web Services, AWS Lambdas, React (version 18.x)",
          "Java, Java Spring Boot, React Redux, TypeScript, npm, nvm, Node.js",
          "CI/CD software, bash, shell scripts, GitHub Issues, private GitHub instances, AWS deployment, OTP authentication",
          "Chrome developer tools, Firefox development tools, SCSS, MUI, Jest,  AWS Serverless Environments",
          "CI/CD, git pipelines, macOS, Windows, Axios, JWT Tokens, PowerShell, Windows Subsystem for Linux",
          "AI",
          "Docker",
          "PostgreSQL",
          "MySQL",
        ],
      },
    ],
  },
  {
    employerName: "Simon Says Code, LLC.",
    jobs: [
      {
        title: "Founder, CEO",
        startDate: "January 2022",
        endDate: "Present",
        responsibilities: [
          "Managed, developed, and deployed custom tech solutions for various clients across the Greater Atlanta Area based on client’s specific tech needs and currently-existing infrastructures.",
          "Regularly met with clients both in-person and virtually to discuss their needs and target audiences for their services, including search-engine optimization, hosting, and targeted social media campaigns based on desired clientele demographics and locations.",
          "Developed website solutions for clients on multiple hosting services including Squarespace and private domains, worked on both Squarespace-based templates with custom code injected to from-scratch coded websites.",
          "Clients include Medical Associates Hair Transplant Clinic and Gyneconcepts, Inc.",
        ],
        skills: [
          "Visual Studio Code, Figma, React (version 17.x and 18.x)",
          "Java, Java Springboot, React Redux, TypeScript, npm, nvm, Node",
          "CI/CD software, bash, shell scripts, Confluence, private GitLab instances",
          "Chrome developer tools, Firefox development tools, SCSS, Storybook, Jest",
          "CI/CD, git pipelines, macOS, Windows, Adobe Creative Suite, PowerShell, Windows Subsystem for Linux",
          "Azure",
          "AWS",
          "Angular",
          "Next.js",
          "AI",
          "Docker",
          "PostgreSQL",
          "MySQL",
          "MSSQL",
        ],
      },
    ],
  },
  {
    employerName: "Dematic",
    jobs: [
      {
        title: "Full-Stack Software Engineer, Team Product Organizer",
        startDate: "June 2021",
        endDate: "August 2023",
        responsibilities: [
          "Managed, developed, and deployed releases of DGU Component Library npm package, a TypeScript-based UI library for proprietary use within Dematic’s proprietary dashboard system.",
          "Deployed builds of Storybook demos of DGU Component Library to Azure and AWS-based servers based on project needs and preferred hosting platform.",
          "Helped write and manage testing suites for automatic and programmatic unit testing in Jest, worked with QA on debugging any testing errors that occurred in test and pre-release environments.",
          "Managed versioning and git pipelines for private GitLab repository, including developing shell-agnostic CI/CD scripts to automatically generate release notes with new component version releases",
          "Helped develop compatibility patches for Windows-based development environments to ensure fellow Windows-based developers could use the same tools as developers based in macOS/WSL/Linux-based environments",
          "Regularly met with senior UX, engineering, QA engineers, and team leads to ensure deployed components met visual and functional standards as specified by UX and development teams in addition to clients.",
          "Managed team based across continental United States, Germany, India, and United Kingdom",
          "Worked with clients to make sure final product delivery matched both client and corporate requirements.",
          "Managed team of developers and led standup, backlog grooming, sprint planning, and JIRA task management",
        ],
        skills: [
          "Visual Studio Code, JIRA, Sketch, React (version 17.x and 18.x), React Redux",
          "TypeScript, lit, Artifactory, npm, nvm, Node, CI/CD software, bash, shell scripts",
          "Confluence, private GitLab instances, Chrome developer tools, Firefox development tools",
          "SCSS, Storybook, Jest, Lerna, Vue, CI/CD, git pipelines, macOS, Windows, Adobe Creative Suite",
          "Audacity, Sharepoint, Microsoft Teams, PowerShell, Windows Subsystem for Linux",
          "Azure",
          "PostgreSQL",
          "MySQL",
        ],
      },
      {
        title:
          " Chairman and Site Lead for PRISM (LGBTQIA+ employee resource group)",
        startDate: "August 2021",
        endDate: "August 2023",
        responsibilities: [
          "Led PRISM as co-chairman, managed all technical needs for group in addition to helping plan and organize Dematic’s annual presence and presentation at Atlanta Pride",
          "Led exploring paths for growing membership as Midtown Atlanta campus site lead and social outreach via PRISM’s corporate podcast",
          "Worked with Diversity, Equity, and Inclusion manager to help align PRISM with other company ERGs (employee resource groups) such as the Dematic’s Women’s Network and BOLD for cross-ERG sessions and to ensure groups worked together in our shared mission to make company a more inclusive work environment",
        ],
        skills: [
          "Project Management, LGBTQ+ outreach, DEI compliance, LGBTQ+ advocacy",
          "Microsoft Teams, Todoist, JIRA, Agile, Scrum",
        ],
      },
    ],
  },
  {
    employerName: "MarketForce Inf.",
    jobs: [
      {
        title: "Full-Stack Software Engineer",
        startDate: "December 2019",
        endDate: "June 2021",
        responsibilities: [
          "Assigned as designated UI developer for software engineering team, was primary point of contact for UI-related issues and tickets assigned to team in addition to assisting fellow team members and clients based throughout the United States, Canada, and United Kingdom to develop business software solutions for companies based in industries including but not limited to retail, cinema, brick-and-mortar, and most recently eCommerce",
          "Collaborated with various departments via both JIRA and meetings to ensure QA-compliant software solutions designed originally in Figma were delivered in a timely manner to clients; assisted and led development in both front-end and back-end tasks while ensuring both ends worked as the project evolved during COVID-19 pandemic",
          "Worked with other front-end developers to help create best practices for writing code in a consistent style to help with future onboarding and readability",
        ],
        skills: [
          "Visual Studio Professional, Visual Studio Code, React (version 16.x)",
          "Microsoft SQL Server Management Studio, Figma, Azure, HTML/CSS, Node",
          "C#, Redux, React Router, Bootstrap, SCSS, Webpack, Jest, Git, Bitbucket, Confluence, JIRA",
          ".NET",
          "PostgreSQL",
          "MSSQL",
        ],
      },
    ],
  },
  {
    employerName: "Verizon Wireless",
    jobs: [
      {
        title: "OneMessage Developer",
        startDate: "April 2019",
        endDate: "December 2019",
        responsibilities: [
          "Worked with the Verizon OneMessage and QA team to produce, debug, and update email, SMS, and push notifications and templates for customers and internal communications with an AWS codebase and Java Spring stack, collaborated with multiple teams to produce software solutions without breaking existing communication",
          "Mapped job orchestration in internal tool to parse JSON requests from various upstream services to send appropriate communications to users based on customer feedback and legal/promotional requirements",
        ],
        skills: [
          "HTML/CSS/JavaScript, Java Maven, Node, SQL, React, XML tools",
          "Amazon Web Services (AWS), Oracle Java Atlassian Jira, PuTTY, Visual Studio Code",
          "internal company tools",
        ],
      },
    ],
  },
  {
    employerName: "Veloxiti, Inc. / Decooda",
    jobs: [
      {
        title: "Senior User Interface Engineer",
        startDate: "July 2018",
        endDate: "April 2019",
        responsibilities: [
          "Worked on creating a consistent user experience and style guide across multiple company projects",
          "Helped lead the implementation of user interface wire-frames and mock-ups in React and Angular-based projects",
        ],
        skills: [
          " HTML/CSS/JavaScript, PostgreSQL, Amazon Web Services (AWS), Atlassian Jira",
          "Sketch, Tomcat, MongoDB, Java Springboot, Visual Studio Code, OpenJDK Java, Material Design",
          "Azure",
          "AWS",
          "Angular",
          "C#",
        ],
      },
    ],
  },
  {
    employerName: "StudentBridge",
    jobs: [
      {
        title: "UX Designer",
        startDate: "March 2018",
        endDate: "July 2018",
        responsibilities: [
          "Worked with Senior Product Analyst to help create UX design concepts for services such as analytics dashboards that would be then sent to developers to be made into a functioning application",
        ],
        skills: [
          "Visual Studio Code, Sketch, Material Design, Apple Design Guidelines, Material Design",
        ],
      },
    ],
  },
  {
    employerName: "Cox Communications, Inc.",
    jobs: [
      {
        title: "Safety and Risk IT Intern",
        startDate: "May 2017",
        endDate: "August 2017",
        responsibilities: [
          "Migrated Health and Safety department to new SharePoint platform",
          "Worked with HomeLife division to increase one-time-sales of HomeLife devices via stretch assignment",
        ],
        skills: [
          "Sublime Text, HTML, CSS, JavaScript, SharePoint, Microsoft Office, Microsoft Cloud Services",
          "Azure",
          "MySQL",
        ],
      },
    ],
  },
];

const workData: WorkData[] = rawWorkData.flatMap((employer) =>
  employer.jobs.map((job) => ({
    company: employer.employerName,
    title: job.title,
    duration: `${job.startDate} - ${job.endDate}`,
    responsibilities: job.responsibilities,
    skills: job.skills
      .flatMap((s) => s.split(","))
      .map((sk) => sk.trim())
      .filter((sk) => sk),
  }))
);

const portfolioItems: PortfolioItem[] = [
  {
    name: "SAUX Component Library",
    description:
      "A custom-built component library for React, focusing on reusability and a consistent design language, documented with Storybook.",
    tech: ["React", "TypeScript", "Storybook", "SCSS"],
    url: "https://github.com/tassyguy/saux-component-library",
  },
  {
    name: "Carbon Browser",
    description:
      "A privacy-focused web browser based on a custom build of Chromium, designed to be fast, secure, and user-friendly.",
    tech: ["C++", "Chromium", "JavaScript", "HTML", "Python"],
    url: "https://github.com/tassyguy/carbon-browser",
  },
  {
    name: "My Resume Website",
    description:
      "The very website you are looking at! A portfolio built with React and TypeScript to showcase my work and skills in a unique, neofetch-inspired theme.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    url: "https://github.com/tassyguy/my-resume-website",
  },
];

// --- COMPONENTS ---

const InfoLine: FC<InfoLineProps> = ({
  icon: Icon,
  label,
  value,
  url,
  primaryColor,
  accentColor,
  index,
}) => (
  <div
    className="animate-fade-in-up"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="flex items-start">
      <div
        className={`w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3 ${primaryColor}`}
      >
        <Icon size={20} />
      </div>
      <div className="flex flex-col sm:flex-row">
        <span className={`font-bold ${primaryColor}`}>{label}:</span>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            download={label === "Resume" || undefined}
            className={`ml-0 sm:ml-2 ${accentColor} hover:underline`}
          >
            {value}
          </a>
        ) : (
          <span className={`ml-0 sm:ml-2 ${accentColor}`}>{value}</span>
        )}
      </div>
    </div>
  </div>
);

const TabButton = React.forwardRef<HTMLButtonElement, TabButtonProps>(
  ({ label, activeTab, theme, onClick }, ref) => (
    <button
      ref={ref}
      role="tab"
      aria-selected={activeTab === label.toLowerCase()}
      aria-controls={`tabpanel-${label.toLowerCase()}`}
      id={`tab-${label.toLowerCase()}`}
      onClick={onClick}
      className={`flex-shrink-0 px-4 py-3 text-sm font-semibold transition-all duration-200 border-b-2 hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        theme.focusBorder
      } ${
        activeTab === label.toLowerCase()
          ? `${theme.activeTab} ${theme.text}`
          : `${theme.inactiveTab} ${theme.tertiary} hover:text-white`
      }`}
    >
      {label}
    </button>
  )
);

const IntroSection: FC<SectionProps> = ({ theme }) => {
  const introInfo = [
    { icon: User, label: "Name", value: portfolioData.name },
    { icon: MapPin, label: "Location", value: portfolioData.location },
    { icon: Briefcase, label: "Title", value: portfolioData.title },
    { icon: Code, label: "Skills", value: portfolioData.skills.join(", ") },
  ];
  const contactInfo = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: portfolioData.socials.linkedin,
      url: `https://linkedin.com/in/${portfolioData.socials.linkedin}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: portfolioData.socials.github,
      url: `https://github.com/${portfolioData.socials.github}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: portfolioData.socials.email,
      url: `mailto:${portfolioData.socials.email}`,
    },
    {
      icon: FileText,
      label: "Resume",
      value: "Download PDF",
      url: portfolioData.socials.resumeUrl,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 animate-fade-in">
      <div className="md:w-1/3 flex-shrink-0 flex flex-col items-center">
        <img
          src={portfolioData.imageUrl}
          alt="A portrait of Simon Phillips"
          className="w-48 h-48 md:w-full md:h-auto object-cover rounded-lg border-4 border-black border-opacity-30"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/400x400/2E3440/E5E9F0?text=Error";
          }}
        />
        <div
          aria-hidden="true"
          className="flex flex-col items-center gap-2 mt-4 w-full"
        >
          <div className="flex justify-center gap-2 w-full">
            {theme.colors.row1.map((color, index) => (
              <div
                key={`row1-${index}`}
                className={`flex-1 h-6 rounded-sm ${color}`}
              ></div>
            ))}
          </div>
          <div className="flex justify-center gap-2 w-full">
            {theme.colors.row2.map((color, index) => (
              <div
                key={`row2-${index}`}
                className={`flex-1 h-6 rounded-sm ${color}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:w-2/3">
        <h1
          className={`text-2xl font-bold ${theme.primary} mb-4 animate-fade-in-up`}
        >
          Hi, welcome to my website!
        </h1>
        <div className="space-y-3">
          {introInfo.map((item, index) => (
            <InfoLine
              key={item.label}
              {...item}
              index={index + 1}
              primaryColor={theme.primary}
              accentColor={theme.accent}
            />
          ))}
          <div
            className="pt-2 animate-fade-in-up"
            style={{ animationDelay: `${introInfo.length * 100}ms` }}
          >
            <div
              className={`w-full border-t border-dashed ${theme.tertiary} opacity-50`}
            ></div>
          </div>
          {contactInfo.map((item, index) => (
            <InfoLine
              key={item.label}
              {...item}
              index={introInfo.length + index + 1}
              primaryColor={theme.primary}
              accentColor={theme.accent}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutSection: FC<SectionProps> = ({ theme }) => (
  <div className="animate-fade-in">
    <h1
      id="about-heading"
      className={`text-2xl font-bold ${theme.primary} mb-6 flex items-center`}
    >
      <Info size={24} className="mr-3" /> About Me
    </h1>
    <div
      className={`space-y-4 ${theme.secondary} text-justify leading-relaxed`}
    >
      <p>{portfolioData.about}</p>
    </div>
  </div>
);

const WorkSection: FC<SectionProps> = ({ theme }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeQuickFilter, setActiveQuickFilter] = useState("");
  const quickFilterOptions = [
    "React",
    "TypeScript",
    "Angular",
    "AWS",
    "Node.js",
    "Azure",
    "Java",
    "C#",
    "Next.js",
    "AI",
  ];

  const handleQuickFilterClick = (skill: string) => {
    setSearchTerm("");
    setActiveQuickFilter((prev) => (prev === skill ? "" : skill));
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveQuickFilter("");
    setSearchTerm(e.target.value);
  };

  const filteredWorkData = useMemo(() => {
    const filterTerm = activeQuickFilter || searchTerm;
    if (!filterTerm) return workData;
    return workData.filter((job) =>
      job.skills.some((skill) =>
        skill.toLowerCase().includes(filterTerm.toLowerCase())
      )
    );
  }, [activeQuickFilter, searchTerm]);

  return (
    <div className="animate-fade-in">
      <h1
        id="work-heading"
        className={`text-2xl font-bold ${theme.primary} mb-6`}
      >
        Work History
      </h1>
      <div className="relative mb-4">
        <label htmlFor="work-search" className="sr-only">
          Search work history by skill
        </label>
        <Search
          className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.tertiary}`}
        />
        <input
          id="work-search"
          type="text"
          placeholder="Search skills (e.g., React, Java, AWS)..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={`w-full pl-10 pr-4 py-2 rounded-md ${theme.inputBg} ${theme.text} border-2 border-transparent ${theme.focusBorder} focus:outline-none transition-colors`}
        />
      </div>
      <div
        className="flex flex-wrap gap-2 mb-8"
        role="toolbar"
        aria-label="Quick skill filters"
      >
        {quickFilterOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleQuickFilterClick(option)}
            aria-pressed={activeQuickFilter === option}
            className={`px-3 py-1 text-sm rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 ${
              activeQuickFilter === option
                ? `${theme.highlightBg} ${theme.highlightText} font-bold`
                : `${theme.buttonBg} ${theme.buttonText} bg-opacity-70 hover:bg-opacity-100`
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="space-y-8">
        {filteredWorkData.map((job, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-6 p-4 rounded-lg bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"
          >
            <div className="sm:w-1/3">
              <div className="flex items-center">
                <Building size={20} className={`${theme.primary} mr-2`} />
                <h2 className={`text-lg font-bold ${theme.text}`}>
                  {job.company}
                </h2>
              </div>
              <div className="flex items-center mt-1">
                <Briefcase size={16} className={`${theme.accent} mr-2 ml-1`} />
                <p className={`${theme.accent}`}>{job.title}</p>
              </div>
              <div className="flex items-center mt-1">
                <Calendar size={16} className={`${theme.accent} mr-2 ml-1`} />
                <p className={`${theme.accent}`}>{job.duration}</p>
              </div>
            </div>
            <div className="sm:w-2/3">
              <ul aria-label={`Responsibilities at ${job.company}`}>
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="flex">
                    <ChevronRight
                      size={16}
                      className={`${theme.primary} mr-2 mt-1 flex-shrink-0`}
                    />
                    <span className={`${theme.secondary}`}>{resp}</span>
                  </li>
                ))}
              </ul>
              {job.skills && job.skills.length > 0 && (
                <div className="mt-4">
                  <div className="flex items-center">
                    <Wrench size={16} className={`${theme.primary} mr-2`} />
                    <h3 className={`font-semibold ${theme.primary} text-sm`}>
                      Key Skills
                    </h3>
                  </div>
                  <div
                    className="flex flex-wrap gap-2 mt-2"
                    aria-label={`Skills used at ${job.company}`}
                  >
                    {job.skills.map((skill, i) => {
                      const isHighlighted =
                        (activeQuickFilter || searchTerm) &&
                        skill
                          .toLowerCase()
                          .includes(
                            (activeQuickFilter || searchTerm).toLowerCase()
                          );
                      return (
                        <span
                          key={i}
                          className={`px-2 py-1 text-xs rounded-full transition-colors ${
                            isHighlighted
                              ? `${theme.highlightBg} ${theme.highlightText}`
                              : `${theme.buttonBg} ${theme.buttonText} bg-opacity-80`
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PortfolioSection: FC<SectionProps> = ({ theme }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeQuickFilter, setActiveQuickFilter] = useState("");
  const quickFilterOptions = [
    "React",
    "TypeScript",
    "Storybook",
    "SCSS",
    "C++",
    "Chromium",
    "JavaScript",
    "HTML",
    "Python",
    "Next.js",
    "Docker",
    "Node.js",
    "Tailwind CSS",
  ];

  const handleQuickFilterClick = (tech: string) => {
    setSearchTerm("");
    setActiveQuickFilter((prev) => (prev === tech ? "" : tech));
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveQuickFilter("");
    setSearchTerm(e.target.value);
  };

  const filteredPortfolioItems = useMemo(() => {
    const filterTerm = activeQuickFilter || searchTerm;
    if (!filterTerm) return portfolioItems;
    return portfolioItems.filter((item) =>
      item.tech.some((tech) =>
        tech.toLowerCase().includes(filterTerm.toLowerCase())
      )
    );
  }, [activeQuickFilter, searchTerm]);

  return (
    <div className="animate-fade-in">
      <h1
        id="portfolio-heading"
        className={`text-2xl font-bold ${theme.primary} mb-6`}
      >
        Portfolio
      </h1>
      <div className="relative mb-4">
        <label htmlFor="portfolio-search" className="sr-only">
          Search portfolio by technology
        </label>
        <Search
          className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.tertiary}`}
        />
        <input
          id="portfolio-search"
          type="text"
          placeholder="Search technologies (e.g., React, Docker)..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={`w-full pl-10 pr-4 py-2 rounded-md ${theme.inputBg} ${theme.text} border-2 border-transparent ${theme.focusBorder} focus:outline-none transition-colors`}
        />
      </div>
      <div
        className="flex flex-wrap gap-2 mb-8"
        role="toolbar"
        aria-label="Quick technology filters"
      >
        {quickFilterOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleQuickFilterClick(option)}
            aria-pressed={activeQuickFilter === option}
            className={`px-3 py-1 text-sm rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 ${
              activeQuickFilter === option
                ? `${theme.highlightBg} ${theme.highlightText} font-bold`
                : `${theme.buttonBg} ${theme.buttonText} bg-opacity-70 hover:bg-opacity-100`
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="space-y-8">
        {filteredPortfolioItems.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
          >
            <div className="flex items-center mb-2">
              <GitBranch size={20} className={`${theme.primary} mr-3`} />
              <h2 className={`text-lg font-bold ${theme.text}`}>{item.name}</h2>
            </div>
            <p className={`${theme.secondary} mb-3 ml-1 text-sm`}>
              {item.description}
            </p>
            <div className="flex items-center mb-3">
              <Layers size={16} className={`${theme.primary} mr-3 ml-1`} />
              <div
                className="flex flex-wrap gap-2"
                aria-label={`Technologies used for ${item.name}`}
              >
                {item.tech.map((tech, i) => {
                  const isHighlighted =
                    (activeQuickFilter || searchTerm) &&
                    tech
                      .toLowerCase()
                      .includes(
                        (activeQuickFilter || searchTerm).toLowerCase()
                      );
                  return (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs rounded-full transition-colors ${
                        isHighlighted
                          ? `${theme.highlightBg} ${theme.highlightText}`
                          : `${theme.buttonBg} ${theme.buttonText} bg-opacity-80`
                      }`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center">
              <LinkIcon size={16} className={`${theme.primary} mr-3 ml-1`} />
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm ${theme.primary} hover:underline`}
              >
                {item.url}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const EducationSection: FC<SectionProps> = ({ theme }) => {
  const educationData = portfolioData.education[0];
  const coursework = educationData.coursework.split(",").map((c) => c.trim());

  return (
    <div className="animate-fade-in">
      <h1
        id="education-heading"
        className={`text-2xl font-bold ${theme.primary} mb-6`}
      >
        Education
      </h1>
      <div
        className={`p-4 rounded-lg bg-black bg-opacity-20 hover:bg-opacity-25 transition-all duration-300`}
      >
        <div className="flex items-center mb-2">
          <GraduationCap size={24} className={`${theme.primary} mr-3`} />
          <div>
            <h2 className={`text-xl font-bold ${theme.text}`}>
              {educationData.name}
            </h2>
            <p className={`${theme.accent} text-sm`}>
              {educationData.startDate} - {educationData.endDate}
            </p>
          </div>
        </div>
        <div className="ml-10 mt-2">
          <p className={`font-semibold ${theme.text}`}>
            B.S. in {educationData.major}
          </p>
          <p className={`${theme.accent} text-sm`}>
            Minor in {educationData.minor}
          </p>
          <p className={`${theme.secondary} text-sm italic mt-2`}>
            {educationData.description}
          </p>
        </div>

        <div className="mt-6">
          <div className="flex items-center">
            <BookOpen size={16} className={`${theme.primary} mr-2`} />
            <h3 className={`font-semibold ${theme.primary} text-sm`}>
              Relevant Coursework
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {coursework.map((course, i) => (
              <span
                key={i}
                className={`px-2 py-1 text-xs rounded-full ${theme.buttonBg} ${theme.buttonText} bg-opacity-80`}
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactSection: FC<SectionProps> = ({ theme }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendClick = () => {
    const mailtoLink = `mailto:${
      portfolioData.socials.email
    }?subject=${encodeURIComponent(
      "Resume Website Message: " + formData.subject
    )}&body=${encodeURIComponent(
      formData.message +
        "\n\nFrom: " +
        formData.name +
        " <" +
        formData.email +
        ">"
    )}`;
    window.location.href = mailtoLink;
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="animate-fade-in">
      <h1
        id="contact-heading"
        className={`text-2xl font-bold ${theme.primary} mb-6 flex items-center`}
      >
        <Mail size={24} className="mr-3" /> Get In Touch
      </h1>
      <div className="space-y-6">
        <div className="relative">
          <label htmlFor="name-input" className="sr-only">
            Your Name
          </label>
          <UserCheck
            className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.tertiary}`}
          />
          <input
            id="name-input"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className={`w-full pl-10 pr-4 py-2 rounded-md ${theme.inputBg} ${theme.text} border-2 border-transparent ${theme.focusBorder} focus:outline-none transition-colors`}
          />
        </div>
        <div className="relative">
          <label htmlFor="email-input" className="sr-only">
            Your Email
          </label>
          <AtSign
            className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.tertiary}`}
          />
          <input
            id="email-input"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className={`w-full pl-10 pr-4 py-2 rounded-md ${theme.inputBg} ${theme.text} border-2 border-transparent ${theme.focusBorder} focus:outline-none transition-colors`}
          />
        </div>
        <div className="relative">
          <label htmlFor="subject-input" className="sr-only">
            Subject
          </label>
          <Inbox
            className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.tertiary}`}
          />
          <input
            id="subject-input"
            type="text"
            name="subject"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className={`w-full pl-10 pr-4 py-2 rounded-md ${theme.inputBg} ${theme.text} border-2 border-transparent ${theme.focusBorder} focus:outline-none transition-colors`}
          />
        </div>
        <div className="relative">
          <label htmlFor="message-input" className="sr-only">
            Your Message
          </label>
          <MessageSquare
            className={`absolute left-3 top-3 w-5 h-5 ${theme.tertiary}`}
          />
          <textarea
            id="message-input"
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`w-full pl-10 pr-4 py-2 rounded-md ${theme.inputBg} ${theme.text} border-2 border-transparent ${theme.focusBorder} focus:outline-none transition-colors resize-none`}
          ></textarea>
        </div>
        <div className="text-right">
          <button
            type="button"
            onClick={handleSendClick}
            className={`flex items-center justify-center gap-2 px-5 py-2 rounded-lg font-sans font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent ${theme.buttonBg} ${theme.buttonText}`}
          >
            <Send size={18} />
            <span>Send Message</span>
          </button>
        </div>
        {showSuccess && (
          <p role="alert" className={`${theme.accent} text-sm text-center`}>
            Your email client has been opened. Thank you for your message!
          </p>
        )}
      </div>
    </div>
  );
};

const App = () => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [highContrastMode, setHighContrastMode] = useState<"dark" | "light" | null>(null);
  const [activeTab, setActiveTab] = useState("intro");
  const [currentFontIndex, setCurrentFontIndex] = useState(0);
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const theme =
    highContrastMode === "dark"
      ? highContrastDarkTheme
      : highContrastMode === "light"
      ? highContrastLightTheme
      : themes[currentThemeIndex];

  const font = fonts[currentFontIndex];
  const fontStyle = fontStyles[currentStyleIndex];
  const tabs = ["Intro", "About", "Work", "Portfolio", "Education", "Contact"];

  const cycleTheme = () => {
    if (highContrastMode === null) {
      setCurrentThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
    }
  };

  const cycleFont = () => {
    setCurrentFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
  };

  const cycleFontStyle = () => {
    setCurrentStyleIndex((prevIndex) => (prevIndex + 1) % fontStyles.length);
  };

  const cycleAccessibilityMode = () => {
    if (highContrastMode === null) setHighContrastMode("dark");
    else if (highContrastMode === "dark") setHighContrastMode("light");
    else setHighContrastMode(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        const currentTabIndex = tabs.findIndex(
          (tab) => tab.toLowerCase() === activeTab
        );
        const nextTabIndex = (currentTabIndex + 1) % tabs.length;
        setActiveTab(tabs[nextTabIndex].toLowerCase());
        tabRefs.current[nextTabIndex]?.focus();
      } else if (e.key === "ArrowLeft") {
        const currentTabIndex = tabs.findIndex(
          (tab) => tab.toLowerCase() === activeTab
        );
        const nextTabIndex = (currentTabIndex - 1 + tabs.length) % tabs.length;
        setActiveTab(tabs[nextTabIndex].toLowerCase());
        tabRefs.current[nextTabIndex]?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeTab, tabs]);

  useEffect(() => {
    const img = new Image();
    img.src = portfolioData.imageUrl;
  }, []);

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center p-4 transition-colors duration-500 ${theme.bg} ${theme.text} ${font.className} ${fontStyle.className}`}
    >
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-black bg-opacity-20 rounded-xl shadow-2xl overflow-hidden">
          <div
            role="tablist"
            aria-label="Main navigation"
            className="flex border-b border-black border-opacity-30 overflow-x-auto"
          >
            {tabs.map((tab, index) => (
              <TabButton
                key={tab}
                ref={(el) => (tabRefs.current[index] = el)}
                label={tab}
                activeTab={activeTab}
                theme={theme}
                onClick={() => setActiveTab(tab.toLowerCase())}
              />
            ))}
          </div>
          <main className="p-6 md:p-8">
            {activeTab === "intro" && (
              <section
                role="tabpanel"
                id="tabpanel-intro"
                aria-labelledby="tab-intro"
              >
                <IntroSection theme={theme} />
              </section>
            )}
            {activeTab === "about" && (
              <section
                role="tabpanel"
                id="tabpanel-about"
                aria-labelledby="tab-about"
              >
                <AboutSection theme={theme} />
              </section>
            )}
            {activeTab === "work" && (
              <section
                role="tabpanel"
                id="tabpanel-work"
                aria-labelledby="tab-work"
              >
                <WorkSection theme={theme} />
              </section>
            )}
            {activeTab === "portfolio" && (
              <section
                role="tabpanel"
                id="tabpanel-portfolio"
                aria-labelledby="tab-portfolio"
              >
                <PortfolioSection theme={theme} />
              </section>
            )}
            {activeTab === "education" && (
              <section
                role="tabpanel"
                id="tabpanel-education"
                aria-labelledby="tab-education"
              >
                <EducationSection theme={theme} />
              </section>
            )}
            {activeTab === "contact" && (
              <section
                role="tabpanel"
                id="tabpanel-contact"
                aria-labelledby="tab-contact"
              >
                <ContactSection theme={theme} />
              </section>
            )}
          </main>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={cycleTheme}
            disabled={highContrastMode !== null}
            aria-label={`Current theme: ${theme.name}. Click to change theme.`}
            className={`flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 rounded-lg font-sans font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              theme.focusBorder
            } ${theme.buttonBg} ${theme.buttonText} ${
              highContrastMode !== null ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Palette size={18} />
            <span>Theme: {theme.name}</span>
          </button>
          <button
            onClick={cycleFont}
            aria-label={`Current font: ${font.name}. Click to change font.`}
            className={`flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 rounded-lg font-sans font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${theme.focusBorder} ${theme.buttonBg} ${theme.buttonText}`}
          >
            <Type size={18} />
            <span>Font: {font.name}</span>
          </button>
          <button
            onClick={cycleFontStyle}
            aria-label={`Current font style: ${fontStyle.name}. Click to change style.`}
            className={`flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 rounded-lg font-sans font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${theme.focusBorder} ${theme.buttonBg} ${theme.buttonText}`}
          >
            <Pilcrow size={18} />
            <span>Style: {fontStyle.name}</span>
          </button>
          <button
            onClick={cycleAccessibilityMode}
            aria-label={`Current contrast mode: ${
              highContrastMode || "Off"
            }. Click to cycle through contrast modes.`}
            className={`flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 rounded-lg font-sans font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              theme.focusBorder
            } ${
              highContrastMode !== null
                ? `bg-yellow-400 text-black`
                : `${theme.buttonBg} ${theme.buttonText}`
            }`}
          >
            <Eye size={18} />
            <span>
              Contrast:{" "}
              {highContrastMode === "dark"
                ? "Dark"
                : highContrastMode === "light"
                ? "Light"
                : "Off"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
