import React, {Component} from 'react';
import LengthConverter from './components/length_converter'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <LengthConverter />
            </div>
        )
    };

}

export default App;
