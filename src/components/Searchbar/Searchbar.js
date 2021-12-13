import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired };

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
    toast('Please, enter your request in search field', { toastId: 'Searchbar-toast' });
  };

  resetForm = () => {
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;

    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={styles['SearchForm-button']}>
            <span className={styles['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={styles['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={this.onChange}
          />
        </form>
      </header>
    );
  }
}
