import CustomAppBar from "../components/CustomAppBar";
import { useState, useEffect } from "react";

const Home = () => {
    const [videos, setVideos] = useState([])
    const [searchText, setSearchText] = useState("")
    useEffect(() => {
        async function getVideos(){
            const response = await fetch("https://salty-savannah-61881.herokuapp.com/videos", { method: "GET" }); //The env.local file did not work
            const data = await response.json();
            setVideos(data);
        }
        getVideos()
    }, [])
    return ( 
    <div>
        <CustomAppBar isSearchVisible={true} onSearch={(event) => {setSearchText(event.target.value)}} />
        {videos.length === 0 ? (
        <p>Loading...</p>
        ) : (
        videos.filter((e) => 
            searchText.length === 0
            ? true: e.title.toLowerCase().includes(searchText.toLowerCase())
        )
        .map((e) => (
                <div key={videos.indexOf(e)}>
                    <img src={e.image} alt={e.title} />
                    <p>{e.title}</p>
                    <p>{e.views}</p>
                    <p>{e.uploadedAgo}</p>
                    <p>{e.uploadedBy}</p>
                </div>
            ))
        )}
    </div> 
    );
};
 
export default Home