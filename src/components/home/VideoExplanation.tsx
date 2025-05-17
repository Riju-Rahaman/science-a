import React from 'react';
import YouTube from 'react-youtube';

const VideoExplanation: React.FC = () => {
  const onReady = (event: any) => {
    const player = event.target;
  };

  return (
    <section className="py-20 bg-deepSpace-lighter text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Understanding <span className="text-blue-400">Quantum Paradoxes</span>
        </h2>
        <p className="text-slate-400 text-lg mb-12 text-center max-w-3xl mx-auto">
          Dive deep into the fascinating world of quantum mechanics and time travel paradoxes through this comprehensive explanation.
        </p>

        {/* Responsive Video Wrapper */}
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-glow max-w-4xl mx-auto">
          <YouTube
            videoId="-13OjGljqFk"
            className="absolute top-0 left-0 w-full h-full"
            iframeClassName="absolute top-0 left-0 w-full h-full"
            opts={{
              width: '100%',
              height: '100%',
              playerVars: {
                autoplay: 0,
                modestbranding: 1,
                rel: 0,
                controls: 1,
                fs: 1,
              },
            }}
            onReady={onReady}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoExplanation;
