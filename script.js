function findNearbyProperties() {
  const resultDiv = document.getElementById('propertyResults');
  resultDiv.innerHTML = "<p class='text-center text-light'>Finding properties near you...</p>";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // Mock property data
      const properties = [
        {
          name: "Sunshine Apartments",
          lat: lat + 0.01,
          lon: lon + 0.01
        },
        {
          name: "Green Villa",
          lat: lat - 0.005,
          lon: lon + 0.002
        }
      ];

      let output = `<h4 class="text-primary">Properties Near You</h4><ul class="list-group">`;
      properties.forEach(prop => {
        const mapsLink = `https://www.google.com/maps?q=${prop.lat},${prop.lon}`;
        output += `<li class="list-group-item bg-dark text-white d-flex justify-content-between align-items-center">
                    ${prop.name}
                    <a href="${mapsLink}" target="_blank" class="btn btn-sm btn-outline-info">View on Map</a>
                  </li>`;
      });
      output += `</ul>`;
      resultDiv.innerHTML = output;
    }, error => {
      resultDiv.innerHTML = "<p class='text-danger'>Location access denied or unavailable.</p>";
    });
  } else {
    resultDiv.innerHTML = "<p class='text-danger'>Geolocation not supported by your browser.</p>";
  }
}
function findNearbyProperties() {
  const resultDiv = document.getElementById('propertyResults');
  resultDiv.innerHTML = "<p class='text-center text-light'>Finding properties near you...</p>";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // Mock property data
      const properties = [
        {
          name: "Sunshine Apartments",
          lat: lat + 0.01,
          lon: lon + 0.01
        },
        {
          name: "vinods Apartments",
          lat: lat + 0.03,
          lon: lon + 0.06
        },
        {
          name: "Green Villa",
          lat: lat - 0.005,
          lon: lon + 0.002
        }
      ];

      let output = `<h4 class="text-primary">Properties Near You</h4><ul class="list-group">`;
      properties.forEach(prop => {
        const mapsLink = `https://www.google.com/maps?q=${prop.lat},${prop.lon}`;
        output += `<li class="list-group-item bg-dark text-danger d-flex justify-content-between align-items-center">
                    ${prop.name}
                    <a href="${mapsLink}" target="_blank" class="btn btn-sm btn-outline-info">View on Map</a>
                  </li>`;
      });
      output += `</ul>`;
      resultDiv.innerHTML = output;
    }, error => {
      resultDiv.innerHTML = "<p class='text-danger'>Location access denied or unavailable.</p>";
    });
  } else {
    resultDiv.innerHTML = "<p class='text-danger'>Geolocation not supported by your browser.</p>";
  }
}
