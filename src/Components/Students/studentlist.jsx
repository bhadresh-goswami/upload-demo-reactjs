import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentRow from './student';

const studentData = [
    {
        'No':1,
        'Name':'abc',
        'Sub1':30,
        'Sub2':60,
        'Sub3':70
    },
    {
        'No':2,
        'Name':'xzy',
        'Sub1':80,
        'Sub2':90,
        'Sub3':80
    }
];

class StudentList extends Component {

    render() {
        //it is the function work on collection and return single data from the collection as per you logic
        const listToDisplay = studentData.map((element)=>{
            return <StudentRow No={element.No} Name={element.Name} Sub1={element.Sub1} Sub2={element.Sub2} Sub3={element.Sub3}/>
        });

        return (
            <div className="container">
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Sub1</th>
                            <th>Sub2</th>
                            <th>Sub3</th>
                            <th>Total</th>
                            <th>Percentages</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listToDisplay}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentList;