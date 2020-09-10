import React, { Component } from 'react'

type MyProps = {};
type MyState = {username: string};

export default class Form extends Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props)
    
        this.state = {
             username: ''
        }
    }
    
    myChangeHandler = (event: { target: { value: any; }; }) => {
        this.setState({username: event.target.value});
    }

    render() {
        return (
            <form>
                <h1>Hello {this.state.username}</h1>
                <p>Enter your name:</p>
                <input type="text" onChange={this.myChangeHandler} />
            </form>
        )
    }
}
