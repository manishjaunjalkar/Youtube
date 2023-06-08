import React,{useState,useEffect} from "react";
import youtube from "../apis/youtube";

let Search= ({addVideos})=>{
    let [searchTerm, setSearchTerm]= useState("react tutorial")
    useEffect(()=>{
        searchVideo()
    },[])

    let searchVideo=()=>{
        youtube.get("/search",{
          params:{
            q: searchTerm,
             type: "video"
          }
        })
        .then(res=> addVideos(res.data.items))
        .catch(err=> console.log(err))
        
        }
    return(
        <div className="search">
        <input type="text" onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search" value={searchTerm}/>
        <button onClick={searchVideo}>Search</button>
        </div>
    )
}
export default Search