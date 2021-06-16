import React, { Component } from 'react';
import './App.css';
import creatures from './data.js';
import Header from './Header.js';
import Dropdown from './Dropdown';
import ImageList from './ImageList.js';

export default class App extends Component {
  state = {
    keyFilter: '',
    hornFilter: ''
}

creatureSelect = (e) => {
    this.setState({
        keyFilter: e.target.value
    });
}

hornsSelect = (e) => {
    this.setState({
        hornFilter: e.target.value
    });
}

render() {

  let filterCreatures = creatures;

  if (this.state.keyFilter) {
    filterCreatures = filterCreatures.filter(creature => creature.keyword === this.state.keyFilter)
  }

  if (this.state.hornFilter) {
    filterCreatures = filterCreatures.filter(creature => creature.horns === +this.state.hornFilter)
  }

  const keysRepeat = creatures.map(creature => creature.keyword)
  const keysSet = new Set(keysRepeat)
  const keysOptions = Array.from(keysSet)

  const hornsRepeat = creatures.map(creature => creature.horns)
  const hornsSet = new Set(hornsRepeat)
  const hornsOptions = Array.from(hornsSet)

    return (
      <div className="App">
        <Header />
        <span>Filter by name:</span>
        <Dropdown options={keysOptions} handleSelection={this.creatureSelect} />
        <span>Filter by # of horns:</span>
        <Dropdown options={hornsOptions} handleSelection={this.hornsSelect} />
        <ImageList img={filterCreatures} />
      </div>
    );
  }
}