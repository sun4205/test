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
  