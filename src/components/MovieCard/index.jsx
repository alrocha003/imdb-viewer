import React from "react";
import { Card } from './style.js';

class MovieCard extends React.Component {

    render() {
        const { title, content } = this.props;

        return (
            <Card>
                <p>{title}</p>
                <br />
                <p>{content}
                </p>
            </Card>
        );
    }
}

export default MovieCard;