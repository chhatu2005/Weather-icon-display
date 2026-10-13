
var weatherData = {
    sunny: {
        icon: "☀️",
        title: "Sunny",
        description: "The sky is clear and the sun is shining.",
        className: "sunny"
    },

    cloudy: {
        icon: "☁️",
        title: "Cloudy",
        description: "The sky is covered with clouds.",
        className: "cloudy"
    },

    rainy: {
        icon: "🌧️",
        title: "Rainy",
        description: "Rain is falling. Don't forget your umbrella!",
        className: "rainy"
    },

    snowy: {
        icon: "❄️",
        title: "Snowy",
        description: "Snow is falling and the weather is cold.",
        className: "snowy"
    },

    stormy: {
        icon: "⛈️",
        title: "Stormy",
        description: "Thunderstorms may occur. Stay safe!",
        className: "stormy"
    },

    windy: {
        icon: "💨",
        title: "Windy",
        description: "Strong winds are blowing outside.",
        className: "windy"
    }
};

function showWeather() {
    var selectedWeather =
        document.getElementById("weatherSelect").value;

    var icon = document.getElementById("weatherIcon");
    var title = document.getElementById("weatherTitle");
    var description =
        document.getElementById("weatherDescription");
    var display = document.getElementById("weatherDisplay");

    // Reset previous weather background
    display.className = "weather-display";

    if (selectedWeather === "") {
        icon.innerHTML = "🌤️";
        title.innerHTML = "Weather Condition";
        description.innerHTML =
            "Select a condition to see the weather.";
        return;
    }

    var weather = weatherData[selectedWeather];

    icon.innerHTML = weather.icon;
    title.innerHTML = weather.title;
    description.innerHTML = weather.description;

    display.classList.add(weather.className);
}
