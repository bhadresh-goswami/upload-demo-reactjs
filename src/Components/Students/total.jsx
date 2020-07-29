import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// function TotalMarks(props){
//     const {Sub1,Sub2,Sub3} = props;
//     return <span>{Sub1+Sub3+Sub3}</span>;
// }

// export default TotalMarks;

const TotalMarks = (props)=>{
    const {Sub1,Sub2,Sub3} = props;
    const total = () =>  Sub1+Sub2+Sub3;
    const display = ()=>{
        if(total()>=250)
        {
            return <span className="badge badge-success">{total()}</span>
        }
        else{
            return <span className="badge badge-warning">{total()}</span>
        }
    };
    return <span>{display()}</span>;
}

export default TotalMarks;