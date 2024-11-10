// videoVault.js

const youtubeLinks = {
    'engg130-enph131': [
        { name: 'Questions Solutions', url: 'https://www.youtube.com/@QuestionSolutions' },
        { name: 'Jeff Hanson', url: 'https://www.youtube.com/@1234jhanson' }
    ],
    // Other class channels...
};

document.getElementById('engg130-enph131').addEventListener('click', () => setClass('engg130-enph131'));

function setClass(classId) {
    document.getElementById('search-container').style.display = 'block';
    const className = document.getElementById(classId).innerText;
    document.getElementById('class-header').innerText = className;

    const channels = youtubeLinks[classId];
    window.currentClass = { classId, channels };

    document.getElementById('topic-input').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            searchVideos();
        }
    });
}

function searchVideos() {
    const topic = document.getElementById('topic-input').value.trim();
    const { channels } = window.currentClass;

    if (!topic) {
        alert("Please enter a topic!");
        return;
    }

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    channels.forEach(channel => {
        const videoUrl = `https://www.youtube.com/results?search_query=${topic}+${channel.name.replace(/ /g, '+')}`;
        resultsContainer.innerHTML += `<div class="video-preview"><a href="${videoUrl}" target="_blank">${topic} ${channel.name}</a></div>`;
    });
}
