import './App.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    <Container id="bg">
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
  );
};

export default App;