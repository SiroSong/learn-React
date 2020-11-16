import * as React from 'react'

export default class ClassChild extends React.Component {

  state = {
    text: ''
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        text: 'hello world'
      })
    }, 2000);

    this.setState(() => {
      return {
        text: 'HELLO WORLD'
      }
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        {this.props.children}
      </div>
    )
  }
}
