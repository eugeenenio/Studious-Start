// campusCrush.js

let crushDetails = [];

function addCrushDetail() {
    const crushInput = document.getElementById("crush-input");
    const crushText = crushInput.value.trim();

    if (crushText) {
        crushDetails.push(crushText);
        displayCrushDetails();
        crushInput.value = "";
    }
}

function displayCrushDetails() {
    const crushList = document.getElementById("crush-list");
    crushList.innerHTML = "";

    crushDetails.forEach((detail, index) => {
        const li = document.createElement("li");
        li.className = "crush-item";
        const detailText = document.createElement("span");
        detailText.textContent = detail;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.onclick = () => deleteCrushDetail(index);
        li.appendChild(detailText);
        li.appendChild(deleteButton);
        crushList.appendChild(li);
    });
}

function deleteCrushDetail(index) {
    crushDetails.splice(index, 1);
    displayCrushDetails();
}
