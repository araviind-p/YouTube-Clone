import React from 'react'
import ShowVideoList from '../ShowVideoList/ShowVideoList'

function WHLVideoList({ page, videoList }) {
  return (
   <>
   {
    videoList.map(m=>{
        console.log("send id  ",m._id);
        return(
            <>
                <ShowVideoList videoID={m._id} key={m._id}/>
            </>
        )
    })
   }
   </>
  )
}

export default WHLVideoList