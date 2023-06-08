import React,{useState} from "react";

let VideoPlay= ({video})=>{
let [subs,setSubs]= useState("Subscribe");
function subscribe(){
if(subs=="Subscribe"){
    setSubs("Unsubscribe")
    
}
else{
    setSubs("Subscribe")
    
}
}

    return(
        <div className="video-main" >
            {
            video==null ? <h1>Loading ...</h1> : (
           <div className="video"> 
            <iframe  width="100%" height="515" src={`https://www.youtube.com/embed/${video.id.videoId}`}title= "youtube viedeo"></iframe>
            <div>
              <h1 className="title">{video.snippet.title}</h1> 
              <div className="logo">
                  <span>📺<strong>{video.snippet.channelTitle}</strong></span>
                  <button onClick={subscribe}  className="button">{subs}</button>
              </div> 
                  <p><b>Description: </b>{video.snippet.description}</p>  
              </div>    
            </div>
             
            )
            }  
          
        </div>
    )
}
export default VideoPlay