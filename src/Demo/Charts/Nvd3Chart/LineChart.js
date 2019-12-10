import React, {Component} from "react"
import {Line} from "react-chartjs-2"
class LineChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: this.props.labels,
                datasets: [
                    {
                        label:'Predicted Park Crowds',
                        data: this.props.value,
                        borderColor: 'rgba(77, 112, 255, 1)',
                        backgroundColor: 'rgba(77, 112, 255, 1)'
                    }
                ]
            },
            mydata:this.props.data
        }
    }

    render(){
        return(
            <div className = "chart">
                <Line
                    data={this.state.mydata}
                    options={{
                        title: {
                            display:true,
                            text:"Predicted Park Crowds",
                            fontSize:25
                        },
                        legend:{
                            display: true,
                            position: 'right'
                        },
                        scales: {
                            yAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Anticipated Crowds'
                                },
                                ticks: {
                                    beginAtZero: true
                                }
                            }],
                            xAxes: [{
                                scaleLabel: {
                                    display:true,
                                    labelString: 'Days in the future'
                                }
                            }]

                        }
                    }}
                />
            </div>
        )
    }
}
export default LineChart