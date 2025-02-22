import React from 'react'
import {catagotyInfos} from './catagoryFullInfos'
import CatagoryCard from './CatagoryCard'

function Catagory() {
  return (
  <section>
    {
        catagotyInfos.map((infos)=>{
            <CatagoryCard data = {infos}/>
        })
    }
  </section>
  )
}

export default Catagory