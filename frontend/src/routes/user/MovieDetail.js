import React from 'react';
import ReactSwipe from 'react-swipe';
import styled from "styled-components";
import { Container,Image,Row,Col,Table,Accordion,Card,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieDetail.css';


const MovieDetail = () => {
    return(
        <Container>
            <Row>
                <Table className="NameTable" striped bordered hover>
                    <thead>
                        <th >
                            
                                <h1 >
                                 영화제목
                                </h1>
                            
                        </th>
                    </thead>
                </Table>
            </Row>
                <Row>
                    {/*<Image width={200} src = "./test.jpg" thumbnail />*/}
                    <Image className ="mainImage" src = "./test.jpg" thumbnail />
                <div>
                <Table className="Table1" striped bordered hover  >
                
                <colgroup>
                    <col width="30%"/>
                    <col width="70%"/>
                </colgroup>

                    <thead>
                        <tr style ={{colorl:"#f00"}}>
                            <th > 
                                {/*<h1 style={{color: "#f00", borderRight: "1px solid #000",marginBottom : "3px",opacity : 0.5,}}>*/}
                                    장르
                            </th>
                            
                            <th >장르내용</th>
                        </tr>
                    </thead>

                    <thead>
                        <tr>
                            <th>감독</th>
                            <th>감독내용</th>
                        </tr>
                    </thead>

                    <thead>
                        <tr>
                            <th>출연</th>
                            <th>출연내용</th>
                        </tr>
                    </thead>

                    <thead>
                        <tr>
                            <th>등급</th>
                            <th>등급내용</th>
                        </tr>
                    </thead>
                    
                </Table>
                </div>  
             </Row>
          
            <Row>
                <Accordion classname = "storybox" defaultActiveKey="0">
                    <Card >
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                스토리
                            </Accordion.Toggle>
                        </Card.Header>

                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                스토리 내용
                            </Card.Body>
                        </Accordion.Collapse>

                    </Card>
                </Accordion>  
            </Row>
        </Container>  
    )
}
export default MovieDetail;