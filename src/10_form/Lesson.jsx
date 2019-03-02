import React, {Component, Fragment} from 'react';

const POSITIONS = [
    {
        id: 'fd',
        value: 'Front-end developer',
        title: 'Front-end developer',
    },
    {
        id: 'bd',
        value: 'Back-end developer',
        title: 'Back-end developer',
    }
]

class Form extends Component {
    state = {
        inputText: '',
        textAreaText: '',
        selectText: '',
        showData: {
            name: '',
            text: '',
            position: '',
        }
    }

    handleInputChange = ({ target: { value } }) => {
        this.setState({
            inputText: value,
        })
    }

    handleTextAreaChange = ({ target: { value } }) => {
        this.setState( {
            textAreaText: value,
        })
    }

    handleSelectChange = ({ target: { value } }) => {
        this.setState( {
            selectText: value,
        })
    }

    handleShow = (e) => {
        e.preventDefault();
        const { inputText, textAreaText, selectText } = this.state;
        this.setState({
                inputText: '',
            textAreaText: '',
            selectText: '',
            showData: {
                name: inputText,
                text: textAreaText,
                position: selectText,
            }
        })

    }

    render() {
        const {inputText, textAreaText, selectText, showData} = this.state;
        const {name, text, position} = showData;
        return (
            <Fragment>
            <form>
                {/*Input*/}
                <label>
                    <input type="text" name="name" value={inputText} onChange={this.handleInputChange}/>
                </label>
                {/*TextArea*/}
                <label htmlFor="text">Text:</label>
                <textarea id="text" value={textAreaText} onChange={this.handleTextAreaChange}/>
                {/*Select*/}
                <select value={selectText} onChange={this.handleSelectChange}>
                    {POSITIONS.map(({id,value, title}) => (
                        <option key={id} value={value}>{title}</option>
                    ))}
                </select>
                {/* Button */} <br/>
                <button onClick={this.handleShow}>Show</button>
            </form>
                <h2>{name}</h2>
                <h3>{text}</h3>
                <h3>{position}</h3>
            </Fragment>
        );
    }
}

export default Form;