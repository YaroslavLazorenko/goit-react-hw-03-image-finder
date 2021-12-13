import { Component } from 'react';
import { PropTypes } from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  static propTypes = {
    galleryImageURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
  };

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
