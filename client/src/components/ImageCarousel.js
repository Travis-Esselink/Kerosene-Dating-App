// ProfileCard compo need this

import Carousel from 'react-bootstrap/Carousel';

const ImageCarousel = ({userProfile}) => {

    const imagesCarousel = userProfile.coverImage.concat(userProfile.images)

    return (
        <>
        <Carousel>
        {imagesCarousel.map((image) => {
            return (
                <Carousel.Item>
                <img
                className="d-block w-100 image-size"
                src={image}
                alt="First slide"
                />
                </Carousel.Item>
            )
        })}
        </Carousel>
        </>
    )
}

export default ImageCarousel