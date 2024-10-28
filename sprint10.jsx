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