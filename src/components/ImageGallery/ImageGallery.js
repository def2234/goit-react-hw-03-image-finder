import React, { Component } from 'react';
import { GetImage } from '../GetImage/GetImage';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { PendingViewImage } from '../PendingViewImage/PendingViewImage';

export const ImageGallery = ({
  status,
  error,
  image,
  onPictureClick,
  onClick,
}) => {
  return (
    <ul onClick={onPictureClick}>
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

// render() {
//     return (
//       <ul onClick={this.props.onPictureClick}>
//         {this.props.status === 'rejected' && (
//           <h1>{this.props.error.message}</h1>
//         )}
//         {this.props.status === 'pending' && <PendingViewImage />}
//         {this.props.status === 'resolved' &&
//           this.props.image.map(picture => (
//             <ImageGalleryItem
//               key={picture.id}
//               pictureUrl={picture}
//               clickPicture={() =>
//                 this.props.onPictureClick(picture.largeImageURL)
//               }
//             />
//           ))}
//         {this.props.status === 'resolved' && (
//           <Button onClick={this.props.onClick} />
//         )}
//       </ul>
//     );
//   },
