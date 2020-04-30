import React, { Component } from 'react';
import './AutoCompleteText.css';


class AutoCompleteText extends Component {
    constructor(props) {
        super(props);
        this.items = props.list;

        this.state = {
            suggestions: [],
            text: '',
        };
    }
    onTextChange = (event) => {
        let value = event.target.value;
        let suggestions = [];
        if(value.length > 0){
            let regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter((v)=> regex.test(v));
        }

        this.setState(()=> ({ suggestions, text: value }));
    }

    suggestionSelected = (value) => {
        this.setState({ 
            text: value,
            suggestions: []
        });
    };

    renderSuggestions = () => {
        const { suggestions } = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return (
            <ul>
                {suggestions.map(item => <li onClick={() => this.suggestionSelected(item)}>{item}</li> )}
            </ul>
        )
    };

    render() {
        let { text } = this.state;
        return (
            <div className="AutoCompleteText">
                <input value={text} type="text" onChange={this.onTextChange} />
                {this.renderSuggestions()}
            </div>
        );
    }
}

export default AutoCompleteText;
