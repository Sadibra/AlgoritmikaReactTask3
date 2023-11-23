import React, { useState } from 'react'

const UserLogin = () => {

  const [inputValue,SetInputValue] = useState('')

  const changeHandler = e => {
    SetInputValue(e.target.value) 
  }
  const submitHandler = e => {
    e.preventDefault();
    if (!inputValue.endsWith('.ru')) {
      alert('mail should end with .ru')
    }
    else {
      alert("Success")
    }
  }

  return (
    <div className='container'>
        <form onSubmit={submitHandler}>
            <input onChange={changeHandler} value={inputValue} placeholder='example@mail.ru' type="email" />
            <br /> <br />
            <input minLength={8} placeholder='Password' type="password" />
            <br /> <br />
            <button onClick={submitHandler} type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default UserLogin