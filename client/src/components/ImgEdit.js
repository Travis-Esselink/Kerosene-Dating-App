import Cross from '../images/cross-48.png'

const ImgEdit = ({image, setImages}) => {

    const handleDelete = async () => {
        const imageID = image.slice(image.lastIndexOf('/')+1)
        const res = await fetch(`/v1/remove-image/${imageID}`,{
            method:'PUT'
        })
        const newImages = await res.json()
        setImages(newImages)
    }

    return (
        <div className="img-cross">
            <img className="img-del" src={Cross} onClick={handleDelete} />
            <img className="img-edit" src={image}/>

        </div>
    )
}

export default ImgEdit