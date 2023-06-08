import React,{useState} from "react";
import "./App.css"
import Search from "./Components/Search";
import Videos from "./Components/Videos";
import VideoPlay from "./Components/VideoPlay";

function App() {
  let[videos, setVideos]= useState([])
  let[currVideo, setCurrVideo]= useState(null);

  return (
   <div>
    <Search addVideos={setVideos}/>
    <div style={{display:"flex"}}>
   
      <div style={{width:"70vw"}}>
        <VideoPlay video={currVideo}/>
      </div>
      
      <div style={{width:"30vw"}}>
         <Videos videos={videos} setCurrVideo={setCurrVideo} />
      </div>
    </div>
    

    </div>
  );
}

export default App;
