import { useContext, createContext, useState } from "react";

const Font = {
  primary: {
    value: "serif",
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
          style={{ margin: 13, fontSize: 20, backgroundColor: "dodgerblue",  color: "white"}}
          onClick={() =>
            setValuefont(
              valuefont === Font.primary ? Font.secondary : Font.primary
            )
          }
        >
          Change
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
      style={{ fontSize: 50, fontFamily: font.value, margin: 13 }}
    >
      Sheeeeeeeeeeesh
    </p>
  );
}
