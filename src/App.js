import './App.css';
import React, { useState } from "react";
import axios, * as others from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { Search, Trash } from 'react-bootstrap-icons';

const App = () => {
  const [objWeather, setObjWeather] = useState({});
  const [strSearch, setStrSearch] = useState('');
  const [arrWeather, setArrWeather] = useState([]);
  const [errorMsg, setErrMsg] = useState([]);

  const APIID = "a29f0aca80e33125e25e4b429be47b62";

  function getWeather(pSearch){
    let tmpSearch = pSearch ?? "";
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + tmpSearch + 
      '&APPID=' + APIID;
    axios.get(url)
      .then(function (response) {
        let obj = response.data;
        obj.description = obj.weather[0].description;
        obj.fullCityName = obj.name + ', ' + obj.sys.country;
        obj.tempC = KtoC(obj.main.temp);
        obj.humidity = obj.main.humidity;
        obj.dateTime = timeStampToDateTime(obj.dt);

        // handle success
        if (objWeather?.base !== undefined)
        {
          arrWeather.unshift(objWeather);
          setArrWeather(arrWeather);
        }        
        setObjWeather(obj);        
        setErrMsg("");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setErrMsg("Not Found");
      })
  }

  function onWeatherChange(){
    getWeather(strSearch);
  }

  function onWeatherChangeD(pI){
    getWeather(arrWeather[pI].name);
  }

  function onWeatherClearD(pI){
    setArrWeather(arrWeather.filter((weather, index) => index != pI));
    arrWeather.splice(pI, 1);
  }

  function KtoC(k){
    return Math.round(k - 273.15);
  }

  function timeStampToDateTime(ts){
    let dt = new Date(ts * 1000);
    return dt.toLocaleString();
  }

  function handleStrSearchChange(event) {
    setStrSearch(event.target.value);
  };

  return (    
    <div id="bg">
      <from>
        <Container>
          <Row>
            <Col>
              <span>
                <input 
                  id='txtSearch'
                  name='txtSearch'
                  value={strSearch}
                  type='text' 
                  placeholder='city' 
                  onChange={handleStrSearchChange}
                /> 
              </span>
              <span>
                <button
                  id='btnSearch'
                  onClick={onWeatherChange}
                >
                  <Search />
                </button>
              </span>             
            </Col>
          </Row>
        </Container>
      </from>
      <p>
        {errorMsg}
      </p>
      <Card>
        <Card.Body>
          <Card.Title>{objWeather?.fullCityName}</Card.Title>
          <Card.Text>
          <ListGroup>
            <ListGroup.Item>
              Descrption: {objWeather.description}             
            </ListGroup.Item>
            <ListGroup.Item>
              Temperatue: {objWeather.tempC}             
            </ListGroup.Item>
            <ListGroup.Item>
              Humidity: {objWeather.humidity}             
            </ListGroup.Item>
            <ListGroup.Item>
              Time: {objWeather.dateTime}             
            </ListGroup.Item>
          </ListGroup>
          </Card.Text>          
        </Card.Body>
      </Card> 
      <h3>Search History</h3>
      <ListGroup>
        {
          arrWeather.map((w, i) => {
            return(
              <ListGroup.Item>
                <Container>
                  <Row>
                    <Col>
                      <div>
                        <span>
                          {i + 1}. {w?.fullCityName} 
                        </span>
                        <span style={{float: "right"}}>
                          {objWeather.dateTime} 
                          <button
                            id={'btnSearch' + i}
                            onClick={()=>onWeatherChangeD(i)}
                          >
                            <Search />
                          </button>
                          <button
                            id={'btnClear' + i}
                            onClick={()=>onWeatherClearD(i)}
                          >
                            <Trash />
                          </button>
                        </span>
                      </div>                    
                    </Col>
                  </Row>
                  <br/>
                </Container>                            
              </ListGroup.Item>
            );            
          })
        }
      </ListGroup>
    </div>
  );
};

export default App;