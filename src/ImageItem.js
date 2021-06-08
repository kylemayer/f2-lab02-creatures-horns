import React, { Component } from 'react'
export default class ImageItem extends Component {
    render() {
        return (
            <div className="horned-creature">
                <div>
                    <img src={this.props.url} alt="" />
                </div>
                <h3>{this.props.title}</h3>
                <span>{this.props.description}</span>
                <p># of Horns: {this.props.horns}</p>
            </div>
        )
    }
}
