'use client'
import { 
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiReact, SiKotlin, SiAndroid, SiNodedotjs,
  SiExpress, SiGithub, SiPostman, SiFigma,
  SiMysql, SiPostgresql, SiLaravel, SiPhp, SiCodeigniter,
  SiUbuntu
} from "react-icons/si";

const TechStack = () => {
  const techRows = [
    // Row 1 - Frontend & Languages
    [
      { icon: SiLaravel, name: 'Laravel', color: '#3FCF8E' },
      { icon: SiNextdotjs, name: 'Next.js'},
      { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
      { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
      { icon: SiGithub, name: 'Github'},
      { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    ],
    // Row 2 - Tools & Frameworks
    [
      { icon: SiPostman, name: 'Postman', color: '#8DD6F9' },
      { icon: SiExpress, name: 'Express'},
      { icon: SiReact, name: 'React Js', color: '#0081CB' },
      { icon: SiPhp, name: 'Php', color: '#00ADD8' },
      { icon: SiFigma, name: 'Figma', color: '#DC382D' },
      { icon: SiTailwindcss, name: 'TailwindCSS', color: '#38B2AC' },
    ],
    // Row 3 - Backend & Databases
    [
      { icon: SiMysql, name: 'MySQL', color: '#2D3748' },
      { icon: SiPostgresql, name: 'PostgreSql', color: '#00ADD8' },
      { icon: SiKotlin, name: 'Kotlin', color: '#007396' },
      { icon: SiAndroid, name: 'Android', color: '#339933'},
      { icon: SiCodeigniter, name: 'CI', color: '#DC382D' },
      { icon: SiUbuntu, name: 'Ubuntu'},
    ],
  ];

  return (
    <div className="w-full bg-white py-8">    
      <div className="relative flex flex-col gap-4">
        {techRows.map((row, rowIndex) => {
          // Calculate total width of a single set of items
          const itemWidth = 180; // Approximate width of each item including gap
          const totalWidth = row.length * itemWidth;
          
          return (
            <div key={rowIndex} className="relative h-16 overflow-hidden">
              <div 
                className={`flex absolute whitespace-nowrap ${
                  rowIndex === 1 ? 'animate-scroll-reverse' : 'animate-scroll'
                } hover:pause`}
                style={{
                  width: `${totalWidth}px`,
                }}
              >
                {/* Repeat items enough times to ensure no gaps */}
                {[...Array(4)].map((_, duplicateIndex) => (
                  <div 
                    key={duplicateIndex} 
                    className="flex gap-4"
                    style={{
                      paddingLeft: duplicateIndex === 0 ? '0' : '1rem',
                    }}
                  >
                    {row.map((tech, index) => (
                      <div
                        key={`${duplicateIndex}-${index}`}
                        className="inline-flex items-center gap-2 bg-white hover:bg-gray-200 border border-gray-400 shadow shadow-lg transition-colors rounded-full px-4 py-2 group"
                      >
                        <tech.icon 
                          className="h-5 w-5 transition-transform group-hover:scale-110" 
                          style={{ color: tech.color }} 
                        />
                        <span className="text-sm text-gray-700 whitespace-nowrap">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;