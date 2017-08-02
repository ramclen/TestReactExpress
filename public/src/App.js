import React from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import FavouriteArtists from "./component/FavouriteArtists";
import LoginUser from "./component/LoginUser";
import ArtistInformation from "./component/Artist/ArtistInformation";
import Navbar from "./component/Navbar";

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={username:""};
        this.handleUsername = this.handleUsername.bind(this);
    }

    handleUsername(username){
        this.setState({
            username: username
        });
    }

    render(){
        return (
            <div>
                <Navbar username={this.state.username}/>
                <Router>
                    <div>
                        <Route exact path="/" render={()=><LoginUser username={this.state.username} handleUsername={this.handleUsername} />} />
                        <Route path="/artists" render={()=><FavouriteArtists username={this.state.username} />} />
                        <Route path="/artist/:id" component={ArtistInformation} />
                    </div>
                </Router>
            </div>
        );
    }
}