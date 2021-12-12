import { Component } from 'react';

export default class ImageGalleryItem extends Component {
  render() {
    const { galleryImageURL, largeImageURL, tags } = this.props;
    return (
      <li className="gallery-item">
        <img src={galleryImageURL} data-src={largeImageURL} alt={tags} />
      </li>
    );
  }
}
