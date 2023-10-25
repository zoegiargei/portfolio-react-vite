const Letter = ({ letter } : { letter: string }) => {
    return(
        <div className='letterContainer'>
            <h1 className='letterContainer__letter'>{ letter }</h1>
        </div>
    )
}
export default Letter