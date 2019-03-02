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

    inputRef = React.createRef();
    textAreaRef = React.createRef();
    selectRef = React.createRef();

    handleChange =() => {
        this.setState({
            inputText: this.inputRef.current.value,
            textAreaText: this.textAreaRef.current.value,
            selectText: this.selectRef.current.value,
        });
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

    componentWillMount() {
        console.log("cwm", this.inputRef)
    }

    componentDidMount() {
        console.log("cdm", this.inputRef)
    }

    render() {
        const {inputText, textAreaText, selectText, showData} = this.state;
        const {name, text, position} = showData;
        return (
            <Fragment>
                <form>
                    {/*Input*/}
                    <label>
                        <input ref={this.inputRef} type="text" name="name" value={inputText} onChange={this.handleChange}/>
                    </label>
                    {/*TextArea*/}
                    <label htmlFor="text">Text:</label>
                    <textarea ref={this.textAreaRef} id="text" value={textAreaText} onChange={this.handleChange}/>
                    {/*Select*/}
                    <select ref={this.selectRef} value={selectText} onChange={this.handleChange}>
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