import { Component } from 'react';
import styles from './Button.module.css';

export default class Button extends Component {
  render() {
    const { loadMorePictures } = this.props;

    return (
      <button className={styles.Button} onClick={loadMorePictures}>
        Load more
      </button>
    );
  }
}
