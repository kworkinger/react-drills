import React, { Component } from 'react'

export default class Img extends Component {

    render() {
        return (
            <div>
                <img src={this.props.url} />
                <div>Error 599</div>
            </div>
        )
    }
}