import { HomeContext } from "@/pages";
import { useContext } from "react";

export const LatestEpisodes = ({episodes}) => {
    const {page}=useContext(HomeContext);
    const {setPage}=useContext(HomeContext);
    
    return (
        <div>
            <Heading page={page} setPage={setPage}/>
            <div className="bg-[#242428] w-full pb-4">
        <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 px-4 md:px-12">
            {episodes.map((e)=>(
                <div className="" key={e.episodeId}>
                <a href="#">
                  <img
                    className="object-cover h-[60vw] xs:h-[45vw] md:h-[30vw] lg:h-[24vw] xl:h-[22vw] 2xl:h-[20vw] w-full"
                    src={e.image}
                    alt={e.title}
                  />
                </a>
                <div className="pt-3">
                    <h5 className="mb-1 text-lg xl:text-xl font-semibold text-green-150 truncate">
                      {e.title}
                    </h5>
                  <p className="mb-3 font-normal text-white">
                    Episode Number: {e.episodeNumber}
                  </p>
                  
                </div>
              </div>
            ))}
        </div>
      </div>
        </div>
      
    );
  };

const Heading=({page, setPage})=>{
    return (
        <div className="flex flex-row px-4 md:px-12  py-4 bg-[#242428] w-full ">
        <div className='text-green-150 text-2xl font-semibold py-2'>Latest Episodes</div>
        <div className='ml-auto text-white text-lg my-auto'>
          <div className=" flex flex-row">
            <button
              className=" text-white border-none cursor-pointer outline-none bg-[#3A3A3E] rounded-lg  hover:bg-green-150" onClick={()=>{
                if(page>1) setPage(page-1)
              }}>
              <img src="/images/prev.png" className='w-6 m-2'/>
            </button>
            <div className='my-auto mx-2'>{page}</div>
            <button
              className=" text-white border-none cursor-pointer outline-none  bg-[#3A3A3E] rounded-lg  hover:bg-green-150" onClick={()=>{
                if(page<5) setPage(page+1)
              }}>
              <img src="/images/next.png" className='w-6 m-2'/>
            </button>
          </div>
         
        </div>
    </div>
    )
}