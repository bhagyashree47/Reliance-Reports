import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

export default class BarChartType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: {}
        }
    }
    refreshView=(category)=>{
        console.log('here')
    }

    componentDidMount() {
        axios.get(`http://192.168.101.65:5000/api/card_data`)
            .then(res => {
                const calls = res.data.Call_Count_by_Type;
                let callday = [];
                let callsentiment = [];
                calls.map(call => {
                    callday.push(call.Call_Category);
                    callsentiment.push(call.Total_Calls);
                });
                this.setState({
                    Data: {
                        labels: callday,
                        datasets: [
                            {
                                label: 'Calls by Day and Sentiments',
                                data: callsentiment,
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
                <Bar
                    data={this.state.Data}
                    options={{ maintainAspectRatio: false }}
                    width={350}
                    height={350}
                    onElementsClick={elems => {
                        console.log(this.state.Data.labels[elems[0]['_index']])
                        this.refreshView(this.state.Data.labels[elems[0]['_index']])
                    }} />
            </div>
        )
    }
}



