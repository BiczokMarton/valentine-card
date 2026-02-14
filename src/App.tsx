import { useState, useRef, type SyntheticEvent } from "react";
import "./App.css";
import { levels } from "./data/levels";
import { ReactionModal } from "./components/ReactionModal";
import { ValentineCard } from "./components/ValentineCard";
import { ResultView } from "./components/ResultView";
import { HeartBackground } from "./components/HeartBackground";
import { StartScreen } from "./components/StartScreen";
import valentine2 from "./assets/valentine2.gif";
import music from "./assets/musica-romantica.mp3"


export default function App() {
  const [started, setStarted] = useState(false);
  const [showResult, setShowResult] = useState<"yes" | "no" | null>(null);
  const [mainCardImage, setMainCardImage] = useState<string>(valentine2);
  const [noButtonStyle, setNoButtonStyle] = useState<React.CSSProperties>({});
  const [hoverCounter, setHoverCounter] = useState<number>(0);
  const [modalContent, setModalContent] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleNoHover = (event: SyntheticEvent<HTMLButtonElement>) => {
    const nextCount = hoverCounter + 1;
    setHoverCounter(nextCount);
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    if (!noButtonStyle.position) {
      const rect = event.currentTarget.getBoundingClientRect();
      setNoButtonStyle({
        position: "fixed",
        left: `${rect.left}px`,
        top: `${rect.top}px`,
      });
      setTimeout(() => {
        setNoButtonStyle({ position: "fixed", left: `${x}px`, top: `${y}px` });
      }, 10);
    } else {
      setNoButtonStyle({ position: "fixed", left: `${x}px`, top: `${y}px` });
    }

    const currentLevel = levels.find((l) => l.count === nextCount);
    if (currentLevel) {
      if (currentLevel.image) {
        if (currentLevel.replaceMainImage) {
          setMainCardImage(currentLevel.image);
        }
        setModalContent(currentLevel.image);
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      const audio = new Audio(currentLevel.sound);
      audio.play().catch((e) => console.log("Audio lejátszási hiba:", e));
      timerRef.current = setTimeout(() => {
        setModalContent(null);
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      }, currentLevel.duration);
    }
  };

  const handleYes = () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      const audio = new Audio(music);
      audio.play().catch((e) => console.log("Audio lejátszási hiba:", e));
      setShowResult("yes");
  };


  if (!started) {
    return <StartScreen onStart={() => setStarted(true)} />;
  }

  return (
    <div className="container">
      <HeartBackground />
      <ReactionModal content={modalContent} />
      {showResult === null ? (
        <ValentineCard
          imageSrc={mainCardImage}
          onYes={handleYes}
          onNoHover={handleNoHover}
          noButtonStyle={noButtonStyle}
          hoverCounter={hoverCounter}
        />
      ) : (
        <ResultView
          result={showResult}
          onReset={() => {
            setShowResult(null);
            setNoButtonStyle({});
            setHoverCounter(0);
            setMainCardImage(valentine2);
          }}
        />
      )}
    </div>
  );
}
