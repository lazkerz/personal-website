'use client'
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiVite, SiLaravel, SiPhp, SiExpress, SiPostgresql, 
         SiMysql, SiPrisma, SiRedis, SiDocker, SiGithub, SiVisualstudiocode, 
         SiPostman, SiFigma, SiJenkins, SiLinux } from "react-icons/si";

const TechStack = () => {
  const techRows = [
    // Row 1 - Frontend
    [
      { icon: SiReact, name: 'React.js', color: '#61DAFB' },
      { icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
      { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
      { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
      { icon: SiTailwindcss, name: 'TailwindCSS', color: '#38B2AC' },
      { icon: SiVite, name: 'Vite', color: '#646CFF' },
    ],
    // Row 2 - Backend
    [
      { icon: SiLaravel, name: 'Laravel', color: '#FF2D20' },
      { icon: SiPhp, name: 'PHP', color: '#777BB4' },
      { icon: SiExpress, name: 'Express.js', color: '#ffffff' },
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
      { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
      { icon: SiPrisma, name: 'Prisma', color: '#2D3748' },
      { icon: SiRedis, name: 'Redis', color: '#DC382D' },
    ],
    // Row 3 - Tools
    [
      { icon: SiDocker, name: 'Docker', color: '#2496ED' },
      { icon: SiGithub, name: 'GitHub', color: '#ffffff' },
      { icon: SiVisualstudiocode, name: 'VS Code', color: '#007ACC' },
      { icon: SiPostman, name: 'Postman', color: '#FF6C37' },
      { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
      { icon: SiJenkins, name: 'Jenkins', color: '#D24939' },
      { icon: SiLinux, name: 'Linux', color: '#FCC624' },
    ]
  ];

  return (
      <div className="relative flex flex-col gap-4">
        {techRows.map((row, rowIndex) => (
          <div key={rowIndex} className="relative flex overflow-hidden hover:[animation-play-state:paused]">
            {/* Main scroll container - PERUBAHAN DISINI */}
            <div className={`flex ${rowIndex % 2 === 0 ? 'animate-scroll-right' : 'animate-scroll-left'} gap-4 py-4`}>
              {/* Original items */}
              {row.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#252525] transition-colors rounded-full px-4 py-2 min-w-max group"
                >
                  <tech.icon 
                    className="h-5 w-5 transition-transform group-hover:scale-110" 
                    style={{ color: tech.color }} 
                  />
                  <span className="text-sm text-white">{tech.name}</span>
                </div>
              ))}
              
              {/* Duplicate items for seamless scroll */}
              {row.map((tech, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#252525] transition-colors rounded-full px-4 py-2 min-w-max group"
                >
                  <tech.icon 
                    className="h-5 w-5 transition-transform group-hover:scale-110" 
                    style={{ color: tech.color }} 
                  />
                  <span className="text-sm text-white">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
  );
};

export default TechStack;