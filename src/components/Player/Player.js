import React, { useEffect, useRef } from "react";

const YouTubePlayer = ({ videoId, isActive, setIsPlay }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  // Инициализация плеера YouTube при первом рендере
  useEffect(() => {
    const initYouTubePlayer = () => {
      playerRef.current = new window.YT.Player(videoRef.current, {
        videoId: videoId,
        playerVars: {
          autoplay: 0, // Отключаем автозапуск
          controls: 1, // Включаем элементы управления (например, кнопки воспроизведения)
          rel: 0, // Отключаем показ рекомендованных видео
        },
        events: {
          onReady: handlePlayerReady,
          onStateChange: handlePlayerStateChange,
        },
      });
    };

    const handlePlayerReady = (event) => {
      if (!isActive) {
        event.target.pauseVideo();
      }
    };

    const handlePlayerStateChange = (event) => {
      if (event.data === window.YT.PlayerState.PLAYING) {
        setIsPlay(true); // Видео запущено
      } else {
        setIsPlay(false); // Видео остановлено или на паузе
      }
    };

    // Загрузка YouTube IFrame API
    const loadYouTubeAPI = () => {
      if (!window.YT) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
        window.onYouTubeIframeAPIReady = initYouTubePlayer;
      } else {
        initYouTubePlayer();
      }
    };

    loadYouTubeAPI();

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId, isActive]);

  // Управление воспроизведением в зависимости от состояния карточки
  useEffect(() => {
    if (playerRef.current) {
      if (!isActive) {
        playerRef.current.pauseVideo();
      }
    }
  }, [isActive]);

  return (
    <div>
      <div ref={videoRef} style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default YouTubePlayer;
