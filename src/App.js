import './App.css';
import ReactSelect  from 'react-select';

const App = () => {
  const axios = require('axios').default;
  var arrWeather = [];

  function getWeather(){
    // axios.get('/user?ID=12345')
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });
    arrWeather.push(
      {
        label:"1", value: 1
      }
    );
  }

  function onWeatherChange(){

  }

  getWeather();

  return (
    <div id="bg">
      <div>
        <ReactSelect
          onChange={onWeatherChange}
          options={arrWeather}
          placeholder="Country"
          isSearchable
          isClearable
        >

        </ReactSelect>
      </div>  
      <div>
        
      </div>    
    </div>
  );
};

export default App;