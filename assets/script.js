document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
        .then(response => response.json())
        .then(dataArray => {
            const dataDisplay = document.getElementById("dataDisplay");

            dataArray.forEach(data => {
                // Create a container for each item
                const container = document.createElement("div");

                const logoElement = document.createElement("img");
                logoElement.src = data.logo;

                const nameElement = document.createElement("h3");
                nameElement.textContent = data.name;

                const descriptionElement = document.createElement("p");
                descriptionElement.textContent = data.description;

                // Append elements to the container
                container.appendChild(logoElement);
                container.appendChild(nameElement);
                container.appendChild(descriptionElement);

                // Append container to the display area
                dataDisplay.appendChild(container);
            });
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});
