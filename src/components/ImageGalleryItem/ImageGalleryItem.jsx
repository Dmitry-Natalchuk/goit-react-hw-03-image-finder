import PropTypes from 'prop-types'
import s from "./ImageGalleryItem.module.css"


export const ImageGalleryItem = ({image,onClick}) => {
    const {webformatURL, tag, largeImageURL} = image;
    return(<li className={s.imageGalleryItem}>
            <img className={s.imageGalleryItem-image} 
            src={webformatURL} 
            alt={tag} 
            onClick={() => onClick(largeImageURL)} />
        </li>)
}

ImageGalleryItem.propTypes = {
    items: PropTypes.exact({
        webformatURL: PropTypes.string,
        tag: PropTypes.string,
        largeImageURL: PropTypes.string,
    }),
    onClick: PropTypes.func,
};