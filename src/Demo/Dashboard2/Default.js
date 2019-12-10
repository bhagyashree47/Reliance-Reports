import React from 'react';
import { Row, Col, Card, Table, Tabs, Tab } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

import axios from 'axios';

import Gauge from '../Charts/Nvd3Chart/Gauge'
import Dropdown from '../.././App/components/Dropdown'
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           card:[]
        }
    }
    componentDidMount() {
       axios.get('http://192.168.101.65:5000/api/agent_data')
       .then((response)=>{
            const agents= response.data.Agent_Data
            this.setState({
                card:agents
            })
            

       })
    }
    render() {
       // const totalcount=this.state.card.map(to)
       


        return (

            <Aux>

                <Row>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Total Count</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"> {this.state.totalcall}</h3>
                                    </div>

                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Positive Call Count</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"> {this.state.positivecall}</h3>
                                    </div>

                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Complaint Calls</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"> {this.state.complaintcalls}</h3>
                                    </div>


                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Calls Resolved in 180 Sec</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">{this.state.callresolved}</h3>
                                    </div>


                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Neutral Call</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">{this.state.neutralcall}</h3>
                                    </div>


                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Negative Call Count</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"> {this.state.negativecall}</h3>
                                    </div>


                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Query Calls</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"> {this.state.querycall}</h3>
                                    </div>


                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Average Call Duration</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">{Math.round(this.state.averagecall* 100) / 100}</h3>
                                    </div>


                                </div>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Overall Satisfaction Score</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Dropdown />

                            </Card.Body>
                        </Card>
                    </Col>
                    
                  
                </Row>
            </Aux>
        );
    }
}

export default Dashboard;