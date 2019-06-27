const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

// YOUR CODE HERE
function slapOneToyOnTheDom(toy){
  const toyCollection = document.getElementById("toy-collection");
  const toyDiv  = document.createElement("div");
  toyDiv.classList.add("card");
  toyDiv.innerHTML=
  `<img src="${toy.image}" class="toy-avatar">
  <h2 class="toy-header">${toy.name} </h2>
  <button type="button" class="like-btn"> Like <3 </button>
  <p>${toy.likes} Likes </p>
  `;
  document.getElementById("toy-collection").append(toyDiv);
};



function showToys(toyJson){

  toyJson.forEach(function(toy){
    const toyDiv  = document.createElement("div");
    // const html = `<img src="${toy.image}" />`;
    toyDiv.classList.add("card");
    toyDiv.innerHTML=
    `<img src="${toy.image}" class="toy-avatar">
    <h2 class="toy-header">${toy.name} </h2>
    <button type="button" class="like-btn"> Like <3 </button>
    <p>${toy.likes} Likes </p>
    `;
    document.getElementById("toy-collection").append(toyDiv);
  });
};


document.addEventListener("DOMContentLoaded", function(){
  fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(showToys);
});

//add new toy

const form = document.querySelector(".add-toy-form");
// const toyCollection = document.getElementById("toy-collection");
// const div = document.querySelector('#toys')

form.addEventListener(
  "submit",
  function(event){
  event.preventDefault();
  fetch("http://localhost:3000/toys",
    { method:"POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
      body: JSON.stringify(
        { "name":form.name.value,
          "image": form.image.value
        })
      })
    .then(response => response.json())
    .then(slapOneToyOnTheDom);
  });



addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})


// OR HERE!
