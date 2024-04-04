// script.js
document.getElementById('shoeForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get user input
    var shoeType = document.getElementById('shoeType').value;
    var shoeSize = document.getElementById('shoeSize').value;
  
    // Simulate fetching data based on user input (replace with actual data fetching)
    var shoes = getShoes(shoeType, shoeSize);
  
    // Display results
    displayResults(shoes);
  });
  
  function getShoes(type, size) {
    // Simulated data based on user input (replace with actual data)
    var shoes = [
      { name: 'Casual Shoes', type: 'Casual', size: 'All sizes' },
      { name: 'Running Shoes', type: 'Running', size: 'All sizes' },
      { name: 'Formal Shoes', type: 'Formal', size: 'All sizes' }
    ];
  
    // Filter shoes based on user input
    return shoes.filter(function(shoe) {
      return shoe.type === type && (shoe.size === size || shoe.size === 'All sizes');
    });
  }
  
  function displayResults(shoes) {
    var resultsDiv = document.getElementById('shoeResults');
    resultsDiv.innerHTML = '';
  
    if (shoes.length > 0) {
      var resultHTML = '<h3>Available Shoes</h3><ul>';
      shoes.forEach(function(shoe) {
        resultHTML += '<li>' + shoe.name + ' - ' + shoe.size + '</li>';
      });
      resultHTML += '</ul>';
      resultsDiv.innerHTML = resultHTML;
      resultsDiv.style.display = 'block';
    } else {
      resultsDiv.innerHTML = '<p>No shoes found matching your criteria.</p>';
      resultsDiv.style.display = 'block';
    }
  }
  