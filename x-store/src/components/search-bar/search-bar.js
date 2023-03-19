import React from 'react';
import './search-bar.css';
export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  componentDidMount() {
    const savedValue = localStorage.getItem('search-value');
    if (savedValue) {
      this.setState({ value: savedValue });
    }
  }
  componentWillUnmount() {
    const inputStateValue = this.state.value;
    if (inputStateValue) {
      localStorage.setItem('search-value', inputStateValue);
    }
  }
  handleSearchChange(input) {
    const value = input.target.value;
    this.setState({ value: value });
  }
  render() {
    return React.createElement(
      'div',
      { className: 'search-wrapper' },
      React.createElement('input', {
        role: 'search',
        className: 'search__input',
        type: 'text',
        placeholder: 'type something...',
        onChange: this.handleSearchChange,
        value: this.state.value,
      }),
      React.createElement('button', { className: 'search__btn' }, 'Search')
    );
  }
}
