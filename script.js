const cityTimezones = {
    "new york": "America/New_York",
    "los angeles": "America/Los_Angeles",
    "london": "Europe/London",
    "paris": "Europe/Paris",
    "tokyo": "Asia/Tokyo",
    "sydney": "Australia/Sydney",
    "toronto": "America/Toronto",
    "berlin": "Europe/Berlin",
       /* Switzerland */
    "lausanne": "Europe/Zurich",
    "zurich": "Europe/Zurich",
    "bern": "Europe/Zurich",
    "geneva": "Europe/Zurich"
};

function getTime() {
    const cityInput = document.getElementById("cityInput").value.trim().toLowerCase();
    const result = document.getElementById("timeResult");

    if (!cityInput || !cityTimezones[cityInput]) {
        result.textContent = "Please enter a valid city name!";
        return;
    }

    const now = new Date();
    const time = new Intl.DateTimeFormat("en-US", {
        timeZone: cityTimezones[cityInput],
        timeStyle: "medium",
        dateStyle: "long"
    }).format(now);

    result.textContent = `Local time in ${capitalize(cityInput)}: ${time}`;
}

function capitalize(text) {
    return text.split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
