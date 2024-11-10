const youtubeLinks = {
    'engg130-enph131': [
        { name: 'Questions Solutions', url: 'https://www.youtube.com/@QuestionSolutions' },
        { name: 'Jeff Hanson', url: 'https://www.youtube.com/@1234jhanson' }
    ],
    'chem103-chem105': [
        { name: 'Organic Chemistry Tutor', url: 'https://www.youtube.com/@TheOrganicChemistryTutor' },
        { name: 'Chad’s Prep', url: 'https://www.youtube.com/@ChadsPrep' }
    ],
    'math100-math101': [
        { name: 'Professor Leonard', url: 'https://www.youtube.com/@ProfessorLeonard' },
        { name: 'Khan Academy', url: 'https://www.youtube.com/@khanacademy' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded. Adding event listeners...");

    // Adding event listeners to buttons after DOM is ready
    document.getElementById('engg130-enph131').addEventListener('click', () => {
        console.log('Engg130 | Enph131 button clicked');
        setClass('engg130-enph131');
    });

    document.getElementById('chem103-chem105').addEventListener('click', () => {
        console.log('Chem103 | Chem105 button clicked');
        setClass('chem103-chem105');
    });

    document.getElementById('math100-math101').addEventListener('click', () => {
        console.log('Math100 | Math101 button clicked');
        setClass('math100-math101');
    });
});

// Set the class for the video search
function setClass(classId) {
    console.log(`Setting class: ${classId}`);
    document.getElementById('search-container').style.display = 'block';
    const className = document.getElementById(classId).innerText;
    document.getElementById('class-header').innerText = className;

    const channels = youtubeLinks[classId];
    window.currentClass = { classId, channels };

    // Add event listener for Enter key press
    const topicInput = document.getElementById('topic-input');
    topicInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            searchVideos();
        }
    });
}

// Search function
function searchVideos() {
    const topic = document.getElementById('topic-input').value.trim();
    const { channels } = window.currentClass;

    if (!topic) {
        alert("Please enter a topic!");
        return;
    }

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';  // Clear previous results

    channels.forEach(channel => {
        const videoUrl = `https://www.youtube.com/results?search_query=${topic}+${channel.name.replace(/ /g, '+')}`;
        const resultHTML = `
            <div class="video-preview">
                <a href="${videoUrl}" target="_blank">
                    ${topic} ${channel.name}
                </a>
            </div>
        `;
        resultsContainer.innerHTML += resultHTML;
    });
}