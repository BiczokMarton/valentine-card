import "./StartScreen.css";

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <div className="start-screen">
      <button onClick={onStart} className="start-button">
        Kattints az indításhoz! 🎵
      </button>
    </div>
  );
};