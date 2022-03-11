import React from 'react';
import  { useEffect, useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { RootObject  } from '../types/interface';
import DayCard from './DayCard';
import Details from './Details';


export const Main = () => {
    const [weather, setWeather] = useState <RootObject | null>(null)
    const [country, setCountry] = useState('')

    // const keyNumber = process.env.REACT_APP_API_  
    // console.log(keyNumber)

    
    const getData = async ()=>{
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=54baed561dc6416c02fd619c70a96bb1`)
          if (response.ok){
              const data = await response.json() 
              console.log(data)
              setWeather(data)
            
          } else{
              console.log("error fetch")
          }
        } catch (error) {
    console.log(error)
        }
    };
    



    return (
        <Container>
            <Row className="d-none d-sm-block">
                <Form
                    className="animate__animated animate__fadeInDown"
                    onSubmit={async (e) => {
                        e.preventDefault();
                    }}
                >
                    <Row className="mt-3">
                        <Col
                            sm={{ offset: 1, span: 5 }}
                            md={{ offset: 2, span: 4 }}
                            lg={{ offset: 2, span: 4 }}
                            xl={{ offset: 3, span: 3 }}
                            className="mb-5 p-0" 
                        >
                            <Form.Group
                                controlId="exampleForm.ControlInput1"
                                style={{ width: "90%" }}
                            >
                                <Form.Control
                                    type="search"
                                    placeholder="Insert here your city"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                        <Button
                         style={{
                            minWidth: "20%",
                            maxWidth: "100%",
                          }}
                          variant="outline-success"
                          onClick={()=> getData()}
                        >Search</Button>
                        </Col>
                        <Col xs={10}>
                         

                         {
                           weather && <Details weatherObj={weather} />
                        
                         }
                         <Row className="mt-5 d-flex   justify-content-center">
              <Col
                        style={{ height: "15vh" }}
                        className="px-0"
                        xs={6}
                        sm={3}
                        md={2}
                        lg={1}
                        xl={1}
                      >
                {weather && <DayCard weatherObj={weather} /> }
                      </Col>
          </Row>

                        </Col>
                    </Row>
                </Form>
            </Row>
        </Container>
    


    )                        
};
