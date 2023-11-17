import React from 'react'

export const UserTile = ({name,id, ph, email,date,handleReport}) => {
  return (
    <div onClick={handleReport} className='userTile'>
        <span>{name}</span>
        <span>{ph}</span>
        <span>{email}</span>

    </div>
  )
}
