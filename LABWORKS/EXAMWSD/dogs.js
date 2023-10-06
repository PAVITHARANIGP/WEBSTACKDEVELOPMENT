<<<<<<< HEAD
window.onload=()=>{
const dogContainer = document.getElementById('dog-container');

fetch('dogs.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(dog => {
      const dogDetails = document.createElement('div');
      dogDetails.classList.add('dog-details');

      const dogBreed = document.createElement('div');
      dogBreed.classList.add('dog-breed');
      dogBreed.innerText = `Breed: ${dog.breed}`;

      const dogColour = document.createElement('div');
      dogColour.classList.add('dog-Colour');
      dogColour.innerText = dog.Colour;

    

      const dogCountry = document.createElement('div');
      dogCountry.classList.add('dog-Country');
      dogCountry.innerText = dog.Country;


      
      dogDetails.appendChild(dogBreed);
      dogDetails.appendChild(dogColour);
      dogDetails.appendChild(dogCountry);
    
      dogContainer.appendChild(dogDetails);
    });
  })
  .catch(error => {
    console.log(error);
  });

}
=======
const dogContainer = document.getElementById('dog-container');

fetch('dogs.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(dog => {
      const dogDetails = document.createElement('div');
      dogDetails.classList.add('dog-details');

      const dogColour = document.createElement('div');
      dogColour.classList.add('dog-Colour');
      dogColour.innerText = dog.dogColour;

      const dogBreed = document.createElement('div');
      dogBreed.classList.add('dog-breed');
      dogBreed.innerText = `Breed: ${dog.breed}`;

      
      dogDetails.appendChild(dogBreed);
      dogDetails.appendChild(dogColour);
      dogDetails.appendChild(dogCountry);
      

      dogContainer.appendChild(dogDetails);
    });
  })
  .catch(error => {
    console.log(error);
  });
>>>>>>> 9e65785162592f2c180b74c842789233d7e96f80
