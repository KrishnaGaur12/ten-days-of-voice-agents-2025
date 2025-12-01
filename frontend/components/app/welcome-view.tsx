import React, { useState } from 'react';
import { Button } from '@/components/livekit/button';

interface WelcomeViewProps {
  startButtonText: string;
  onStartCall: (name: string) => void;
}

export const WelcomeView = React.forwardRef<HTMLDivElement, WelcomeViewProps>(
  ({ startButtonText, onStartCall }, ref) => {
    const [name, setName] = useState('');
    const [started, setStarted] = useState(false);

    async function handleStart() {
      if (!name.trim()) return;
      setStarted(true);
      onStartCall(name.trim());
    }

    return (
      <div ref={ref} className="flex h-full flex-col items-center justify-center bg-transparent overflow-hidden relative">
        {/* Background Effects - Enhanced for Commercial Look */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
        
        {/* Spotlight Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1)_0%,transparent_60%)] pointer-events-none" />

        {!started ? (
          <section className="relative z-10 flex flex-col items-center justify-center text-center space-y-8 p-12 border border-white/10 rounded-3xl bg-black/20 backdrop-blur-md shadow-[0_0_100px_-20px_var(--color-secondary)] transition-all duration-500 hover:bg-black/30 hover:border-white/20 hover:shadow-[0_0_120px_-10px_var(--color-primary)]">
            
            <div className="relative">
              <h1 className="font-serif text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-white/60 drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] animate-in fade-in zoom-in duration-1000">
                IMPROV
                <br />
                <span className="animate-text-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,var(--color-primary),45%,var(--color-secondary),55%,var(--color-primary))] bg-size-[250%_100%] drop-shadow-[0_0_50px_var(--color-secondary)]">
                  BATTLE
                </span>
              </h1>
              <div className="absolute -top-16 -right-16 text-8xl animate-bounce delay-700 drop-shadow-2xl rotate-12 opacity-80">🎭</div>
              <div className="absolute -bottom-10 -left-16 text-8xl animate-bounce delay-300 drop-shadow-2xl -rotate-12 opacity-80">🎤</div>
              <div className="absolute top-1/2 -right-24 text-6xl animate-pulse delay-500 drop-shadow-2xl rotate-45 opacity-60">✨</div>
              <div className="absolute top-0 -left-20 text-6xl animate-pulse delay-1000 drop-shadow-2xl -rotate-45 opacity-60">🎬</div>
            </div>

            <p className="text-white/90 max-w-lg text-2xl md:text-3xl font-medium italic tracking-wide drop-shadow-md">
              "The stage is set. The host is waiting. Are you ready to perform?"
            </p>

            <div className="flex flex-col gap-6 items-center pt-8 w-full max-w-md">
              <div className="w-full relative group">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleStart();
                  }}
                  placeholder="Enter your Stage Name..."
                  className="w-full px-6 py-4 text-xl font-bold text-center bg-black/40 border-2 border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] backdrop-blur-sm"
                />
                <div className="absolute inset-0 rounded-xl bg-linear-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              <Button 
                variant="primary" 
                size="lg" 
                onClick={handleStart}
                disabled={!name.trim()}
                className="w-full text-2xl py-8 font-black tracking-[0.2em] uppercase border-4 border-white/20 bg-linear-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 shadow-[0_0_40px_var(--color-primary)] hover:shadow-[0_0_80px_var(--color-secondary)] transition-all duration-500 hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {startButtonText}
              </Button>
              <p className="text-sm text-accent uppercase tracking-[0.3em] font-bold animate-pulse">
                Press to Enter the Arena
              </p>
            </div>
          </section>
        ) : (
          <div className="text-center text-white text-4xl font-black animate-pulse drop-shadow-[0_0_30px_var(--color-primary)]">
            🔥 PREPARING THE STAGE...
          </div>
        )}

        <div className="fixed bottom-8 left-0 flex w-full items-center justify-center">
          <p className="text-white/30 text-xs uppercase tracking-[0.5em]">
            Powered by LiveKit Agents
          </p>
        </div>
      </div>
    );
  }
);

WelcomeView.displayName = 'WelcomeView';
