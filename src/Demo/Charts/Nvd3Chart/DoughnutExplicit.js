import React, { Component } from 'react'
import DonutChart from 'react-donut-chart';
import axios from 'axios'
export default class DoughnutExplicit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: {
                label:[],
                value:[]
            }
        }
    }
    componentDidMount() {
        axios.get(`http://192.168.101.65:5000/api/agent_data`)
            .then(res => {
                const calls = res.data.Agent_Data;
                console.log(res.data.Agent_Data)
                let agentName = [];
                let explicitCall = [];
                calls.map(call => {
                    agentName.push(call.Agent_Name);
                    explicitCall.push(call.Explicit_Calls_Count);
                });
                this.setState({
                    Data: {
                        label: agentName,
                        value: explicitCall
                    }

                })
                console.log(this.state.Data.value);
            })
    }
    render() {
       
        return (
            <div>
                <DonutChart
    data={this.state.Data} />
            </div>
        )
    }
}
