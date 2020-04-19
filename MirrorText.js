import React, { Component } from 'react'

class MirrorText extends Component {
  state = { mirror:'' }
  handleChange = (e) => {
    this.setState({mirror: e.target.value.split('').reverse().join('')})
  }

  render() {
    return (
      <div className="container">
          <input type="text" placeholder="Say Something"  onChange={this.handleChange} />
          <p className="echo">Echo:</p>
          <p>{this.state.mirror}</p>
        </div>
    )
  }
}

export default MirrorText;