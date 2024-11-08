//lifting state
function App() {
  const [theme, setTheme] = React.useState("day");

  function handleThemeChange(e) {
    setTheme(e.target.value);
  }

  return (
    <div className={theme}>
      <h2>Welcome</h2>
      <ThemeSelect onChange={handleThemeChange} />
    </div>
  );
}

function ThemeSelect(props) {
  return (
    <select onChange={props.onChange}>
      <option value="day">Day</option>
      <option value="night">Night</option>
    </select>
  );
}

//creating adding context

// translationContext.js
export const TranslationContext = React.createContext();

export const translations = {
  en: {
    greeting: "Hello World",
  },
  ru: {
    greeting: "Привет, мир!",
  },
};

// App.js

// import the context object
import { TranslationContext, translations } from "./translationContext";

function App() {
  const [lang, setLang] = React.useState("en");

  return (
    <TranslationContext.Provider value={translations[lang]}>
      <Main />
    </TranslationContext.Provider>
  );
}
