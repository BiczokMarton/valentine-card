import catWithFlower from "../assets/cat-flover.webp";

interface ResultViewProps {
  result: "yes" | "no";
  onReset: () => void;
}

export const ResultView = ({ result, onReset }: ResultViewProps) => {
  return (
    <div className="result">
      {result === "yes" ? (
        <>
          <h1>Juhuu! ❤️</h1>
          <h2>Találkozunk a Famousben!</h2>

          <img
            src={catWithFlower}
            alt="Happy"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </>
      ) : (
        <>
          <h2>Oh ne... 😢</h2>
          <img
            src="https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif"
            alt="Sad"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </>
      )}
      <br />
      <button onClick={onReset} style={{ marginTop: "20px" }}>
        Vissza
      </button>
    </div>
  );
};
