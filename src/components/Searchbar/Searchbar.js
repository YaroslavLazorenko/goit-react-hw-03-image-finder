import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
  state = { value: '' };

  onChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.value.trim()) {
      this.props.onSubmit(this.state.value);
      this.resetForm();
      return;
    }
    toast('Please, enter your request in search field');
  };

  resetForm = () => {
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;

    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={this.onChange}
          />
        </form>
        <ToastContainer autoClose={3000} />
      </header>
    );
  }
}
