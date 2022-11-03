import Cross from '../images/cross-48.png'

const imageEdit = ({image}) => {

    removeImage = () => {

    }

    const handleDelete = () => {
        console.log('de;ete called')
    }

    return (
        <div className="img-cross">
            <img src={image}/>
            <img src={Cross} onClick={handleDelete}/>
        </div>
    )
}

export default imageEdit