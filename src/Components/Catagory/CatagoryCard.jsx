import React from 'react'
import classes from './catagory.module.css'

function CatagoryCard({data}) {
  return (
    <div className={classes.catagory}>
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