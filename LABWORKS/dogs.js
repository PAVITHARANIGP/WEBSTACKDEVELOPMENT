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