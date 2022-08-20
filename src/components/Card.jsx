import React from 'react';

function Card ({data}) {

  function handleMouseEnter(event){
   return (event.target.style.backgroundColor = "#00997a",
   event.target.style.color = "white"
   )
}
  function handleMouseLeave(event) {
    return (event.target.style.backgroundColor = "#5BCEC9",
    event.target.style.color = "black"
    )
  }


  return (
    <div>
    {data.map( (info) => (
        <div className='card' key={info.id} onMouseEnter={handleMouseEnter} onMouseLeave= {handleMouseLeave}>
            <img className= "avatar"src={info.avatar} alt="avatar"></img>
            <div className='details'>
            <p><b>Contact</b></p>
            <p><b>Name:</b> {info.first_name} {info.last_name}</p>
            <p><b>Email:</b> {info.email}</p>
            </div>
        </div>
      ))}
      </div>
  )
}

export default Card;