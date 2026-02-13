import { useState } from 'react';
import { TypingText } from './components/TypingText';
import { CodeWrapper } from './components/CodeWrapper';
import { PS2Card } from './components/PS2Card';
import { Navigation } from './components/Navigation';
import { DesignGallery } from './components/DesignGallery';
import { Terminal } from 'lucide-react';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'designs'>('home');

  if (currentPage === 'designs') {
    return <DesignGallery onNavigate={setCurrentPage} />;
  }

  return (
    <div className="min-h-screen bg-[#000000] text-white overflow-hidden relative">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgxNTAsIDE1MCwgMTUwLCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="scanline"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="mb-12 ps2-boot">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#808080] to-[#5a5a5a] rounded-lg flex items-center justify-center shadow-lg shadow-[#808080]/50 ps2-logo">
              <Terminal className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">
                <CodeWrapper delay={0}>Flopper</CodeWrapper>
              </h1>
              <div className="flex items-center gap-2 text-[#969696] text-sm font-mono">
                <span className="w-2 h-2 bg-[#969696] rounded-full animate-pulse"></span>
                <TypingText
                  text="System Online"
                  delay={100}
                  onComplete={() => setTimeout(() => setShowContent(true), 500)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`max-w-2xl transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#969696] to-transparent"></div>
            <h2 className="text-xl font-bold text-[#969696] font-mono">[ ABOUT ]</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#969696] to-transparent"></div>
          </div>

          <div className="ps2-panel p-6 mb-8">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-[#969696] font-mono text-sm mt-1">{'>'}_</span>
              <p className="text-gray-300 leading-relaxed">
                Hey there! I'm a passionate console modder and designer who lives for breathing new life into classic gaming hardware.
                There's something special about taking a PS2, PSP, Wii, DS, and modern consoles like PS3 and PS4, then unlocking their full potential through custom firmware, hardware mods, and creative enhancements.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#969696] font-mono text-sm mt-1">{'>'}_</span>
              <p className="text-gray-300 leading-relaxed">
                When I'm not tinkering with hardware, I'm crafting beautiful user interfaces and experiences.
                Design isn't just what it looks like—it's how it works, and I love making both aspects shine.
              </p>
            </div>
          </div>
        </div>

        <div className={`transition-all duration-700 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent"></div>
            <h2 className="text-xl font-bold text-[#333333] font-mono">[ SPECIALTIES ]</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <PS2Card
              icon="gamepad"
              title="Console Modding"
              description="Expert in modding PS2, PS3, PS4, PSP, Wii, DS, and various retro consoles. Custom firmware, hardware modifications, and system optimizations."
              delay={0}
            />

            <PS2Card
              icon="cpu"
              title="Hardware Hacking"
              description="Deep understanding of console architecture, chip modding, region unlocking, and pushing hardware beyond factory limitations."
              delay={200}
            />

            <PS2Card
              icon="palette"
              title="Design Mastery"
              description="Creating beautiful, functional interfaces and experiences. Combining technical skills with aesthetic excellence."
              delay={400}
            />

            <PS2Card
              icon="zap"
              title="Modern Console Expertise"
              description="Specializing in PS3 and PS4 modding, including CFW installation, homebrew development, and advanced jailbreak techniques."
              delay={600}
            />
          </div>
        </div>

        <div className={`transition-all duration-700 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex justify-center mb-6">
            <img
              src="https://lanyard.cnrad.dev/api/1079429643070873740?hideDecoration=true&hideStatus=true&hideBadges=true&theme=dark"
              alt="Discord Status"
              className="rounded-lg max-w-sm w-full"
            />
          </div>

          <div className="ps2-panel p-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <span className="text-green-400">●</span>
              <span>Memory Card (8MB) in slot 1</span>
              <span className="ml-auto text-[#969696]">Ready to mod</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
