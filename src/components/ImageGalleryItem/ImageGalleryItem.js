import { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    const { galleryImageURL, largeImageURL, tags, openModal } = this.props;

    return (
      <li
        className={styles.ImageGalleryItem}
        onClick={() => {
          openModal(largeImageURL, tags);
        }}
      >
        <img
          className={styles['ImageGalleryItem-image']}
          src={galleryImageURL}
          data-src={largeImageURL}
          alt={tags}
        />
      </li>
    );
  }
}
