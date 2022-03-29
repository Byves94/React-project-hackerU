import React from "react";
import products from "../Data/products";
import ResultList from "./ResultList";
import "./Searchbar.css";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: "",
        }
    }
    onChange = (text) => {
        let userInput = text.target.value;
        let filter = [];
        if (userInput.length > 0) {
            filter = products.filter(
                (filteredSuggestions) =>
                    filteredSuggestions.name.toLowerCase().trim().indexOf(userInput.toLowerCase()) > -1);
        }
        if (userInput.length == 0) {
            this.setState({
                filteredSuggestions: filter,
                showSuggestions: false,
                userInput: userInput
            });
        }
        else {
            this.setState({
                filteredSuggestions: filter,
                showSuggestions: true,
                userInput: userInput
            });
        }
    }
    onClick = (listItem) => {
        const input = document.querySelector('input');
        this.setState({
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: input.value = listItem.currentTarget.innerText
        });
    }
    onSubmit = (form) => {
        let inputBox = document.querySelector('input');
        form = document.querySelector('form');
        let input = inputBox.value;
        console.log(input);
        let actionPath;
        if (input == undefined)
            actionPath = "/Shop";
        else {
            for (let i = 0; i < products.length; i++) {
                if (input != products[i].name) {
                    actionPath = "/SearchNotFound";
                }
                else {
                    actionPath = `/Shop/${input}`;
                    break;
                }
            }

        }
        form.action = actionPath;
    }


    render() {
        if (this.state.showSuggestions) {
            return (
                <>
                    <form method="get" className="header-search">
                        <input
                            type="text"
                            placeholder="Search ducks"
                            onChange={this.onChange}
                            value={this.userInput}
                        />
                        <button type="submit" className="search-submit" onClick={this.onSubmit}>Search🐤</button>
                    </form>
                    <ResultList
                        result={this.state.filteredSuggestions.map(
                            (filteredSuggestions) =>
                                <div className='list-item'
                                    onClick={this.onClick}
                                    key={filteredSuggestions.name}>
                                    <img src={filteredSuggestions.image} height="20" />
                                    {filteredSuggestions.name}
                                </div>)} />
                </>
            );
        }
        else {
            return (
                <form method="get" className="header-search">
                    <input
                        type="text"
                        placeholder="Search ducks"
                        onChange={this.onChange}
                        value={this.userInput}
                    />
                    <button type="submit" className="search-submit" onClick={this.onSubmit}>Search🐤</button>
                </form>
            )
        }
    }
}


export default SearchBar;