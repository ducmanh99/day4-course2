import React, { useState } from 'react'

const Ex2 = () => {
    const [input, setInput] = useState("");
    const handleChange = (e) =>{
        setInput(e.target.value)
    }
    const [pass, setPass] = useState("")
    const passChange = (e) =>{
        setPass(e.target.value)
    }
    const [pass2, setPass2] = useState("")
    const pass2Change = (e) =>{
        setPass2(e.target.value)
    }

    const handleSubmit = e =>{
        e.preventDefault()
        setInput("")
        setPass("")
        setPass2("")
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <input type="password" value={pass} onChange={passChange} />
        <input type="password" value={pass2} onChange={pass2Change} />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Ex2