import { useContext, createContext, useState } from "react";

const Font = {
  primary: {
    value: "sans-serif",
  },
  secondary: {
    value: "monospace",
  },
};

const FontContext = createContext();

export default function GantiFont() {
  const [valuefont, setValuefont] = useState(Font.primary);

  return (
    <FontContext.Provider value={valuefont}>
      <div className="contentWrapper">
        <Text />
        <button
          className="Button"
          onClick={() =>
            setValuefont(
              valuefont === Font.primary ? Font.secondary : Font.primary
            )
          }
        >
          change
        </button>
      </div>
    </FontContext.Provider>
  );
}

function Text(props) {
  const font = useContext(FontContext);
  return (
    <p
      className="titleContext"
      style={{ fontSize: 50, fontFamily: font.value }}
    >
      Halo gais
    </p>
  );
}
