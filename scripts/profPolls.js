const form = document.getElementById("profSearchForm");

// Add event listener for form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get the professor name input
            const profName = document.getElementById("profName").value.trim();

        // If the input is not empty, perform the search
            if (profName) {
                // Construct the search URL for RateMyProfessors
                const searchQuery = encodeURIComponent(profName);
                const searchURL = `https://www.ratemyprofessors.com/search/professors/1407?q=${searchQuery}`;

                // Open the RateMyProfessors search results in a new tab
                window.open(searchURL, '_blank');
            }
        });