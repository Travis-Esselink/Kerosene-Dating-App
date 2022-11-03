import Cross from '../images/cross-48.png'

const imageEdit = ({image}) => {

    const removeImage = () => {
        console.log('a')
    }    

    const handleDelete = () => {
        console.log('delete called')
    }

    return (
        <div className="img-cross">
            <img src={image}/>
            <img src={Cross} onClick={handleDelete}/>
        </div>
    )
}

export default imageEdit