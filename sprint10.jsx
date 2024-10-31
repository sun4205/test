const { func } = require("prop-types");

reactDom.render((
    <h2>
        Can I stay here?
    </h2>
),document.querySelector("#root")
    
);

reactDom.render((
<div>
{isDaylight ? (
    <h2>Good Morning!</h2>
):(
    <h2>Good Evening!</h2>
)}
</div>
),document.querySelector("#root"));

reactDom.render((
    <>
    {isLunchTime && <h2>Time for Lunch!</h2>}
    </>
),document.querySelector("#root"));

reactDom.render((
    <>
    {isDaylight && renderLightTheme()}
    </>
),document.querySelector("#root"));

reactDom.render((
    <>
    {(isSummer && isSunny)? (
        <h2>It is Wonderful Day!</h2>
    ): (
        <h2>It is Ordinary Day!</h2>
    )}
    </>
),document.querySelector("#root"));

function handleKeyUp(e) {
    document.getElementById('title').innerText = e.target.value;
  }
  
  function handleClick(e) {
    document.getElementById('title').innerText += ' ' + e.target.textContent;
  }
  
  function handleMouseEnter(e) {
    e.target.classList.add('hover');
  }
  
  function handleMouseLeave(e) {
    e.target.classList.remove('hover');
  }
  
  function handleMouseDown(e) {
    e.target.classList.add('active');
  }
  
  function handleMouseUp(e) {
    e.target.classList.remove('active');
  }
  
  ReactDOM.render((
    <div>
      <input type="text" onKeyUp = {handleKeyUp}/>
      <button
    onClick={handleClick}
    onMouseEnter = {handleMouseEnter}
    onMouseLeave = {handleMouseLeave}
    onMouseDown = {handleMouseDown}
    onMouseUp = {handleMouseUp}>🤩</button>
      <button
      
    onClick={handleClick}
    onMouseEnter = {handleMouseEnter}
    onMouseLeave = {handleMouseLeave}
    onMouseDown = {handleMouseDown}
    onMouseUp = {handleMouseUp}>🤯</button>
      <button
        
    onClick={handleClick}
    onMouseEnter = {handleMouseEnter}
    onMouseLeave = {handleMouseLeave}
    onMouseDown = {handleMouseDown}
    onMouseUp = {handleMouseUp}>🤪</button>
    </div>
  ), document.querySelector('#root'));

  function Animal(props){
    return(
        <div className="animal">
      <div className="icon">{props.icon}</div>
      <div className="info">
        <h3>{props.name}</h3>
        <span>{props.height}</span>
      </div>
    </div>
    );
  }

  reactDom.render(
    <>
    <h2>Africa</h2>
    <Animal name="Giraffe" icon="🦒" height="17 feet"/>
    <Animal name="Hedgehog" icon="🦔" height="6 inches" />
    <Animal name="Skunk" icon="🦨" height="7 inches" />
    </>,document.querySelector("#root")
  );

  class Switch extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isActive: this.props.isActive,
      };
    }
  
    handleClick = () => {
      this.setState({ isActive: !this.state.isActive });
    };
  
    render() {
     
      const className = `switch ${this.props.color} ${this.state.isActive ? 'on' : 'off'}`;
  
      return (
        <div className={className}>
          <button className="img" onClick={this.handleClick} />
          <h3>{this.props.title}</h3>
        </div>
      );
    }
  }
  
  ReactDOM.render((
    <>
      <Switch title="Happy" color="blue" isActive={true} />
      <Switch title="Love" color="orange" isActive={false} />
      <Switch title="Taco" color="green" isActive={false} />
    </>
  ), document.querySelector('#root'));

  function Switch(props){
    const [isActive, SetIsActive] = React.useState(false);
    function handleClick(){
        SetIsActive(!isActive);
    }
    const className = `switch ${props.color} ${isActive ?'on' :'off'}`;

    return (
        <div className = {className}>
            <button className = 'img' onClick = {handleClick} />
            <h2>{props.title}</h2>
        </div>
    );
  }

  reactDom.render((
    <Switch title='Happy' color='blue' isActive = {false} />
  ),document.querySelector('#root'));
  
  function goodDeeds(){
    const [deeds,setDeeds] = React.useState([]);

    function handleAddTask(e){
        setDeeds([...deeds,input.value]);
        input.value = '';
    }

    return(
        <>
        <h3>My Good Deeds</h3>
        <input type= 'text' />
        <button onclick ={handleAddTask} >+</button>
        <ul>
        {deeds.map((deed, i) => (
          <li key={i}>{deed}</li>
        ))}
        </ul>
        </>
    );
  }

  ReactDOM.render((
    <goodDeeds />
  ),document.querySelector('#root'));

  function toggleBackground(shouldShow) {
    document.body.classList.toggle('with-bg', shouldShow);
  }
  
  function Beautifier() {
    const [isBeautiful, setIsBeautiful] = React.useState(false);
  
    React.useEffect(()=>{
      toggleBackground(isBeautiful);
    }
     
    );
  
    function handleChange() {
      setIsBeautiful(!isBeautiful);
    }
  
    return (
      <label>
        <input type="checkbox" onChange={handleChange} />
        — Enable beautiful background
      </label>
    );
  }
  
  ReactDOM.render((
    <Beautifier />
  ), document.querySelector('#root'));

  function App() {
    const [isCustomCursor, setIsCustomCursor] = React.useState();
  
    function handleChange() {
      setIsCustomCursor(!isCustomCursor);
    }
  
    return (
      <>
        <label>
          <input type="checkbox" onChange={handleChange}/>
          — Enable neon cursor
        </label>
        {isCustomCursor && <NeonCursor/>}
      </>
    );
  }
  
  function NeonCursor() {
    const [position, setPosition] = React.useState({ top: 0, left: 0 });
  
    React.useEffect(() => {
      document.addEventListener('mousemove', handleMouseMove);
      document.documentElement.classList.add('no-cursor');
  
      return () => {
        document.documentElement.classList.remove('no-cursor');
        document.removeEventListener('mousemove', handleMouseMove);
      };
    });
  
    function handleMouseMove(e) {
      setPosition({
        top: e.pageY,
        left: e.pageX,
      });
    }
  
    return (
      <img
        src="https://practicum-content.s3.us-west-1.amazonaws.com/web-code/react/moved_cursor.svg"
        width={30}
        style={{
          position: 'absolute',
          top: position.top,
          left: position.left,
          pointerEvents: 'none',
        }}
      />
    );
  }
  
  ReactDOM.render(<App/>, document.querySelector('#root'));
  
  function Animal(type, phrase) {
    this.type = type;
    this.phrase = phrase;
  }

Animal.prototype.say = function() {
  console.log(`The ${this.type} goes ${this.phrase} sound here`);
}
  
  
  const fox = new Animal('fox', 'woopwoopwoop');
  const tRex = new Animal('T-rex', 'RAWR');
  
  fox.say(); 
  tRex.say(); 