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
            <img className="img-del" src={Cross} onClick={handleDelete} />
            <img src={image}/>

        </div>
    )
}

export default imageEdit