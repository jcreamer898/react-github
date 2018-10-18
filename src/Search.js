import React from 'react';

/**
 * @augments {React.Component<ISearchProps, ISearchState>}
 */
export class Search extends React.Component {
    state = {
        query: '',
        user: null,
    };

    componentWillReceiveProps(nextProps) {
        if (!this.props.query && nextProps.query) {
            this.search(nextProps.query);
        }
    }

    /**
     * @param {React.FormEvent<HTMLInputElement>} e
     */
    updateSearch = (e) => {
        this.setState({
            query: e.target.value,        
        })
    }
    /**
     * @param {React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>} e
     */
    searchSubmit = (e) => {
        e.preventDefault();

        this.search(this.state.query);
    }

    search(query) {
        fetch(`https://api.github.com/users/${query}?access_token=${process.env.REACT_APP_GITHUB_TOKEN}`)
            .then((res) => res.json())
            .then((user) => {
                if (this.props.onSearch) {
                    this.props.onSearch(user);
                }

                this.setState({
                    user,
                });
            })
    }

    render() {
        return (
            <form className='search' onSubmit={this.searchSubmit}>
                <input className='search__input' onChange={this.updateSearch} placeholder='Github username...' />
                <button className='search__button' onClick={this.searchSubmit}>Search</button>
                {this.state.user && this.props.render(this.state.user)}
            </form>
        )
    }
}