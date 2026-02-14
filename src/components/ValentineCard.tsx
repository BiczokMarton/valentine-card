import { type CSSProperties, type SyntheticEvent } from "react";

interface ValentineCardProps {
  imageSrc: string;
  onYes: () => void;
  onNoHover: (event: SyntheticEvent<HTMLButtonElement>) => void;
  noButtonStyle: CSSProperties;
  hoverCounter: number;
}

export const ValentineCard = ({
  imageSrc,
  onYes,
  onNoHover,
  noButtonStyle,
  hoverCounter,
}: ValentineCardProps) => {
  return (
    <>
      <img
        src={imageSrc}
        alt="Kép"
        style={{
          maxWidth: "300px",
          marginBottom: "20px",
          borderRadius: "10px",
        }}
      />
      <h1>Eljössz velem randizni?</h1>
      <div className="card">
        <button
          onClick={onYes}
          style={{ marginRight: "10px", fontSize: "1.2em" }}
        >
          Igen
        </button>
        {hoverCounter < 12 && (
          <button
            style={{
              ...noButtonStyle,
              fontSize: "1.2em",
              transition: "all 0.3s ease",
              outline: "none",
            }}
            onMouseEnter={onNoHover}
            onTouchStart={onNoHover}
            onClick={onNoHover}
          >
            Nem
          </button>
        )}
      </div>
    </>
  );
};
