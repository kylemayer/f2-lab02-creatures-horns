import React, { Component } from 'react';
import ImageItem from './ImageItem.js';


export default class ImageList extends Component {
    state = {
        keyFilter:'',
    }

handleChange = (e) => {
    this.setState({
        keyFilter: e.target.value,
    })
}

    render() {
        const keyCreatures = this.props.images.filter((creature) => {
            if (!this.state.keyFilter) return true;
            if (creature.keyword === this.state.keyFilter) return true;
            return false;
        });

        return (
            <div>
                <span>Filter by species: </span>
                <select onChange={this.handleChange}>
                    <option value=''>Show All</option>
                    <option value='rhino'>Rhino</option>
                    <option value='narwhal'>Narhwal</option>
                    <option value='unicorn'>Unicorn</option>
                    <option value='unilego'>Unilego</option>
                    <option value='triceratops'>Triceratops</option>
                    <option value='markhor'>Markhor</option>
                    <option value='mouflon'>Mouflon</option>
                    <option value='addax'>Addax</option>
                    <option value='chameleon'>Chameleon</option>
                    <option value='lizard'>Lizard</option>
                    <option value='dragon'>Dragon</option>
                </select>
                <div className="creature-section">
                    {
                        keyCreatures.map(creature =>
                            <ImageItem
                                url={creature.url}
                                title={creature.title}
                                description={creature.description}
                                keyword={creature.keyword} />)
                    }
                </div>
            </div>
        )
    }
}
