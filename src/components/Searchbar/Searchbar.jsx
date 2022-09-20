import { Component } from 'react';
import { FcSearch } from "react-icons/fc";
import s from "./Searchbar.module.css"
import PropTypes from 'prop-types';

export class Searchbar extends Component {
    state = {
        queryInput: "",
    }

    changInput = (event) => {
        this.setState({ queryInput: event.currentTarget.value.toLowerCase().trim()});
    }

    formSubmit = (event) => {
        event.preventDefault();
        const {queryInput} = this.state
        if(queryInput.trim() === ""){
            this.props.value()
            return
        }
        this.props.onSubmit(queryInput)
        this.reset()
    }

    reset = () => {
        this.setState({ queryInput: "" });
      };

render() {
    const {queryInput} = this.state
    return (
        <header className={s.searchbar}>
            <form className={s.searchForm} onSubmit={this.formSubmit}>
                <button type="submit" className={s.searchFormButton}>
                    <FcSearch/>
                </button>
                <input
                className={s.searchFormInput}
                type="text"
                value={queryInput}
                onChange = {this.changInput}
                autocomplete="off"
                autofocus
                placeholder="Search images and photos"
                />
            </form>
        </header>
    )

}
}
Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}