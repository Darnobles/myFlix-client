import React from 'react';

function UpdateUser({handleSubmit, handleUpdate}) {
  return (
    <form className='profile-form' onSubmit={() => handleSubmit(e)}>
      <h2>Change info here:</h2>
      <label>Username:</label>
      <input
        type='text'
        name='Username'
        defalutValue={user.username}
        onChange={e => handleUpdate(e)} />

      <label>Password</label>
      <input
        type='password'
        name='password'
        defaultValue={user.password}
        onChange={e => handleUpdate(e)} />
      
      <label>Email address</label>
      <input
        type='email'
        name='email'
        defaultValue={user.Email}
        onChange={e => handleUpdate(e.target.value)} />
      <button variant='primary' type='submit'>
        Update
      </button>
    </form>
  )
}

export default UpdateUser