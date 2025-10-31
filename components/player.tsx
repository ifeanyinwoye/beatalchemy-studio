"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { X, Play, Pause } from "lucide-react";

interface PlayerProps {
  beat: {
    name: string;
    genre: string;
    bpm: number;
    audio: string;
  };
  onClose: () => void;
}

export default function Player({ beat, onClose }: PlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (audio) setProgress(audio.currentTime);
    };

    const handleLoaded = () => {
      if (audio) setDuration(audio.duration || 0);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoaded);
    audio.play().catch(() => setIsPlaying(false));

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoaded);
    };
  }, [beat]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 60, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-[600px] bg-gradient-to-r from-[#0a0018] via-[#130024] to-[#0a0018] border border-white/10 rounded-2xl shadow-xl p-5 flex flex-col text-white z-50"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <h2 className="text-xl font-bold">{beat.name}</h2>
          <p className="text-sm text-gray-400">
            {beat.genre} • {beat.bpm} BPM
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X size={22} />
        </button>
      </div>

      {/* Player Controls Row */}
      <div className="flex items-center gap-4">
        {/* ▶️ / ⏸ Icon */}
        <button
          onClick={togglePlay}
          className="p-2 mb-4 rounded-full bg-gradient-to-r from-[#7d00ff] to-[#00e1ff] hover:opacity-90 transition-all"
        >
          {isPlaying ? (
            <Pause size={18} className="text-white" />
          ) : (
            <Play size={18} className="text-white" />
          )}
        </button>

        {/* Progress + Duration */}
        <div className="flex-1">
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-2">
            <motion.div
              className="h-full bg-gradient-to-r from-[#7d00ff] to-[#00e1ff]"
              style={{
                width: `${(progress / duration) * 100 || 0}%`,
              }}
            />
          </div>

          <div className="flex justify-between text-xs text-gray-400">
            <span>{formatTime(progress)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={beat.audio} />
    </motion.div>
  );
}
