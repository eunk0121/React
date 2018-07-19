//import는 ES6문법으로 var React = require('react'); 와 같은 의미
import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    render(){

        return (
            <div>
                <h1>Hello React Skeleton!!!!!!</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => { this.setState({value: this.state.value + 1}) }}>CLICK ME</button>
            </div>
        );
    }
}

export default App;//다른곳에서 불러서 사용가능하도록 export하는것으로 module.export = App;과 같은 의미
