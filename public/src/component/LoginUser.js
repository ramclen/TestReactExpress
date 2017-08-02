import * as React from "react";
import Link from "react-router-dom/es/Link";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class LoginUser extends React.Component{
    constructor(props){
        super(props);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    handleUsernameChange(e){
        this.props.handleUsername(e.target.value);
    }

    render(){
        return (
            <div style={{marginLeft:"35%"}}>
                <img src="http://logosrated.net/wp-content/uploads/parser/React-Logo-1.png" alt="Page logo"/>
                <div style={{marginLeft:"33px"}}>
                    <TextField hintText="Username" onChange={this.handleUsernameChange} value={this.props.username} type="text"/>
                    <Link to="/artists"><RaisedButton label="Submit" primary={true}/></Link>
                </div>
            </div>
        );
    }
}