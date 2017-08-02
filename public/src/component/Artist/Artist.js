import * as React from "react";
import Link from "react-router-dom/es/Link";
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';

export default class Artist extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Link to={`/Artist/${this.props.artist.id}`}>
                <Card className="artist-card">
                    <CardMedia
                        overlay={<CardTitle title={this.props.artist.name} subtitle="Card subtitle" />}
                    >
                        <img src={this.props.artist.image} alt={'Artist image of ' + this.props.artist.name} />
                    </CardMedia>

                </Card>
            </Link>
        )
    }
}