async function obtenerClima() {
    const ciudad = document.getElementById("ciudad").value;
    const apiKey = "71388b2a5cc94f65304eab7989b06908";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    try {

        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        if (datos.cod !== 200) {
            document.getElementById("resultado").innerHTML = `<p>Ciudad no encontrada. Por favor, ingresa una ciudad válida.</p>`;
            return;
        }

        document.getElementById("resultado").innerHTML = `
        
            <h2>🌍 Clima en ${datos.name}</h2>
            <div style="text-align: center; margin: 20px 0;">
            <img src="https://openweathermap.org/img/wn/${datos.weather[0].icon}@2x.png" alt="clima" style="width:100px; background:white; border-radius:50%;">
            </div>

            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 15px; border-radius: 10px; color: white;">
                <p>🌡️ <strong>Temperatura:</strong> ${datos.main.temp} °C</p> 
                <p>☁️ <strong>Descripción:</strong> ${datos.weather[0].description}</p>
                <p>💧 <strong>Humedad:</strong> ${datos.main.humidity}%</p>
                <p>💨 <strong>Viento:</strong> ${datos.wind.speed} m/s</p>
                <p>📍 <strong>Latitud:</strong> ${datos.coord.lat}</p>
                <p>📍 <strong>Longitud:</strong> ${datos.coord.lon}</p>
            </div>
        `;


    } catch (error) {
        console.error("Error al obtener el clima:", error);
    }


}