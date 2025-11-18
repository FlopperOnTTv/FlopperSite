import { Gamepad2, Cpu, Palette } from 'lucide-react';

interface PS2CardProps {
  icon: 'gamepad' | 'cpu' | 'palette';
  title: string;
  description: string;
  delay: number;
}

export function PS2Card({ icon, title, description, delay }: PS2CardProps) {
  const IconComponent = icon === 'gamepad' ? Gamepad2 : icon === 'cpu' ? Cpu : Palette;

  return (
    <div
      className="ps2-card group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="ps2-card-inner">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-[#5552F7]/10 rounded-lg group-hover:bg-[#5552F7]/20 transition-colors">
            <IconComponent className="w-6 h-6 text-[#5552F7]" />
          </div>
          <h3 className="text-lg font-bold text-[#7774FF]">{title}</h3>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="absolute inset-0 border-2 border-[#5552F7]/0 rounded-lg group-hover:border-[#5552F7]/50 transition-all pointer-events-none"></div>
    </div>
  );
}
