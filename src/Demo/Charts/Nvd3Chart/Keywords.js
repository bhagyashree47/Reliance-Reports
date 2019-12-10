import React,{Component} from "react";
import { render } from "react-dom";
import WordCloud from "react-d3-cloud";


export default class Keywords extends Component{
constructor(props){
    super(props);
    this.state= {
        data : [
        { text: "Deepak Sabari kis Prakar", value: 1000 },
        { text: "lol", value: 200 },
        { text: "first impression", value: 800 },
        { text: "very cool", value: 1000000 },
        { text: "duck", value: 10 }
      ],
      fontSizeMapper : word => Math.log2(word.value) * 5,
      rotate : word => word.value % 360          
    }
      
}    

 
    render(){
        return(<div>
<WordCloud data={this.state.data} fontSizeMapper={this.state.fontSizeMapper} rotate={this.state.rotate} />
            
        </div> )
    }
}

 