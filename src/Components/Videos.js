import React,{useEffect} from "react";

let Videos= ({videos,setCurrVideo})=>{
    useEffect(()=>{
            setCurrVideo(videos[0])
    },[videos])

    return (
        <div>
             {
      videos&&
      videos.map((video,index)=>(
        <div key={index} onClick={()=>setCurrVideo(video)}>
            <img style={{objectFit: "fill" ,width:"400px"}}
            src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
            />
        </div>
        ))
     }
        </div>

    )
}
export default Videos