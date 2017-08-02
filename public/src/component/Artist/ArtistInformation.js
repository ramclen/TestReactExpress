import * as React from "react";
import axios from "axios";

export default class ArtistInformation extends React.Component{
    constructor(props){
        super(props);
        this.state ={artist:{albums:[]}};
    }

    componentDidMount(){
        this.loadInformation();
    }

    loadInformation(){
        console.log(this.props.match.params);
        return axios.get(`/api/artist/${this.props.match.params.id}/info`)
            .then(function(response){
                this.setState({artist: response.data});
            }.bind(this))
    }

    render(){

        return (
            <div className="artist-info" >
                <h2>{this.state.artist.name}</h2>

                <div className="artist-image">
                    <img src={this.state.artist.image} alt={"Image from "+ this.state.artist.name}/>
                </div>
                <div className="artist-description">
                    <p>{this.state.artist.description}</p>
                    <ul>
                        {this.state.artist.albums
                            .map(album=><li key={album}>{album}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}