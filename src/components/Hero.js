"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef(null);
  const [isIOS, setIsIOS] = useState(null);

  // Определяме типа устройство (iOS или не-iOS)
  useEffect(() => {
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setIsIOS(isIOSDevice);
  }, []);

  useEffect(() => {
    if (isIOS === null) return;
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.loop = true;
    video.preload = "auto";
    video.autoplay = true;
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("disablePictureInPicture", "true");

    const playVideo = () => {
      video.play().catch((err) => console.log("Грешка при възпроизвеждане:", err));
    };

    const isAndroid = /android/i.test(navigator.userAgent);
    const eventName = isIOS ? "loadeddata" : (isAndroid ? "canplay" : "loadeddata");
    video.addEventListener(eventName, playVideo);

    let onFirstTouch;
    if (isIOS) {
      onFirstTouch = () => {
        playVideo();
        document.removeEventListener("touchstart", onFirstTouch);
      };
      document.addEventListener("touchstart", onFirstTouch);
    }

    return () => {
      video.removeEventListener(eventName, playVideo);
      if (isIOS && onFirstTouch) {
        document.removeEventListener("touchstart", onFirstTouch);
      }
    };
  }, [isIOS]);

  const scrollToQuiz = () => {
    const quizSection = document.getElementById("quiz");
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isIOS === null) {
    return <div>Зарежда се...</div>;
  }

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        disablePictureInPicture
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        {isIOS ? (
          <source src="/videos/video.mp4" type="video/mp4" />
        ) : (
          <>
            <source src="/videos/video.webm" type="video/webm" />
            <source src="/videos/video.mp4" type="video/mp4" />
          </>
        )}
        Вашият браузър не поддържа видео.
      </video>
      
      {/* Затемняващ слой */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className="bg-black/50 px-4 py-3 rounded-full text-sm uppercase tracking-[0.25em] mb-6">
          SVA Detailing • Варна
        </div>
        <h1 className="text-4xl md:text-5xl font-bold max-w-4xl leading-tight">
          PDR: премахване на вмятини без боядисване
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-3xl">
          Оценка по снимка за 5–10 минути. Често поправяме същия ден. Без шпакловка и
          компромис с заводския лак.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <button
            onClick={scrollToQuiz}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg text-lg font-semibold shadow-lg"
          >
            Оцени по снимка
          </button>
          <a
            href="tel:+359893976715"
            className="px-6 py-3 bg-white/90 text-black rounded-lg text-lg font-semibold hover:bg-white shadow-lg"
          >
            Обади се / Viber / WhatsApp
          </a>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-gray-200">
          <span className="px-3 py-1 border border-white/30 rounded-full">Отстраняване без боядисване</span>
          <span className="px-3 py-1 border border-white/30 rounded-full">Висока ликвидност при продажба</span>
          <span className="px-3 py-1 border border-white/30 rounded-full">Работим по записване</span>
        </div>
      </div>
    </section>
  );
}
