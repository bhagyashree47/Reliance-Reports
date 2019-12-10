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
            top5: [],
            bottom5: [],
            totalcall: "",
            positivecall: "",
            complaintcalls: "",
            callresolved: "",
            neutralcall: "",
            negativecall: "",
            querycall: "",
            averagecall: ""

        }
    }
    componentDidMount() {
        axios.get(`http://192.168.101.65:5000/api/card_data`)
            .then(res => {
                const completeData = res.data;


                this.setState(
                    {
                        top5: completeData.Top_5_Agents,
                        bottom5: completeData.Bottom_5_Agents,
                        totalcall: completeData.Total_call_result,
                        positivecall: completeData.Positive_call_count,
                        complaintcalls: completeData.Complaint_call_result,
                        callresolved: completeData.Query_call_result,
                        neutralcall: completeData.Neutral_call_result,
                        negativecall: completeData.Negative_call_result,
                        querycall: completeData.Query_call_result,
                        averagecall: completeData.Average_call_duration



                    });

            })
    }
    render() {

        const top5Content = (
            <Aux>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">Top 5 Agents</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table responsive hover>
                            <thead>
                                <tr>

                                    <th>Agent Name</th>
                                    <th>Sentiment Score</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (this.state.top5.length > 0) ? this.state.top5.map((table, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{table.Agent_Name}</th>
                                                <td>{Math.round(table.Sentiment_Score * 100) / 100}</td>

                                            </tr>
                                        )
                                    }) : <tr><td colSpan="5">Loading...</td></tr>
                                }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Aux>
        );
        const bottom5Content = (
            <Aux>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">Bottom 5 Agents</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table responsive hover>
                            <thead>
                                <tr>

                                    <th>Agent Name</th>
                                    <th>Sentiment Score</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (this.state.top5.length > 0) ? this.state.bottom5.map((table, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{table.Agent_Name}</th>
                                                <td>{Math.round(table.Sentiment_Score * 100) / 100}</td>

                                            </tr>
                                        )
                                    }) : <tr><td colSpan="5">Loading...</td></tr>
                                }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Aux>
        );


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
                    
                    <Col md={6} xl={8} className='m-b-30'>
                        <Row>
                            {top5Content}
                            {bottom5Content}

                        </Row>



                    </Col>

                </Row>
            </Aux>
        );
    }
}

export default Dashboard;