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

  fetch("https://example.com", {
    method:"POST",
    body:JASON.stringify({
        name:"paul",
        age:30
    })
  })

  function createPostMarkup(post){
    return 
    `<div class="post>
    <p class="header__title>${post.title}</p>
    <p class="header__text>${post.body}</>
    
    `;
  }

  function addPostToDom(container,markup){
    container.addAdjacentHTML("afterbegin",markup);
  }

  function getPosts(){
    return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((posts)=>{
        posts.forEach((post)=>{
            addPostToDom(
                document.querySelector(".container"),
                createPostMarkup(post)
            );
        });
    });
  }

  getPosts();

  const quoteElement = document.querySelector("div.quote");

fetch("https://se-quotes-api.onrender.com/v1/quotes/random")
    .then((res) => {
    if (res.ok) {
      return res.json();
    }
    
      return Promise.reject(`Something went wrong: ${res.status}`);
  })
  .then((data) => {
    quoteElement.textContent = data.quote;
  })
  .catch((err) => {
    console.error(err); 
  });

  