import React, { Component } from 'react';
import ImageItem from './ImageItem.js';


export default class ImageList extends Component {
    state = {
        keyFilter:'',
        hornFilter:''
    }

handleChangeKey = (e) => {
    this.setState({
        keyFilter: e.target.value,
    })
}

handleChangeHorn = (e) => {
    this.setState({
        hornFilter: e.target.value,
    })
}

    render() {
        const keyCreatures = this.props.images.filter((creature) => {
            if (!this.state.keyFilter) return true;
            if (creature.keyword === this.state.keyFilter) return true;
            return false;
        });
        const hornCreatures = keyCreatures.filter((creature) => {
            if (!this.state.hornFilter) return true;
            if (+creature.horns === +this.state.hornFilter) return true;
            return false;
        });

        return (
            <div>
                <label>Filter by species: <span></span>
                <select onChange={this.handleChangeKey}>
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
                </label>
                <label> or by # of horns: <select onChange={this.handleChangeHorn} >
                    <option value=''>Show All</option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                    <option value='100'>One Hundred</option>
                </select>
                </label>
                <div className="creature-section">
                    {
                        hornCreatures.map(creature =>
                            <ImageItem
                                url={creature.url}
                                title={creature.title}
                                description={creature.description}
                                horns={creature.horns} />)
                    }
                </div>
            </div>
        )
    }
}
