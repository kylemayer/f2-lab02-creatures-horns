import React, { Component } from 'react'
import ImageItem from './ImageItem';

export default class ImageList extends Component {

    render() {
        return (
            <div className="creature-section">
                {this.props.img.map((item, i) =>
                <ImageItem
                key= {i}
                url={item.url}
                name={item.title}
                horns={item.horns}
                description ={item.description} />
                )}
            </div>
        )
    }
}