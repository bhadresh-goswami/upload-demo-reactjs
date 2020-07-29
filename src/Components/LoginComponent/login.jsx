import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "EmailId":"",
            "Password":""
        }
    }
    
    ChangeHandler=(elementRef)=>{

        let name = elementRef.target.name;
        let value = elementRef.target.value;

        this.setState({[name]:value});
        console.log(this.state);
    }
    
    RememberMeChangeHandler=(elementRef)=>{
        
    }

    componentWillMount(){
        //before render
    }
    componentDidMount(){
        //after render
    }

    shouldComponentUpdate()
    {
        return true;
    }


    componentWillReceiveProps(){
        //is there any props value recieved or not
    }
    componentWillUpdate(){
        //before state will changed
    }
    componentDidUpdate(){
        //after state will changed
    }
    render() {
        return (
            <div className="container">
                <div className="col-md-8">
                    <div className="form-group">
                        <label for="email">Email address:</label>
                        <input type="email"
                         name="EmailId"
                         onChange={(element)=>this.ChangeHandler(element)}
                         className="form-control" placeholder="Enter email" id="email" />
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" 
                        name="Password"
                        onChange={(element)=>this.ChangeHandler(element)}
                        className="form-control" placeholder="Enter password" id="pwd" />
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                            <input className="form-check-input"
                            onChange={(element)=>this.RememberMeChangeHandler(element)}
                             type="checkbox" /> Remember me
                     </label>
                    </div>
                    <button type="button" className="btn btn-primary">Submit</button>
                    {this.state.EmailId}/{this.state.Password}
                </div>
            </div>
        );
    }
}

export default Login;