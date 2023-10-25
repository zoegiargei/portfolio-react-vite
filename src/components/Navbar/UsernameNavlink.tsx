const UsernameNavlink = ({ username }: { username: string }) => {
    if(username !== ''){
        const text = `{ Hello ${ username }! }`
        return(
            <li className='navbarContainer__username animate__animated animate__flash'>{ text }</li>
        )
    }
}
export default UsernameNavlink