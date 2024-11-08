//lifting state
function App() {
    const [theme, setTheme] = React.useState('day');
  
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