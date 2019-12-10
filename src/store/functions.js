import { SET_DROPDOWN_VALUES,ADD_DROPDOWN_VALUES} from './actions';
import axios from 'axios';

export function loadArray(){
return(dispatch)=>{
    return axios.get("http://192.168.101.65:5000/api/agent_data").then((response)=>{
        dispatch(agentData(response.data.Agent_Data))
    })
}
}
export function agentData(data){
    return{
        type:SET_DROPDOWN_VALUES,
        data:data
    }
}