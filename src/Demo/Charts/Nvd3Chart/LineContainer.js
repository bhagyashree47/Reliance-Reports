import React,{Component} from 'react';
import LineChart from './LineChart';
export default class LineContainer extends Component {
    state = {
      dataToPass: [],
      labels:"",
      data:""
    };
  
    async componentDidMount() {
      const response = await fetch('http://192.168.101.65:5000/api/card_data');
      const data = await response.json(); // maybe you need this, you have to check your response
      this.setState(
          {
              dataToPass: data.Calls_by_day_and_Sentiment,

            },);
            }
  
    render(){
      return <LineChart data={this.state.dataToPass} labels={this.state.dataToPass.map(data=>{data.Day_Name})}
      value={this.state.dataToPass.map(data=>{data.Total_Sentiments})}
      />
    }
  }