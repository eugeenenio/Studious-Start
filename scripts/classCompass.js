// Buildings
const buildings = [
    { name: "CAB", url: "https://maps.app.goo.gl/3QWN4DjfCfeRhK7MA" },
    { name: "CCIS", url: "https://maps.app.goo.gl/cwFzokRLHXNzbY838" },
    { name: "DICE", url: "https://maps.app.goo.gl/g2D8CtpsY6eo5zBr6" },
    { name: "ECHA", url: "https://maps.app.goo.gl/spkGhw41G5RCyi8e7" },
    { name: "ED", url: "https://maps.app.goo.gl/zA116DWLFq5SFnDG6" },
    { name: "ESB", url: "https://maps.app.goo.gl/ZPTUNCeCYLyhrg588" },
    { name: "ETLC", url: "https://maps.app.goo.gl/EtuBc7CMqg7V83z59" },
    { name: "HC", url: "https://maps.app.goo.gl/iY9YY6PT8kyWeSEc8" },
    { name: "HUB", url: "https://maps.app.goo.gl/54ti5tuZWwypGr9q7" },
    { name: "MEC", url: "https://maps.app.goo.gl/AiW6ftYZoaYbh2Yi9" },
    { name: "NREF", url: "https://maps.app.goo.gl/GTPrExNYuH9UArDw5" },
    { name: "SAB", url: "https://maps.app.goo.gl/XNbMrsfrptY3EhSH7" },
    { name: "SUB", url: "https://maps.app.goo.gl/hEj684nwCtoZyR7T7" },
    { name: "T", url: "https://maps.app.goo.gl/1YGDURFrHfEkGhTD7" },
    { name: "TL", url: "https://maps.app.goo.gl/UmD5aCYRFSi8froK6" },
    { name: "VVC", url: "https://maps.app.goo.gl/6n3ddrwYGRRMnTQ87" }
];

// Function to search and display results
function searchBuildings() {
    const input = document.getElementById("search-input").value.toLowerCase().trim();
    const resultsList = document.getElementById("results-list");
    resultsList.innerHTML = ""; // Clear previous results

    if (input === "") {
        resultsList.style.display = "none"; // Hide results if input is empty
        return;
    }

    // Filter buildings based on search input
    const filteredBuildings = buildings.filter(building =>
        building.name.toLowerCase().includes(input)
    );

    // Results
    if (filteredBuildings.length > 0) {
        resultsList.style.display = "block"; // Show results list
        filteredBuildings.forEach(building => {
            const listItem = document.createElement("li");
            listItem.textContent = building.name;
            listItem.onclick = () => window.open(building.url, "_blank");
            resultsList.appendChild(listItem);
        });
    } else {
        resultsList.style.display = "none"; // Hide if no matches found
    }
}

// Event listener for search input
document.getElementById("search-input").addEventListener("input", searchBuildings);