import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import Aux from "../../../hoc/_Aux/index";
import LineChart from "./LineChart";
import BarChartDay from "./BarChartDay";
import MultiBarChart from "./MultiBarChart";
import PieBasicChart from "./PieBasicChart";
import PieDonutChart from "./PieDonutChart";
import DrillDown from './DrillDown';
import Keywords from './Keywords';

import Funnel from './Funnel'


class Nvd3Chart extends React.Component {

    render() {
        return (
            <Aux>

                <Row>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Calls By Category</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <DrillDown />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Calls By Day and Sentiment</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <BarChartDay />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Shift Of Sentiments</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Funnel />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Keywords</Card.Title>
                            </Card.Header>
                            <Card.Body className="text-center">

                                <Keywords />
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Aux>
        );
    }
}

export default Nvd3Chart;