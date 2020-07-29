import React from 'react';
import TotalMarks from './total';
import LabelMarks from './labelmarks';

function StudentRow(props) {
    const { No, Name, Sub1, Sub2, Sub3 } = props;
    return <tr>
        <td>{No}</td>
        <td>{Name}</td>
        <td>
        <LabelMarks max="80" min="40" marks={Sub1}/>
            </td>
        <td>
            
        <LabelMarks max="80" min="40" marks={Sub2}/>
        </td>
        <td>
            
        <LabelMarks max="80" min="40" marks={Sub3}/>
        </td>
        <td>
            <LabelMarks max="250" min="150" marks={Sub1+Sub2+Sub3}/>
            </td>
        <td>Percentages</td>
    </tr>;

}

export default StudentRow;