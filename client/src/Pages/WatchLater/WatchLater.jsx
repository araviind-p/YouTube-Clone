import React from "react";
import vid from "../../Components/Video/vid.mp4";
import WHL from "../../Components/WHL/WHL";

function WatchLater() {
  const WatchLater = [
    {
      _id: 1,
      video_src: vid,
      Channel: "62bafe6752cea35a6c30685f",
      title: "video 1",
      Uploader: "ac",
      description: "description of video 1",
    },
    {
      _id: 2,
      video_src: vid,
      Channel: "cdd",
      title: "video 2",
      description: "description of video 2",
    },
    {
      _id: 3,
      video_src: vid,
      Channel: "add",
      title: "video 3",
      description: "description of video 3",
    },
    {
      _id: 4,
      video_src: vid,
      Channel: "add",
      title: "video 4",
      description: "description of video 4",
    },
  ];
  return <WHL page={"Watch Later"} videoList={WatchLater} />;
}

export default WatchLater;
