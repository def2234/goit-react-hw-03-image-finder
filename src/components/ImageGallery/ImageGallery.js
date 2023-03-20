import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { PendingViewImage } from '../Loader/Loader';
import PropTypes from 'prop-types';

export const ImageGallery = ({ status, error, image, onPictureClick }) => {
  return (
    <ul>
      {status === 'rejected' && <h1>{error.message}</h1>}
      {status === 'pending' && <PendingViewImage />}
      {status === 'resolved' &&
        image.map(picture => (
          <ImageGalleryItem
            key={picture.id}
            pictureUrl={picture}
            clickPicture={() => onPictureClick(picture.largeImageURL)}
          />
        ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  image: PropTypes.arrayOf(PropTypes.object.isRequired),
  status: PropTypes.string.isRequired,
  error: PropTypes.shape({ message: PropTypes.string.isRequired }),

  onPictureClick: PropTypes.func.isRequired,
};
