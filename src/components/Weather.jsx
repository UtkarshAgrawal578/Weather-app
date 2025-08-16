import React,{useState} from 'react'

function Weather() {
    const [location, setLocation] = useState("");
    const [weather,setWeather]=useState([]);
    const [error, setError] = useState("");

   const fetchMoreData = async (clearFirst = false) => {
    try {
      const url = `https://api.weatherapi.com/v1/current.json?key=9026220a554a43f1bbc172050250908&q=${location}&aqi=yes`;
      let data = await fetch(url);
      let parsedData = await data.json();

      if (parsedData.error) {
        setWeather([]);
        setError("❌ Weather not found. Please try again.");
        setTimeout(() => setError(""), 3000); // hide after 3s
        return;
      }

      setWeather(prev =>
        clearFirst
          ? [].concat(parsedData.current)
          : prev.concat(parsedData.current)
      );
      setError(""); // clear error if success
    } catch (err) {
      setError("⚠️ Something went wrong. Please try again.");
      setTimeout(() => setError(""), 4000);
    }
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "darken",
      }}
    >
     <h1
  className="
    text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 md:mb-10
    drop-shadow-[0_5px_10px_rgba(0,0,0,0.6)] tracking-wide
    bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400
    bg-clip-text text-transparent animate-pulse text-center px-2
  "
>
  🌤 Current Weather Conditions
</h1>


      <div className="mb-12 w-full flex justify-center">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="px-6 py-3 rounded-full shadow-xl bg-white/20 backdrop-blur-md placeholder-gray-300 text-white focus:outline-none focus:ring-4 focus:ring-blue-400 w-96 text-lg"
        />
        
      </div>
      <div>
      {error && (
        <div className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
          {error}
        </div>
      )}
      </div>
      <div className='my-4'>
      <button
 onClick={() => fetchMoreData(true)}

  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-blue-500/50 hover:scale-105 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300"
>
  See Weather
</button>
</div>

      {weather.map((element) => {
                return  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 max-w-6xl my-5">
        <div className="bg-black/50 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-2">Temperature</h2>
          <p className="text-gray-200 text-lg">{element.temp_c}<sup>0</sup>C</p>
        </div>
        <div className="bg-black/50 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-2">Wind Speed</h2>
          <p className="text-gray-200 text-lg">{element.wind_kph} Km/hr</p>
        </div>
        <div className="bg-black/50 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-2">Humidity</h2>
          <p className="text-gray-200 text-lg">{element.humidity}%</p>
        </div>
        <div className="bg-black/50 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-2">Cloud Coverage</h2>
          <p className="text-gray-200 text-lg">{element.cloud}%</p>
        </div>
      </div>
      })}
    </div>
  )
}

export default Weather
