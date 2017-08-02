import React from 'react';
import Artist from "./Artist/Artist";
import axios from "axios";

export default class FavouriteArtists extends React.Component {
    constructor(props) {
        super(props);
        this.state ={artist:{}};
    }

    componentDidMount(){
        this.loadInformation();
    }

    loadInformation(){
        //TODO change to correct username
        return axios.get('/api/users/ramclen/favourites')
            .then(function(response){
                this.setState({
                    artists: response.data.map(artist=>{
                        return (<Artist artist={artist} key={artist.id} />)
                    })
                });
            }.bind(this))
    }

    render() {
        return (
            <div>
                <h1>Your Favourite Artists</h1>
                <div className="artist-section">
                    {this.state.artists}
                </div>
            </div>
        );
    }


}