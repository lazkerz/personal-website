import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
  SiMysql,
  SiFigma,
  SiPhp,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiJavascript,
  SiNextdotjs,
  SiGithub,
  SiPostman,
  SiOpenjdk,
  SiGooglecloud,
  SiAndroid,
  SiKotlin,
  SiRealm,
  SiAuth0,
  SiDart,
  SiFlutter,
  SiChartdotjs,
} from "react-icons/si";
import { IconType } from "react-icons";

export interface ProjectImage {
  url: string;
  alt: string;
}

export interface Technology {
  name: string;
  icon: IconType;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  images: ProjectImage[];
  technologies: Technology[];
  demo: string;
  type: "Web" | "Mobile";
}

export const projects: Project[] = [

  //Project Web
  {
  id: 1,
  title: "Telkomsel Analytics & Automation Platform",
  description: "Two-phase analytics solution built across different divisions at PT Telkomsel. Phase 1 (Mobile Division): Built monitoring dashboards for kartu and voucher sales performance across 6 regional branches — translating sales team requirements into real-time reporting tools serving 200+ users. Phase 2 (Indihome/Household Division): Expanded scope to enterprise-level operational analytics. Extracted and processed large-scale data from Hive/Hadoop infrastructure covering installation data (PS/RE/IO), ODP network capacity, coverage distance, and APC cluster performance. Performed symptoms analysis to diagnose broadband service failures — ODP capacity issues, wifi outages, failed installations — and presented findings visually for management strategic decisions. Automated the full reporting pipeline using Python and Shell Script, reducing manual workload by 60%. The analytical work directly contributed to Indihome sales program strategy discussions with management.",
  images: [
    {
      url: "/projects/sales/image1.png",
      alt: "Fullfillment summary daily"
    },
    {
      url: "/projects/sales/image4.png", 
      alt: "ODP Network Capacity Analysis"
    },
    {
      url: "/projects/sales/image3.png", 
      alt: "Dashboard Overview"
    },

  ],
  technologies: [
    { name: "Python", icon: SiGithub, color: "bg-[#3776AB]/20" },
    { name: "SQL", icon: SiMysql, color: "bg-[#4479A1]/20" },
    { name: "Laravel", icon: SiLaravel, color: "bg-[#FF2D20]/20" },
    { name: "PHP", icon: SiPhp, color: "bg-[#06B6D4]/20" },
    { name: "Chart Js", icon: SiChartdotjs, color: "bg-[#06B6D4]/20" },
  ],
  demo: "",
  type: "Web",
  },
  {
    id: 2,
    title: "Samosir Live",
    description: "Operational analytics platform built for PT Telkomsel to solve a critical business problem: sales teams across 6 regional branches had no real-time visibility into outlet performance — reports took 2-3 days and were often inaccurate by the time they arrived. I gathered requirements from sales and marketing stakeholders, defined the data structure and KPIs that mattered to the business, and designed the system to pull data from enterprise infrastructure. The result: 200+ active users now monitor outlet performance, sales tracking, and cross-branch coordination in real-time — reducing report lag from days to seconds.",
    images: [
      {
        url: "/projects/samosir/user.png",
        alt: "samosir Preview 1",
      },
      {
        url: "/projects/samosir/redeem_voucher.png",
        alt: "samosir Preview 2",
      },
      {
        url: "/projects/samosir/outlet.png",
        alt: "samosir Preview 3",
      },
      {
        url: "/projects/samosir/wallet.png",
        alt: "samosir Preview 4",
      },
      {
        url: "/projects/samosir/detail_wallet.png",
        alt: "samosir Preview 5",
      },
      {
        url: "/projects/samosir/track.png",
        alt: "samosir Preview 6",
      },
      {
        url: "/projects/samosir/redeem_item.png",
        alt: "samosir Preview 7",
      },
      {
        url: "/projects/samosir/redeem_item_detail.png",
        alt: "samosir Preview 8",
      },
      {
        url: "/projects/samosir/broadcast.png",
        alt: "samosir Preview 9",
      },
      {
        url: "/projects/samosir/survey.png",
        alt: "samosir Preview 10",
      },
    ],
    technologies: [
      {
        name: "Laravel",
        icon: SiLaravel,
        color: "bg-[#61DAFB]/20",
      },
      {
        name: "PHP",
        icon: SiPhp,
        color: "bg-[#06B6D4]/20",
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "bg-[#06B6D4]/20",
      },
      {
        name: "Chart Js",
        icon: SiChartdotjs,
        color: "bg-[#06B6D4]/20",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20",
      },
    ],
    demo: "",
    type: "Web",
  },
  {
    id: 3,
    title: "Siphani",
    description: "A marketplace platform built to solve a real supply chain problem: farmers struggled to sell directly to consumers due to too many middlemen reducing their income. I gathered requirements from both farmer and buyer perspectives, mapped the transaction flow, and built an end-to-end platform connecting agricultural producers directly with consumers. Live at siphani.com.",
    images: [
      {
        url: "/projects/siphani/siphani-preview.jpg",
        alt: "Siphani Preview 1",
      },
      {
        url: "/projects/siphani/siphani-preview2.jpg",
        alt: "Siphani Preview 2",
      },
      {
        url: "/projects/siphani/siphani-preview3.jpg",
        alt: "Siphani Preview 3",
      },
    ],
    technologies: [
      {
        name: "Laravel",
        icon: SiLaravel,
        color: "bg-[#61DAFB]/20",
      },
      {
        name: "React",
        icon: SiReact,
        color: "bg-[#61DAFB]/20",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "bg-[#3178C6]/20",
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "bg-[#06B6D4]/20",
      },
      {
        name: "PHP",
        icon: SiPhp,
        color: "bg-[#06B6D4]/20",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20",
      },
    ],
    demo: "",
    type: "Web",
  },
  {
    id: 4,
    title: "Sistem Report Honor Senat Polmed",
    description: "Identified and solved a manual process problem at Politeknik Negeri Medan: senate honor disbursements were calculated manually from attendance records, causing errors and delays. I analyzed the existing workflow, gathered requirements from the admin team, and designed an automated system that calculates honorarium based on meeting participation and generates accurate reports. The system eliminated manual calculation errors and reduced processing time significantly. Live at senat.polmed.ac.id.",
    images: [
      {
        url: "/projects/senat/senat-preview.png",
        alt: "Senat Preview 1",
      },
      {
        url: "/projects/senat/senat-preview2.jpg",
        alt: "Senat Preview 2",
      },
      {
        url: "/projects/senat/senat-preview3.png",
        alt: "Senat Preview 3",
      },
    ],
    technologies: [
      {
        name: "PHP",
        icon: SiPhp,
        color: "bg-[#06B6D4]/20",
      },
      {
        name: "Laravel",
        icon: SiLaravel,
        color: "bg-[#FF2D20]/20",
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "bg-[#06B6D4]/20",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20",
      },
    ],
    demo: "",
    type: "Web",
  },
  {
    id: 5,
    title: "SIMKATMAWA",
    description: "Student achievement tracking system built for Politeknik Negeri Medan to solve a data visibility problem: student achievement data was scattered and unstructured, making it difficult for management to track performance trends. I designed a centralized system that organizes, visualizes, and analyzes student achievement data — providing management with clear insights for academic decision-making.",
    images: [
      {
        url: "/projects/simkatmawa/simkatmawa-preview.png",
        alt: "Simkatmawa Preview 1",
      },
      {
        url: "/projects/simkatmawa/simkatmawa-preview2.jpg",
        alt: "Senat Preview 2",
      },
    ],
    technologies: [
      {
        name: "PHP",
        icon: SiPhp,
        color: "bg-[#06B6D4]/20",
      },
      {
        name: "Laravel",
        icon: SiLaravel,
        color: "bg-[#FF2D20]/20",
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "bg-[#06B6D4]/20",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20",
      },
    ],
    demo: "",
    type: "Web",
  },
  {
    id: 6,
    title: "Web Pelaporan Satgas Polmed",
    description:
      "A dedicated platform for reporting incidents of sexual harassment on campus, managed by the Polmed PPKS Task Force. This portal also provides updates on actions and activities undertaken by the task force to ensure a safe and supportive campus environment",
    images: [
      {
        url: "/projects/satgas/satgas-preview.jpg",
        alt: "Satgas Preview 1",
      },
      {
        url: "/projects/satgas/satgas-preview2.jpg",
        alt: "Satgas Preview 2",
      },
      {
        url: "/projects/satgas/satgas-preview2.jpg",
        alt: "Satgas Preview 2",
      },
    ],
    technologies: [
      {
        name: "Javascript",
        icon: SiJavascript,
        color: "bg-[#06B6D4]/20",
      },
      {
        name: "Typescript",
        icon: SiTypescript,
        color: "bg-[#06B6D4]/20",
      },
      {
        name: "Node Js",
        icon: SiNodedotjs,
        color: "bg-[#FF2D20]/20",
      },
      {
        name: "Express Js",
        icon: SiExpress,
        color: "bg-[#FF2D20]/20",
      },
      {
        name: "Next.Js",
        icon: SiNextdotjs,
        color: "bg-[#FF2D20]/20",
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "bg-[#06B6D4]/20",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20",
      },
    ],
    demo: "",
    type: "Web",
  },
  {
    id: 7,
    title: "Fastfixx",
    description:
      "An all-in-one platform for managing workshops and mechanics, designed to streamline service orders and customer interactions. Available on both mobile and web, this platform offers a seamless experience for workshop management and customer bookings.",
    images: [
      {
        url: "/projects/fastfixx/fastfixx-preview.png",
        alt: "fastfixx Preview 1",
      },
      {
        url: "/projects/fastfixx/fastfixx-preview2.png",
        alt: "fastfixx Preview 2",
      },
      {
        url: "/projects/fastfixx/fastfixx-preview3.png",
        alt: "fastfixx Preview 3",
      },
    ],
    technologies: [
      {
        name: "Javascript",
        icon: SiJavascript,
        color: "bg-[#06B6D4]/20",
      },
      {
        name: "Node Js",
        icon: SiNodedotjs,
        color: "bg-[#FF2D20]/20",
      },
      {
        name: "Express Js",
        icon: SiExpress,
        color: "bg-[#FF2D20]/20",
      },
      {
        name: "React",
        icon: SiReact,
        color: "bg-[#FF2D20]/20",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20",
      },
    ],
    demo: "",
    type: "Web",
  },
  {
    id: 8,
    title: "KIKI Wedding",
    description:
      "A comprehensive platform for booking complete wedding packages, connecting you with top vendors for venues, decorations, photography, and more. Find and customize everything you need for your dream wedding in one place",
    images: [
      {
        url: "/projects/wedding/wedding-preview.jpg",
        alt: "fastfixx Preview 1",
      },
      {
        url: "/projects/wedding/wedding-preview2.jpg",
        alt: "fastfixx Preview 2",
      },
      {
        url: "/projects/wedding/wedding-preview3.jpg",
        alt: "fastfixx Preview 3",
      },
    ],
    technologies: [
      {
        name: "Javascript",
        icon: SiJavascript,
        color: "bg-[#06B6D4]/20",
      },
      {
        name: "Node Js",
        icon: SiNodedotjs,
        color: "bg-[#FF2D20]/20",
      },
      {
        name: "Express Js",
        icon: SiExpress,
        color: "bg-[#FF2D20]/20",
      },
      {
        name: "React",
        icon: SiReact,
        color: "bg-[#FF2D20]/20",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20",
      },
    ],
    demo: "",
    type: "Web",
  },

  //Project Mobile
  {
    id: 9,
    title: "Swipe & Survive",
    description:
      "This platform designed to help track my spending habits and manage my personal finances effectively.",
    images: [
      {
        url: "/projects/swipe/Preview.png",
        alt: "Swipe & Survive Preview 1",
      },
      {
        url: "/projects/swipe/Utama.jpg",
        alt: "Swipe & Survive Preview 1",
      },
      {
        url: "/projects/swipe/Input.jpg",
        alt: "Swipe & Survive Preview 2",
      },
      {
        url: "/projects/swipe/Insight1.jpg",
        alt: "Swipe & Survive Preview 3",
      },
      {
        url: "/projects/swipe/Insight2.jpg",
        alt: "Swipe & Survive Preview 4",
      },
      {
        url: "/projects/swipe/Goals.jpg",
        alt: "Swipe & Survive Preview 5",
      },
      {
        url: "/projects/swipe/Kategori.jpg",
        alt: "Swipe & Survive Preview 6",
      },
    ],
    technologies: [
      {
        name: "Dart",
        icon: SiDart,
        color: "bg-[#06B6D4]/20",
      },
      {
        name: "Flutter",
        icon: SiFlutter,
        color: "bg-[#FF2D20]/20",
      },
    ],
    demo: "",
    type: "Mobile",
  },
  {
    id: 10,
    title: "Museum Digital",
    description:
      "A digital museum app with two main access levels: Admin and Visitor. Visitors can freely explore cultural features like traditional dances, customs, musical instruments, and a Regional Cuisine section filled with local recipes, all without needing to log in",
    images: [
      {
        url: "/projects/museum/museum-preview.png",
        alt: "museum Preview 1",
      },
    ],
    technologies: [
      {
        name: "Javascript",
        icon: SiJavascript,
        color: "bg-[#06B6D4]/20",
      },
      {
        name: "Node Js",
        icon: SiNodedotjs,
        color: "bg-[#FF2D20]/20",
      },
      {
        name: "Express Js",
        icon: SiExpress,
        color: "bg-[#FF2D20]/20",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Google Cloud",
        icon: SiGooglecloud,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Java",
        icon: SiOpenjdk,
        color: "bg-[#FF2D20]/20",
      },
      {
        name: "Android",
        icon: SiAndroid,
        color: "bg-[#FF2D20]/20",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Github",
        icon: SiGithub,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20",
      },
    ],
    demo: "",
    type: "Mobile",
  },
  {
    id: 11,
    title: "MateUp",
    description:
      "This project is an application used for women who have difficulty finding make-up recommendations according to their personality and skin type",
    images: [
      {
        url: "/projects/mateup/mateup-preview.png",
        alt: "mateup Preview 1",
      },
      {
        url: "/projects/mateup/mateup-preview2.png",
        alt: "mateup Preview 2",
      },
    ],
    technologies: [
      {
        name: "Android",
        icon: SiAndroid,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Kotlin",
        icon: SiKotlin,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Realm Database",
        icon: SiRealm,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Github",
        icon: SiGithub,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20",
      },
    ],
    demo: "",
    type: "Mobile",
  },
  {
    id: 12,
    title: "Scada Technical Tirtanadi",
    description:
      "This project develops a mobile SCADA system for Tirtanadi Technical, allowing users to monitor and control SCADA operations remotely. The app provides real-time access to data like temperature, pressure, and flow rate, while enabling users to adjust settings and respond to issues, enhancing operational efficiency and proactive maintenance.",
    images: [
      {
        url: "/projects/scada/scada-preview.png",
        alt: "fastfixx Preview 1",
      },
    ],
    technologies: [
      {
        name: "Android",
        icon: SiAndroid,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Kotlin",
        icon: SiKotlin,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Realm Database",
        icon: SiRealm,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "OAuth",
        icon: SiAuth0,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Github",
        icon: SiGithub,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20",
      },
    ],
    demo: "",
    type: "Mobile",
  },
  {
    id: 13,
    title: "Fastfixx",
    description: "",
    images: [
      {
        url: "/projects/fastfixx/mobile/fastfixx-preview.png",
        alt: "fastfixx Preview 1",
      },
      {
        url: "/projects/fastfixx/mobile/fastfixx-preview2.png",
        alt: "fastfixx Preview 2",
      },
      {
        url: "/projects/fastfixx/mobile/fastfixx-preview3.png",
        alt: "fastfixx Preview 3",
      },
    ],
    technologies: [
      {
        name: "Android",
        icon: SiAndroid,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Kotlin",
        icon: SiKotlin,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Javascript",
        icon: SiJavascript,
        color: "bg-[#06B6D4]/20",
      },
      {
        name: "Node Js",
        icon: SiNodedotjs,
        color: "bg-[#FF2D20]/20",
      },
      {
        name: "Express Js",
        icon: SiExpress,
        color: "bg-[#FF2D20]/20",
      },
      {
        name: "React",
        icon: SiReact,
        color: "bg-[#FF2D20]/20",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Github",
        icon: SiGithub,
        color: "bg-[#4479A1]/20",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20",
      },
    ],
    demo: "",
    type: "Mobile",
  },
];
