import React from 'react'

function createUser() {
  return (
    <div style={{border:"1px solid black", width:"150px", height:"200px"}}>
      <form action="">
        <label>Username</label>
        <input type="text" name="username"/>
        <label>Password</label>
        <input type="password" name="password"/>
        <label>Email</label>
        <input type="email" name="email"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default createUser;
