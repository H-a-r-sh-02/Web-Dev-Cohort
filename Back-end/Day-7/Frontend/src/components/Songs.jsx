import { useState } from "react"

const Songs = () => {
  const [songs, setsongs] = useState([
    {
      title: "test_title",
      artist: "test_artist",
      url: "test_url",
    },
    {
      title: "test_title",
      artist: "test_artist",
      url: "test_url",
    },
    {
      title: "test_title",
      artist: "test_artist",
      url: "test_url",
    },
  ]);

  return (
    <div className="text-white px-[24rem] pt-2">

      <h2 className="text-2xl font-thin mb-1">Recommended Song's</h2>

        {songs.map((song, index) => (
          <div key={index} className="flex items-center justify-between p-2 mb-1 rounded-2xl bg-black">
            <div>
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
            </div>
            <div className="flex gap-2">
              <i className="ri-pause-line cursor-pointer"></i>
              <i className="ri-play-fill cursor-pointer"></i>
            </div>
            </div>
        ))}
    </div>
  )
}

export default Songs