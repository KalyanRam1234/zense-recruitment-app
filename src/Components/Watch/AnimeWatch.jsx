import { useEffect, useState } from "react"

export const AnimeWatch=({info})=>{
    const [episodes, setEpisodes]=useState([]);
    const [currentEpisode, setCurrent]=useState(1);
    const [url, setURL]=useState("");
    
    useEffect(()=>{
        setEpisodes(info?.episodes);
    },[])

    useEffect(()=>{
        const setWatch=async()=>{
            const res=await fetch(window.location.origin+`/api/watch?id=${info?.episodes[currentEpisode-1]?.id}`)

            const data=await res.json().then((e)=>{
                console.log(e);
                setURL(e?.headers?.Referer)
            })
            
        }
        setWatch();
    },[currentEpisode,setCurrent])

    return (
        <div className="w-full bg-[#3c3b3b]">
            <div className="grid grid-cols-12 px-4 md:px-12 pt-20 min-h-screen">
                <div className="col-span-12 ">
                    <iframe src={url} allowFullScreen="true" className="checkh mx-auto w-full"></iframe>
                </div>
                <div className="col-span-12 ">
                    <div className="text-xl px-4 py-2 font-semibold bg-green-150 text-white sm:mt-8 ">
                        Episodes
                    </div>
                    <div className="overflow-x-hidden overflow-y-auto mb-8">
                        <div className="w-full text-white bg-[#121315] h-[300px]">
                                {episodes.map((episode, index)=>(
                                    <div className={"flex flex-row px-4 py-2 text-lg hover:text-green-150 odd:bg-[#121315] hover:bg-[#757575] bg-[#1E1F21] "} onClick={()=>{
                                        setCurrent(index+1);
                                    }}>
                                        <div className="mr-4 text-[#FFDD95]">
                                            {index+1}
                                        </div>
                                        <div className="capitalize truncate">
                                            {episode?.id}
                                        </div>
                                    </div>
                                ))}                            
                            </div>
                    </div>
                        
                    </div>
            </div>

            {/* <div className="col-span-9">
                <div className="">

                </div>
            </div> */}
        </div>
    )
}