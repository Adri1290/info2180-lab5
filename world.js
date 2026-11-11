
document.addEventListener("DOMContentLoaded", function () {

    // Get the HTML elements
    const lookupButton = document.getElementById("lookup");
    const countryInput = document.getElementById("country");
    const resultDiv = document.getElementById("result");
    const lookupCitiesButton = document.getElementById("lookup-cities");

    // Listen for clicks on the Lookup button
    lookupButton.addEventListener("click", function () {

        // Get the country entered by the user
        const country = countryInput.value;

        // Send an AJAX request to PHP
        fetch("world.php?country=" + encodeURIComponent(country))

            .then(response => response.text())

            .then(data => {
                // Display the returned information
                resultDiv.innerHTML = data;
            })

            .catch(error => {
                resultDiv.textContent = "An error occurred while searching.";
                console.error(error);
            });

    });

lookupCitiesButton.addEventListener("click", function () {

    const country = countryInput.value;

    fetch("world.php?country=" + encodeURIComponent(country) + "&lookup=cities")

        .then(response => response.text())

        .then(data => {
            resultDiv.innerHTML = data;
        })

        .catch(error => {
            resultDiv.textContent = "An error occurred while searching.";
            console.error(error);
        });

});


});
