import { Component } from 'react';
import { PropTypes } from 'prop-types';
import styles from './Button.module.css';

export default class Button extends Component {
  static propTypes = {
    loadMorePictures: PropTypes.func.isRequired,
  };

  render() {
    const { loadMorePictures } = this.props;

    return (
      <button className={styles.Button} onClick={loadMorePictures}>
        Load more
      </button>
    );
  }
}
