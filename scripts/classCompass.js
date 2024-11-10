// classCompass.js

const buildings = [
    { name: "CAB", url: "https://maps.app.goo.gl/3QWN4DjfCfeRhK7MA" },
    { name: "CCIS", url: "https://maps.app.goo.gl/cwFzokRLHXNzbY838" },
    // Other buildings...
];

function searchBuildings() {
    const input = document.getElementById("search-input").value.toLowerCase().trim();
    const resultsList = document.getElementById("results-list");
    resultsList.innerHTML = "";

    if (input === "") {
        resultsList.style.display = "none";
        return;
    }

    const filteredBuildings = buildings.filter(building =>
        building.name.toLowerCase().includes(input)
    );

    if (filteredBuildings.length > 0) {
        resultsList.style.display = "block";
        filteredBuildings.forEach(building => {
            const listItem = document.createElement("li");
            listItem.textContent = building.name;
            listItem.onclick = () => window.open(building.url, "_blank");
            resultsList.appendChild(listItem);
        });
    } else {
        resultsList.style.display = "none";
    }
}

document.getElementById("search-input").addEventListener("input", searchBuildings);
