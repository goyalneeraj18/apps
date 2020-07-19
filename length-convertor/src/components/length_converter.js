import React, {Component} from 'react';
import './LengthConverter.css';
import assignConversion from './functions/assign_conversion';
import convert from "./functions/convert";
class LengthConverter extends Component {
    state = {
        unitA : 'kilometer',
        unitB : 'meter',
        value : '',
        userInputA : 'inputA',
        userInputB : 'inputB',
        inputA : true,
        conversions : ['kilometer','meter','yard']
    };
    inputChangeHandler() {
        alert("Hi");
    }
    dropDownChangeHandler = (event) => {

    }
    render() {
        const VALUE = this.state.value;
        const ATOB = assignConversion(this.state.unitA, this.state.unitB);
        const BTOA = assignConversion(this.state.unitB, this.state.unitA);
        return (
            <div className="App">
                <h1>Length Converter</h1>
                <br/>
                <LengthConverter inputName={this.state.userInputA}
                                     value={this.state.value ? VALUE : convert(VALUE, BTOA)}
                                 dropDownFields={this.state.conversions}
                                 selectedconversion={this.state.unitA}
                                 convertLength = {this.inputChangeHandler}
                                 handleChangeConversion = {this.dropDownChangeHandler}
                                 selectName="from" />
                <LengthConverter inputName={this.state.userInputB}
                                 value={this.state.value ? VALUE : convert(VALUE, ATOB)}
                                 dropDownFields={this.state.conversions}
                                 selectedconversion={this.state.conversionB}
                                 handleChangeConversion = {this.dropDownChangeHandler}
                                 selectName="to"/>
            </div>
        );
    }
}

export default LengthConverter;