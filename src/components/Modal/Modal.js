import { Component } from 'react';
import styles from './Modal.module.css';

export default class Modal extends Component {
  render() {
    const { largeImageURL, tags } = this.props;

    return (
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <img className={styles.Image} src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}
