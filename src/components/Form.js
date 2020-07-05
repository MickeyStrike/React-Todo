import React, { Component } from 'react'

export default class Form extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     title: '',
  //     date: null
  //   }
  //   console.log(props, "<<<< ini props di constructor")
  // }


  // onChange = (e) => {
  //   this.setState({ title: e.target.value })
  // }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    e.target.name === 'title' ? this.props.functionParent(e.target.value, null) : this.props.functionParent(null, e.target.value)
  }

  componentWillMount() {
    console.log('ini will mount')
  }

  componentDidMount() {
    console.log('ini did mount')
  }

  componentDidUpdate() {
    console.log('ini update')
  }

  render() {
    return (
      <>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Title</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" onChange={this.onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Date</label>
          <input type="date" className="form-control" id="exampleInputPassword1" placeholder="DD/MM/YYYY" name="date" onChange={this.onChange} />
        </div>
      </form>
      </>
    )
  }
}
