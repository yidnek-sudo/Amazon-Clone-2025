import React from 'react'
import {catagoryInfos} from './catagoryFullInfos'
import CatagoryCard from './CatagoryCard'
import classes from './catagory.module.css'

function Catagory() {
  return (
  <section className={classes.catagory_containers}>
    {
        catagoryInfos?.map((infos, i)=>(
            <CatagoryCard data = {infos} key={i}/>
        ))
    }
  </section>
  )
}

export default Catagory