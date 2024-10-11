fetch("https://example.com")
  .then((res) => {
    return res.json(); 
  })
  .then((data) => {
    console.log(data.user.name); 
  })
  .catch((err) => {
    console.error("Error. Request failed");
  });

  fetch("https://example.com", {
    method: "POST",
    body: JSON.stringify({
      name: "Paul",
      age: 30
    })
  });