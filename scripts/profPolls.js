// profPolls.js

const professors = [
    { name: "Professor Smith", url: "https://www.ratemyprofessors.com/ShowRatings.jsp?tid=123456" },
    { name: "Professor Johnson", url: "https://www.ratemyprofessors.com/ShowRatings.jsp?tid=654321" },
    { name: "Professor Lee", url: "https://www.ratemyprofessors.com/ShowRatings.jsp?tid=789123" }
];

function populateProfList() {
    const profListDiv = document.getElementById("prof-list");

    professors.forEach(prof => {
        const button = document.createElement("button");
        button.className = "prof-button";
        button.textContent = prof.name;
        button.onclick = () => window.open(prof.url, "_blank");
        profListDiv.appendChild(button);
    });
}

populateProfList();
