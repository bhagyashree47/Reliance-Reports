import React, { Component } from 'react'
import axios from 'axios';
import { Input, FormGroup, Label } from 'reactstrap';
import Gauge from '../../Demo/Charts/Nvd3Chart/Gauge';
export default class Dropdown extends Component {
    constructor(props)
     {
        super(props);

        this.state = {
          

        }
    }
   
    render() {
        return (
            <div>
                <FormGroup>
                    <Label for="exampleSelectMulti">Agent Name</Label>
                    <Input type="select" name="selectMulti" id="exampleSelectMulti" onClick={this.props.clicked} >
                        <option default>Select Agent name</option>
                        {
                            this.state.Data.map(d => <option>{d.Agent_Name}</option>)
                        }


                    </Input>
                </FormGroup>

                          
                
            </div>
        )
    }
}
