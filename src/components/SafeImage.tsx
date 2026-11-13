import { useState } from 'react';
import { Server } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export default function SafeImage({
  src,
  alt,
  className = '',
  fallbackLabel = 'MZT Services Infrastructure',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#1E3A8A] text-white/90 p-6 ${className}`}
      >
        <Server className="w-8 h-8 text-blue-300 mb-2" aria-hidden="true" />
        <span className="text-xs font-medium tracking-wide text-slate-200 text-center">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
