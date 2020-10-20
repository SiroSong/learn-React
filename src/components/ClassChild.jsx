import * as React from 'react'

export default class ClassChild extends React.Component {

  state = {
    text: ''
  }

  componentDidMount() {
    this.setState({
      text: 'hello world'
    })
  }

  render() {
    return (
      <div>
        ClassChild
        <span>{this.state.text}</span>
      </div>
    )
  }
}
