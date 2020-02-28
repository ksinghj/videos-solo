import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = e => {
        this.setState({ term: e.target.value });
    }

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="container is-fluid field">
                <form onSubmit={this.onFormSubmit}>
                    <label className="label">Youtube search</label>
                    <div className="control">
                        <input onChange={this.onInputChange} className="input" type="text" placeholder="Text input" />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
