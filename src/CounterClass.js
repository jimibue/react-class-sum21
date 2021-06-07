import React from 'react'

class CounterClass extends React.Component {
    // new way to declare state with out having
    // to use constructor
    state = {
        value: 0
    }

    // constructor(props) {
    //     super(props)
    //     // this key is like self in ruby
    //     // state is always going a object js object ie {}
    //     this.state = {
    //         value: 0
    //     }

    //     // this.increment = this.increment.bind(this)
    // }
    componentDidMount = () =>{
        console.log('component Mounted')
    }

    // need to be carefull calling setState in this
    // method inifinte loop potential
    componentDidUpdate(prevProps, prevState){
        console.log('Component Updated')
        console.log(prevState)
        if(this.state.value > 10) {
            this.setState({
                value:0
            })
        }

    }

    componentWillUnmount() {
        console.log('component Unmounted')
    }

    // instance method
    // arrow function binds this to what it should
    /// be the instance yeah for es6
    increment = () => {
        // this.state.value += 1
        // can't mutate state directly
        // we can setState and pass it new state
        this.setState({
            value: this.state.value + 1
        })
        // when we call set state that will render
        // to be called again (which update UI)
    }

    decrement = () => {
        this.setState({
            value: this.state.value - 1
        })
      
    }

    // there one method I have to define
    render(){
        console.log('render Called')
        return (
            <div>
                <h1>{this.props.name ? this.props.name : "counter"}</h1>
                <p>{this.state.value}</p>
                <button onClick={this.increment}>add</button>
                <button onClick={this.decrement}>minus</button>
            </div>
        )
    }
}

export default CounterClass