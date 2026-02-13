import { Navigation } from './Navigation';

interface DesignGalleryProps {
  onNavigate: (page: 'home' | 'designs') => void;
}

const designs = [
  { id: 1, image: 'https://via.placeholder.com/600x400?text=Veneto+by+Flopper+v2' },
  { id: 2, image: 'https://via.placeholder.com/600x400?text=Sonoria' },
  { id: 3, image: 'https://via.placeholder.com/600x400?text=Christmas+the+Boys' },
  { id: 4, image: 'https://via.placeholder.com/600x400?text=Flopper+Banner+v2' },
];

export function DesignGallery({ onNavigate }: DesignGalleryProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1540] via-[#0d061f] to-[#050014] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgzOCwgOTksIDE5NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="scanline"></div>

      <Navigation currentPage="designs" onNavigate={onNavigate} />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 ps2-boot">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#5552F7] to-transparent"></div>
              <h1 className="text-3xl font-bold text-[#5552F7] font-mono">[ DESIGNS ]</h1>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#5552F7] to-transparent"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {designs.map((design, index) => (
              <div
                key={design.id}
                className="ps2-card overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden rounded-lg bg-black/50">
                  <img
                    src={design.image}
                    alt={`Design ${design.id}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
