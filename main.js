const inputCity = document.querySelector('.inputCity');
const cityName = document.querySelector('.cityName');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const country = document.querySelector('.country')
const button = document.querySelector('.apibtn').addEventListener('click', getText);

function getText() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputCity.value + '&appid=9d7d9b5ebb4dfb534525bfea1ddbfc3c')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      let nameValue = data['name'];
      let tempValue = data['main']['temp'];
      let descValue = data['weather'][0]['description']
      let countryName = data['sys']['country'];

      cityName.innerHTML = nameValue;
      temp.innerHTML = tempValue;
      desc.innerHTML = descValue
      country.innerHTML = countryName;

    })
    .catch((err) => alert("Invalid city"))
}
