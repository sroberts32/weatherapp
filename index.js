let weather = {
  fetchWeather: function (zip) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?zip=" +
        zip +
        "&units=imperial&appid=e69f1c9ec550f27d563d6d98e63b84ec"
    )
      .then((response) => {
        if (!response.ok) {
          alert("Invalid Entry");
          throw new Error("Invalid Entry");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    let { name } = data;
    let { temp } = data.main;
    let { description } = data.weather[0];
    let { temp_max } = data.main;
    let { temp_min } = data.main;
    let time = new Date();
    let tempND = Math.trunc(temp);
    let maxND = Math.trunc(temp_max);
    let minND = Math.trunc(temp_min);

    document.querySelector(".city").innerText = name;
    document.querySelector(".temp").innerText = tempND + "°F";
    document.querySelector(".conditions").innerText = description;
    document.querySelector(".hi").innerText = "Hi: " + maxND + "°F";
    document.querySelector(".low").innerText = "Low: " + minND + "°F";
    document.querySelector(".time").innerText = time;
  },
  search: function () {
    this.fetchWeather(document.querySelector(".box").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});
