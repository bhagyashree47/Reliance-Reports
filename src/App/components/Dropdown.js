import React, { Component } from 'react'
import axios from 'axios';
import { Input, FormGroup, Label } from 'reactstrap';
import Gauge from '../../Demo/Charts/Nvd3Chart/Gauge';
export default class Dropdown extends Component {
    constructor(props)
     {
        super(props);

        this.state = {
            Data: [],
            dropdownValue: "",
            gaugeData:{},
            cardData:{}

        }
    }
    onHandleClick = (event) => {
        this.setState({
            dropdownValue: event.target.value

        })
        if (this.state.dropdownValue!=="")
        {
            const data=this.state.Data.find(value=>value.Agent_Name==this.state.dropdownValue)
            
            this.setState({
                gaugeData:data
            })

        }
      
    }


    componentDidMount() {
        axios.get(`http://192.168.101.65:5000/api/agent_data`)
            .then(res => {
                const agents = res.data.Agent_Data
                
                
                // let agentname = [];

                // agents.map(agent => {
                //     agentname.push(agent.Agent_Name);

                // })


                this.setState({ Data: agents });
                console.log(this.state.Data)
               


            })
           
    }


    render() {
        return (
            <div>
                <FormGroup>
                    <Label for="exampleSelectMulti">Agent Name</Label>
                    <Input type="select" name="selectMulti" id="exampleSelectMulti" onClick={this.onHandleClick} >
                        <option default>Select Agent name</option>
                        {
                            this.state.Data.map(d => <option>{d.Agent_Name}</option>)
                        }


                    </Input>
                </FormGroup>

                <Gauge data={this.state.gaugeData}/>
              
                
            </div>
        )
    }
}
