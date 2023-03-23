import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import PropTypes from 'prop-types';
import { Ul } from '../ImageGallery/ImageGallery.styled';

export const ImageGallery = ({ image, onPictureClick }) => {
  return (
    <Ul>
      {image.map(picture => (
        <ImageGalleryItem
          key={picture.id}
          pictureUrl={picture}
          clickPicture={() => onPictureClick(picture.largeImageURL)}
        />
      ))}
    </Ul>
  );
};

ImageGallery.propTypes = {
  image: PropTypes.arrayOf(PropTypes.object.isRequired),

  onPictureClick: PropTypes.func.isRequired,
};
