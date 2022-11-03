// ProfileCard compo need this

import Carousel from 'react-bootstrap/Carousel';

const ImageCarousel = ({userProfile}) => {

    const imagesCarousel = userProfile.coverImage.concat(userProfile.images)

    return (
        <>
        <Carousel slide={false} interval={1500}>
        {imagesCarousel.map((image) => {
            return (
                
                <Carousel.Item>
                <img
                className="d-block w-100"
                src={image}
                alt="profile image"
                />
                </Carousel.Item>

            )
        })}
        </Carousel>
        </>
    )
}

export default ImageCarousel