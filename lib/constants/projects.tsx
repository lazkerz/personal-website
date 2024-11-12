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
} from "react-icons/si";
import { IconType } from 'react-icons';



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
  type: 'Web' | 'Mobile';
}

export const projects: Project[] = [

  //Project Web
  {
    id: 1,
    title: "Siphani",
    description: "A platform that connects farmers with buyers, simplifying transactions for the sale of agricultural and plantation products",
    images: [
      {
        url: "/projects/siphani/siphani-preview.jpg",
        alt: "Siphani Preview 1"
      },
      {
        url: "/projects/siphani/siphani-preview2.jpg",
        alt: "Siphani Preview 2"
      },
      {
        url: "/projects/siphani/siphani-preview3.jpg",
        alt: "Siphani Preview 3"
      }
    ],
    technologies: [
      {
        name: "React",
        icon: SiReact,
        color: "bg-[#61DAFB]/20"
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "bg-[#3178C6]/20"
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "bg-[#06B6D4]/20"
      },
      {
        name: "PHP",
        icon: SiPhp,
        color: "bg-[#06B6D4]/20"
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "bg-[#4479A1]/20"
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20"
      }
    ],
    demo: "https://siphani.com/",
    type: "Web",
  },
  {
    id: 2,
    title: "Sistem Report Honor Senat Polmed",
    description: "Organized meeting results and attendance records to ensure accurate and timely honor disbursements. Analyzed attendance data and calculated honorarium for university senate members based on meeting participation. Developed an efficient process for data collection and representation",
    images: [
      {
        url: "/projects/senat/senat-preview.png",
        alt: "Senat Preview 1"
      },
      {
        url: "/projects/senat/senat-preview2.jpg",
        alt: "Senat Preview 2"
      },
      {
        url: "/projects/senat/senat-preview3.png",
        alt: "Senat Preview 3"
      }
    ],
    technologies: [
      {
        name: "PHP",
        icon: SiPhp,
        color: "bg-[#06B6D4]/20"
      },
      {
        name: "Laravel",
        icon: SiLaravel,
        color: "bg-[#FF2D20]/20"
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "bg-[#06B6D4]/20"
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "bg-[#4479A1]/20"
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20"
      }
    ],
    demo: "https://senat.polmed.ac.id/",
    type: "Web",
  },
  {
    id: 3,
    title: "SIMKATMAWA",
    description: " Managing the latest data on student achievements, organizing and visualize data to track performance metrics and perform analytics to provide insights",
    images: [
      {
        url: "/projects/simkatmawa/simkatmawa-preview.png",
        alt: "Simkatmawa Preview 1"
      },
      {
        url: "/projects/simkatmawa/simkatmawa-preview2.jpg",
        alt: "Senat Preview 2"
      },
    ],
    technologies: [
      {
        name: "PHP",
        icon: SiPhp,
        color: "bg-[#06B6D4]/20"
      },
      {
        name: "Laravel",
        icon: SiLaravel,
        color: "bg-[#FF2D20]/20"
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "bg-[#06B6D4]/20"
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "bg-[#4479A1]/20"
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20"
      }
    ],
    demo: "",
    type: "Web",
  },
  {
    id: 4,
    title: "Web Pelaporan Satgas Polmed",
    description: "A dedicated platform for reporting incidents of sexual harassment on campus, managed by the Polmed PPKS Task Force. This portal also provides updates on actions and activities undertaken by the task force to ensure a safe and supportive campus environment",
    images: [
      {
        url: "/projects/satgas/satgas-preview.jpg",
        alt: "Satgas Preview 1"
      },
      {
        url: "/projects/satgas/satgas-preview2.jpg",
        alt: "Satgas Preview 2"
      },
      {
        url: "/projects/satgas/satgas-preview2.jpg",
        alt: "Satgas Preview 2"
      },
    ],
    technologies: [
      {
        name: "Javascript",
        icon: SiJavascript,
        color: "bg-[#06B6D4]/20"
      },
      {
        name: "Typescript",
        icon: SiTypescript,
        color: "bg-[#06B6D4]/20"
      },
      {
        name: "Node Js",
        icon: SiNodedotjs,
        color: "bg-[#FF2D20]/20"
      },
      {
        name: "Express Js",
        icon: SiExpress,
        color: "bg-[#FF2D20]/20"
      },
      {
        name: "Next.Js",
        icon: SiNextdotjs,
        color: "bg-[#FF2D20]/20"
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "bg-[#06B6D4]/20"
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "bg-[#4479A1]/20"
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20"
      }
    ],
    demo: "",
    type: "Web",
  },
  {
    id: 5,
    title: "Fastfixx",
    description: "An all-in-one platform for managing workshops and mechanics, designed to streamline service orders and customer interactions. Available on both mobile and web, this platform offers a seamless experience for workshop management and customer bookings.",
    images: [
      {
        url: "/projects/fastfixx/fastfixx-preview.png",
        alt: "fastfixx Preview 1"
      },
      {
        url: "/projects/fastfixx/fastfixx-preview2.png",
        alt: "fastfixx Preview 2"
      },
      {
        url: "/projects/fastfixx/fastfixx-preview3.png",
        alt: "fastfixx Preview 3"
      },
    ],
    technologies: [
      {
        name: "Javascript",
        icon: SiJavascript,
        color: "bg-[#06B6D4]/20"
      },
      {
        name: "Node Js",
        icon: SiNodedotjs,
        color: "bg-[#FF2D20]/20"
      },
      {
        name: "Express Js",
        icon: SiExpress,
        color: "bg-[#FF2D20]/20"
      },
      {
        name: "React",
        icon: SiReact,
        color: "bg-[#FF2D20]/20"
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "bg-[#4479A1]/20"
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20"
      }
    ],
    demo: "",
    type: "Web",
  },
  {
    id: 6,
    title: "KIKI Wedding",
    description: "A comprehensive platform for booking complete wedding packages, connecting you with top vendors for venues, decorations, photography, and more. Find and customize everything you need for your dream wedding in one place",
    images: [
      {
        url: "/projects/wedding/wedding-preview.jpg",
        alt: "fastfixx Preview 1"
      },
      {
        url: "/projects/wedding/wedding-preview2.jpg",
        alt: "fastfixx Preview 2"
      },
      {
        url: "/projects/wedding/wedding-preview3.jpg",
        alt: "fastfixx Preview 3"
      },
    ],
    technologies: [
      {
        name: "Javascript",
        icon: SiJavascript,
        color: "bg-[#06B6D4]/20"
      },
      {
        name: "Node Js",
        icon: SiNodedotjs,
        color: "bg-[#FF2D20]/20"
      },
      {
        name: "Express Js",
        icon: SiExpress,
        color: "bg-[#FF2D20]/20"
      },
      {
        name: "React",
        icon: SiReact,
        color: "bg-[#FF2D20]/20"
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "bg-[#4479A1]/20"
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20"
      }
    ],
    demo: "",
    type: "Web",
  },

 //Project Mobile
 {
  id: 7,
  title: "Museum Digital",
  description: "A digital museum app with two main access levels: Admin and Visitor. Visitors can freely explore cultural features like traditional dances, customs, musical instruments, and a Regional Cuisine section filled with local recipes, all without needing to log in",
  images: [
    {
      url: "/projects/museum/museum-preview.png",
      alt: "museum Preview 1"
    },
  ],
  technologies: [
    {
      name: "Javascript",
      icon: SiJavascript,
      color: "bg-[#06B6D4]/20"
    },
    {
      name: "Node Js",
      icon: SiNodedotjs,
      color: "bg-[#FF2D20]/20"
    },
    {
      name: "Express Js",
      icon: SiExpress,
      color: "bg-[#FF2D20]/20"
    },
    {
      name: "Postman",
      icon: SiPostman,
      color: "bg-[#4479A1]/20"
    },
    {
      name: "Google Cloud",
      icon: SiGooglecloud,
      color: "bg-[#4479A1]/20"
    },
    {
      name: "Java",
      icon: SiOpenjdk,
      color: "bg-[#FF2D20]/20"
    },
    {
      name: "Android",
      icon: SiAndroid,
      color: "bg-[#FF2D20]/20"
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "bg-[#4479A1]/20"
    },
    {
      name: "Github",
      icon: SiGithub,
      color: "bg-[#4479A1]/20"
    },
    {
      name: "Figma",
      icon: SiFigma,
      color: "bg-[#F24E1E]/20"
    }
  ],
  demo: "",
  type: "Mobile",

 },
 {
  id: 8,
  title: "MateUp",
  description: "This project is an application used for women who have difficulty finding make-up recommendations according to their personality and skin type",
  images: [
    {
      url: "/projects/mateup/mateup-preview.png",
      alt: "mateup Preview 1"
    },
    {
      url: "/projects/mateup/mateup-preview2.png",
      alt: "mateup Preview 2"
    },
  ],
  technologies: [
    {
      name: "Android",
      icon: SiAndroid,
      color: "bg-[#4479A1]/20"
    },
    {
      name: "Kotlin",
      icon: SiKotlin,
      color: "bg-[#4479A1]/20"
    },
    {
      name: "Realm Database",
      icon: SiRealm,
      color: "bg-[#4479A1]/20"
    },
    {
      name: "Github",
      icon: SiGithub,
      color: "bg-[#4479A1]/20"
    },
    {
      name: "Figma",
      icon: SiFigma,
      color: "bg-[#F24E1E]/20"
    }
  ],
  demo: "",
  type: "Mobile",

 },
 {
  id: 9,
  title: "Scada Technical Tirtanadi",
  description: "This project develops a mobile SCADA system for Tirtanadi Technical, allowing users to monitor and control SCADA operations remotely. The app provides real-time access to data like temperature, pressure, and flow rate, while enabling users to adjust settings and respond to issues, enhancing operational efficiency and proactive maintenance.",
  images: [
    {
      url: "/projects/scada/scada-preview.png",
      alt: "fastfixx Preview 1"
    },
  ],
  technologies: [
    {
      name: "Android",
      icon: SiAndroid,
      color: "bg-[#4479A1]/20"
    },
    {
      name: "Kotlin",
      icon: SiKotlin,
      color: "bg-[#4479A1]/20"
    },
    {
      name: "Realm Database",
      icon: SiRealm,
      color: "bg-[#4479A1]/20"
    },
    {
      name: "OAuth",
      icon: SiAuth0,
      color: "bg-[#4479A1]/20"
    },
    {
      name: "Github",
      icon: SiGithub,
      color: "bg-[#4479A1]/20"
    },
    {
      name: "Figma",
      icon: SiFigma,
      color: "bg-[#F24E1E]/20"
    }
  ],
  demo: "",
  type: "Mobile",

 },
 {
  id: 10,
  title: "Fastfixx",
  description: "",
  images: [
    {
      url: "/projects/fastfixx/mobile/fastfixx-preview.png",
      alt: "fastfixx Preview 1"
    },
    {
      url: "/projects/fastfixx/mobile/fastfixx-preview2.png",
      alt: "fastfixx Preview 2"
    },
    {
      url: "/projects/fastfixx/mobile/fastfixx-preview3.png",
      alt: "fastfixx Preview 3"
    },
  ],
  technologies: [
    {
      name: "Android",
      icon: SiAndroid,
      color: "bg-[#4479A1]/20"
    },
    {
      name: "Kotlin",
      icon: SiKotlin,
      color: "bg-[#4479A1]/20"
    },
    {
      name: "Javascript",
      icon: SiJavascript,
      color: "bg-[#06B6D4]/20"
    },
    {
      name: "Node Js",
      icon: SiNodedotjs,
      color: "bg-[#FF2D20]/20"
    },
    {
      name: "Express Js",
      icon: SiExpress,
      color: "bg-[#FF2D20]/20"
    },
    {
      name: "React",
      icon: SiReact,
      color: "bg-[#FF2D20]/20"
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "bg-[#4479A1]/20"
    },
    {
      name: "Github",
      icon: SiGithub,
      color: "bg-[#4479A1]/20"
    },
    {
      name: "Figma",
      icon: SiFigma,
      color: "bg-[#F24E1E]/20"
    }
  ],
  demo: "",
  type: "Mobile",

 }

 
  
];
