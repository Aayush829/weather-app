document.addEventListener('DOMContentLoaded', () => {
    const cityName = document.getElementById('cityName');
    const submitBtn = document.getElementById('submitBtn');
    const city_name = document.getElementById('city_name');
    const temp_status = document.getElementById('temp_status');
    const temp_real_val = document.getElementById('temp_real_val');
    const datahide = document.querySelector('.middle_layer');

    const getInfo = async (event) => {
        event.preventDefault();

        let cityVal = cityName.value;
        if (cityVal === "") {
            city_name.innerText = `Please write the name before search`;
            datahide.classList.add('data_hide');
        } else {
            try {
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityVal)}&appid=09343c8c8c763719e1f0881210117096
                `;

                const response = await fetch(url);
                const data = await response.json();

                city_name.innerText = `${data.name}, ${data.sys.country}`;
                temp_real_val.innerText = data.main.temp;

                const tempMood = data.weather[0].main;

                if (tempMood === "Clear") {
                    temp_status.innerHTML =
                        "<i class='fas fa-sun' style='color: #eccc68; '></i>";
                } else if (tempMood === "Clouds") {
                    temp_status.innerHTML =
                        "<i class='fas fa-cloud' style='color: #f1f2f6; '></i>";
                } else if (tempMood === "Rain") {
                    temp_status.innerHTML =
                        "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
                } else {
                    temp_status.innerHTML =
                        "<i class='fas fa-sun' style='color: #eccc68; '></i>";
                }
                datahide.classList.remove('data_hide');
            } catch (error) {
                console.log(error);
                city_name.innerText = `An error occurred. Please try again later.`;
                datahide.classList.add('data_hide');
            }
        }
    };

    submitBtn.addEventListener('click', getInfo);
});








// main.js

                // Rest of your temperature status checks

               