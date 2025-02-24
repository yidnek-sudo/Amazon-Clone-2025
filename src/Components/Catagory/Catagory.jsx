import React from 'react'
import {catagotyInfos} from './catagoryFullInfos'
import CatagoryCard from './CatagoryCard'
import classes from './catagory.module.css'

function Catagory() {
  return (
  <section className={classes.catagory_containers}>
    {
        catagotyInfos.map((infos)=>{
            <CatagoryCard data = {infos}/>
        })
    }
  </section>
  )
}

export default Catagory