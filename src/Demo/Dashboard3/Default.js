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
import LineChart from '../Charts/Nvd3Chart/LineChart'
import BarChartType from '../Charts/Nvd3Chart/BarChartType'
import LineBusiest from '../Charts/Nvd3Chart/LineBusiest'
import DoughnutExplicit from '../Charts/Nvd3Chart/DoughnutExplicit';
class Dashboard extends React.Component {
    
   
    render() {

        


        return (

            <Aux>

                <Row>
                <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Call Count By Type </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <BarChartType />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Busiest Hours </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <LineBusiest />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Explicit Call Content </Card.Title>
                            </Card.Header>
                            <Card.Body>
                               <DoughnutExplicit />
                            </Card.Body>
                        </Card>
                    </Col>
                   
                </Row>
            </Aux>
        );
    }
}

export default Dashboard;