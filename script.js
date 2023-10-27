var artist = `http://theaudiodb.com/api/v1/json/2/album.php?i=112024`;
console.log(artist);


fetch(artist)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    return data;
  });





document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const artistInput = urlParams.get("artist");

  if (artistInput) {
    // document.getElementById("artists-input").value = artistInput;

    performSearch(artistInput);
  }

  document
    .getElementById("search-button")
    .addEventListener("click", function () {
      const artistInput = document.getElementById("artists-input").value;

      window.location.href = `page2.html?artist=${encodeURIComponent(
        artistInput
      )}`;
    });

 
function performSearch(artistInput) {
    
    const searchQuery = `${artistInput} + _(musician)`;
    // const apiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchQuery}&format=json&origin=*`;
    // const section = "2"; // Specify the section you want
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=parse&page=${searchQuery}&format=json&origin=*`;
  
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
       
        displaySearchResults(data);
        console.log(data);
        console.log(data.parse.sections[1]);
        document.getElementById("wikibio").innerHTML = data.parse.anchors[0];
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }
  

  function displaySearchResults(data) {
    const wikiBioElement = document.getElementById("wikibio");
  
    // Clear previous search results
    // wikiBioElement.innerHTML = "";
  
    // // Extract and display the artist biography
    // const searchTerm = data[0];
    // const searchBiography = data[2][0]; // The artist biography is in the first entry of the data[2] array
  
    // // Set the content of the "wikibio" element
    // wikiBioElement.innerHTML = `<strong>${searchTerm}</strong>: ${searchBiography}`;
  }
});