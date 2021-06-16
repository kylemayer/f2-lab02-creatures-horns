import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                <select onChange={this.props.handleSelection}>
                    <option value = ''>-- select --</option>
                        {this.props.options.map(option => <option value={option}>{option}</option>)}
                </select>
            </div>
        )
    }
}