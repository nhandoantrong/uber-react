import React, { Component } from 'react'

export default class InputNumber extends Component {

    state={
        number:""
    }

    handleOnChange = (event)=>{
        this.setState({
            number: event.target.value.length>0&& this.state.number.length>0? this.state.number: event.target.value
        })
    }
    render() {
        return (
            <input type="text" name="number" onChange={this.handleOnChange} value={this.state.number}/>
        )
    }
}
