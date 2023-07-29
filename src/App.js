import './App.css';
import { axios } from 'axios';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = () => {
  const axios = require('axios').default;
  var objWeather = {};

  function getWeather(){
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=ipoh&APPID=a29f0aca80e33125e25e4b429be47b62';
    axios.get(url)
      .then(function (response) {
        // handle success
        objWeather = response;
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  function onWeatherChange(){

  }

  getWeather();

  return (    
    <div id="bg">
      <Container>
        <Row>
          <Col 
              xxl={11} 
              xl={11} 
              lg={11} 
              md={11} 
              sm={11} 
              xs={11}
            >
            1
          </Col>
          <Col 
            xxl={1} 
            xl={1} 
            lg={1} 
            md={1} 
            sm={1} 
            xs={1}
          >
            1
          </Col>
        </Row>
        <Row>
          <Col 
            xxl={11} 
            xl={11} 
            lg={11} 
            md={11} 
            sm={11} 
            xs={11}
          >
            <input 
              id='txtSearch'
              name='txtSearch'
              type='text' 
              placeholder='city' 
            /> 
          </Col>
          <Col
            xxl={1} 
            xl={1} 
            lg={1} 
            md={1} 
            sm={1} 
            xs={1}
          >
            <button
              id='btnSearch'
              onClick={onWeatherChange}
            >
              <FontAwesomeIcon icon={['fab', 'microsoft']}/>
            </button>
          </Col>
        </Row>
      </Container>
      {objWeather?.weather[0].main}
    </div>  
  );
};

export default App;