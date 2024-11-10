// networkNexus.js

function searchLinkedIn() {
    const searchTerm = document.getElementById("network-search").value.trim();
    if (searchTerm) {
        const linkedInURL = `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(searchTerm)}`;
        window.open(linkedInURL, "_blank");
    }
}
