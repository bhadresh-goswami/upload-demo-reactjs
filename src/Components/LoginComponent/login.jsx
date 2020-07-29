import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "EmailId":"",
            "Password":"",
            "RememberMe":false
        }
    }
    
    ChangeHandler=(elementRef)=>{

        let name = elementRef.target.name;
        let value = elementRef.target.value;

        this.setState({[name]:value});
        console.log(this.state);
    }
    
    RememberMeChangeHandler=(element)=>{
        var checked = !this.state.RememberMe;
        console.log(checked);
        this.setState({RememberMe:checked});
        if(checked){
            console.log(element.target.value);
        }
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
        const mycss = {
            color:"red",
            margin:"10px",
            padding:"10px"
        };
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
                        <label for="pwd" style={mycss}>Password:</label>
                        <input type="password" 
                        name="Password"
                        onChange={(element)=>this.ChangeHandler(element)}
                        className="form-control" placeholder="Enter password" id="pwd" />
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                            <input className="form-check-input"
                            onChange={(element)=>this.RememberMeChangeHandler(element)}
                             type="checkbox" value="RememberMe" /> Remember me
                     </label>
                    </div>
                    <button type="button" className="btn btn-primary">Submit</button>
                    {this.state.EmailId}/{this.state.Password}/{this.state.RememberMe?"RememberMe":"Not Remember Me"}
                </div>
            </div>
        );
    }
}

export default Login;