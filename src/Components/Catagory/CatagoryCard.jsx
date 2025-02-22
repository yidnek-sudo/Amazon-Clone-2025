import React from 'react'

function CatagoryCard({data}) {
  return (
    <div>
        <a href="">
            <span>
                <h1>{data.title}</h1>
            </span>
            <img src={data.imgLink} alt="" />
            <p>shop now</p>
        </a>
    </div>
  )
}

export default CatagoryCard