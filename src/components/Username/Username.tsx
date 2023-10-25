const Username = ({ setUsername }: { setUsername: (value: string) => void }) => {

  let inputValue : string
  return (
    <div className='usernameContainer'>
      <h1 className='globalTitle usernameTitle'> What is your name? </h1>

      <input className="w-1/2 h-8 border-slate-200 rounded placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
        onKeyUp={(e) => {
          e.preventDefault()
          const element = e.currentTarget as HTMLInputElement
          const value = element.value
          inputValue = value
        }}
      />

      <button className='usernameBtn' onClick={()=> {setUsername(inputValue)}}>Submit</button>
    </div>
  )
}

export default Username