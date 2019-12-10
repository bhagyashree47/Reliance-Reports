import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

export default class BarChartType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: {}
        }
    }

    componentDidMount() {
        axios.get(`http://192.168.101.65:5000/api/card_data`)
            .then(res => {
                const calls = res.data.Busiest_Hour;
                let callday = [];
                let callsentiment = [];
                calls.map(call => {
                    callday.push(call.Call_Count);
                    callsentiment.push(call.Hour);
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
                <Line
                    data={this.state.Data}
                    options={{ maintainAspectRatio: false }}
                    width={350}
                    height={350} 
                    />
            </div>
        )
    }
}



