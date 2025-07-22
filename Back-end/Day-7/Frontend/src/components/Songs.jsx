import { useState } from "react"

const Songs = ({songs}) => {
  const [isPlaying, setisPlaying] = useState(null);
  const handlePlayPause = (index)=>{
    if(isPlaying === index) {
      setisPlaying(null);
    } else {
      setisPlaying(index);
    }
  };

  return (
    <div className="text-white px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 pt-2">

      <h2 className="text-2xl font-thin mb-1">Recommended Song's</h2>

        {songs.map((song, index) => (
          <div key={index} className="flex  sm:flex-row sm:items-center justify-between gap-2 p-4 mb-2 rounded-2xl bg-black/70 bg-blur-xl">
            <div>
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
            </div>
            <div className="flex gap-2">
              {
                isPlaying == index &&
                <audio src={song.audio} style={{
                  display: 'none'
                }}
                autoPlay={isPlaying === index}
                >
                </audio> 
              }
              <button onClick={()=> handlePlayPause(index)}>
                {
                  isPlaying === index ? <i className="ri-pause-line cursor-pointer"></i> :
                  <i className="ri-play-fill cursor-pointer"></i> 
                  }
              </button>
            </div>
            </div>
        ))}
    </div>
  )
}

export default Songs