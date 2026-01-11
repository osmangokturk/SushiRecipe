function getTime() {
    const city = document.getElementById("cityInput").value.trim();
    const result = document.getElementById("timeResult");

    if (city === "") {
        result.textContent = "Please enter a valid city name!";
        return;
    }

    // Using WorldTimeAPI (free public API)
    fetch(`https://worldtimeapi.org/api/timezone`)
        .then(response => response.json())
        .then(timezones => {
            const match = timezones.find(zone =>
                zone.toLowerCase().includes(city.toLowerCase())
            );

            if (!match) {
                result.textContent = "Please enter a valid city name!";
                return;
            }

            return fetch(`https://worldtimeapi.org/api/timezone/${match}`);
        })
        .then(response => response.json())
        .then(data => {
            if (!data || !data.datetime) return;
            const time = new Date(data.datetime).toLocaleTimeString();
            result.textContent = `Local time in ${city}: ${time}`;
        })
        .catch(() => {
            result.textContent = "Please enter a valid city name!";
        });
}
