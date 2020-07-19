import React, {Component} from 'react';

class LengthInput extends Component {
    render() {
        return (
            <div>
                <input type="text"
                       name={this.props.inputName}
                       onChange={this.props.convertLength}/>
                <select name={this.props.selectName}
                        onChange={this.props.handleChangeConversion}
                        defaultValue={this.props.selectedconversion}>
                    {
                        this.props.dropDownFields.map(con => (
                            <option key={con}>{con}</option> ))
                    }
                </select>
            </div>
        )
    }
}
export default LengthInput;