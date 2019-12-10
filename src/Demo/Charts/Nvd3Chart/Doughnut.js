import React, { Component } from 'react';
import {Doughnut}  from 'react-chartjs-2';
import axios from 'axios';

export default class BarChartType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: {}
        }
    }

    componentDidMount() {
        axios.get(`http://192.168.101.65:5000/api/agent_data`)
            .then(res => {
                const calls = res.data.Agent_Data;
                console.log(res.data.Agent_Data)
                let callday = [];
                let callsentiment = [];
                calls.map(call => {
                    callday.push(call.Explicit_Calls_Count);
                    callsentiment.push(call.Agent_Name);
                });
                this.setState({
                    Data: {
                        labels: callsentiment,
                        datasets: [
                            {
                                label: 'Busiest Hours',
                                data: callday,
                                backgroundColor: [
                                    'rgba(255,105,145,0.6)',
                                    'rgba(155,100,210,0.6)',
                                    'rgba(90,178,255,0.6)',

                                ]
                            }
                        ]
                    }
                });
            })
    }
    render() {
        return (
            <div>
                <Doughnut
                    data={this.state.Data}
                    options={{ maintainAspectRatio: false }}
                    width={350}
                    height={350} />
            </div>
        )
    }
}



