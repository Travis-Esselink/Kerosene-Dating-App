
const MatchThumb = ({profile}) => {
    return (
        <>
            <div>
            <img className='match-thumb' src={profile.coverImage}/>
            <p className='match-thumb-name'>{profile.displayName}</p>
            </div>
        </>
    )
}




export default MatchThumb