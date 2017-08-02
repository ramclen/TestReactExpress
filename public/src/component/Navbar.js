import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';

export default class Navbar extends React.Component {

    goBack (){
        window.history.back();
    }

    render() {
        return (
            <AppBar title=""
                    onLeftIconButtonTouchTap={this.goBack}
                    iconClassNameLeft="fa fa-arrow-left">

                <Avatar size={50}
                        style={{margin:"10px"}}
                        src="https://www.b1g1.com/assets/admin/images/no_image_user.png" />
                <span className="username-text">{this.props.username}</span>
            </AppBar>
        )
    }
}