console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {
    // Challenge 1
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const dogImageContainer = document.getElementById('dog-image-container');
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          dogImageContainer.appendChild(img);
        });
      })
      .catch(error => console.error('Error fetching dog images:', error));
  
    // Challenge 2
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const dogBreedsList = document.getElementById('dog-breeds');
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          dogBreedsList.appendChild(li);
        });
      })
      .catch(error => console.error('Error fetching dog breeds:', error));
  
    // Challenge 3
    document.getElementById('dog-breeds').addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'blue'; // Change color to blue (you can use any color)
      }
    });
  
    // Challenge 4
    document.getElementById('breed-dropdown').addEventListener('change', function(event) {
      const selectedLetter = event.target.value;
      const breedListItems = document.querySelectorAll('#dog-breeds li');
      breedListItems.forEach(item => {
        if (item.textContent.startsWith(selectedLetter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });