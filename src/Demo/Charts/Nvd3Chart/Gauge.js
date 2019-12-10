import ReactSpeedometer from "react-d3-speedometer";
// and just use it
import React, { Component } from 'react'
import axios from 'axios';

export default class Gauge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: {}
        }
    }
    
    componentDidMount() {
        axios.get(`http://192.168.101.65:5000/api/card_data`)
            .then(res => {
                const scores = res.data.Top_5_Agents;
                let agentscores = [];
               
                scores.map(score => {
                    agentscores.push(score.Sentiment_Score);
                   
                });
                this.setState({
                    Data: {
                        agentscores
                    }
                   
                });
              
            })
    }
    render() {
        return (
            <div>
                <ReactSpeedometer minValue={-1} maxValue={1}  
                    value={this.props.data ? this.props.data.Sentiment_Score : 0.5 } />
            </div>
        )
    }
}