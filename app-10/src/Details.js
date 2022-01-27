import React, { Component } from 'react';
import axios from 'axios'


class Details extends Component {
  constructor() {
      super()

      this.state = {
          item: {}
      }
  }

  componentDidMount() {
      axios
        .get(
            `https://practiceapi.devmountain.com/products/${
                this.props.match.params.id
            }`
        )
        .then(response => {
            this.setState({ item: response.data })
        })
  }
    render() {
        return (
            <div>
                <h2>{this.state.item.title}</h2>
                <img alt="price" width="200" src={this.state.item.price} />
                <h4>{`Price: {this.state.item.price}.00`}</h4>
            </div>
        )
    }
}

export default Details
