function User(prop){
    return(
       <div>
        <p>{prop.name}</p>
        <p>{prop.job}</p>
       </div>
    );
}

ReactDOM.render((
    <>
    <User name ="Alex" job = "Web Developer" />
    <User name="Lara" job = "Teacher" />
    </>),
    documnet.querySelector("#root"),
);

