fetch("https://example.com/users",{
    method : "post",
    headers : {
        "Content-Type": "application/json"
    },
    body : JSON.stringify({
        username : "authur"
    })
    
});

fetch("https://example.com")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error("Error. The request failed");
  });

  const songs = [
    {
      title: "ALOHAnet",
      artist: "Palmbomen II"
    },
    {
      title: "The Other Stranger",
      artist: "Doxa Sinistra"
    },
    {
      title: "Ariadna",
      artist: "Kedr Livansky"
    }
  ];

  const songJson = JASON.stringify(songs);
  console.log(songJson);

  const songsObject = JSON.parse(songsJSON);

console.log(typeof songsObject); 
console.log(songsObject[0].title);
const user = {
    name: "Paul",
    age: 30,
    hasDog: true,
    dog: {
      name: "Doge",
      age: 6
    }
  };
  
  const userDeepCopy = JSON.parse(JSON.stringify(user));
  
  console.log(user === userDeepCopy); 
  console.log(user.dog === userDeepCopy.dog); 
  console.log(user.name === userDeepCopy.name); 
  console.log(user.dog.name === userDeepCopy.dog.name); 
  