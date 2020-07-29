import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LabelMarks = (props)=> {
    const {max,min,marks} = props;
    const display = ()=>{
        if(marks>=max){
            return <span className="badge badge-success">{marks}</span>
        }
        else if(marks<min){
            return <span className="badge badge-danger">{marks}</span>
        }
        else{
            return <span className="badge badge-info">{marks}</span>
        }
    }
    return <p>{display()}</p>

};

export default LabelMarks;