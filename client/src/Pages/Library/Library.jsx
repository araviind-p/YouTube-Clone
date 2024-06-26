import React from "react";
import "./Library.css";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import vid from "../../Components/Video/vid.mp4";
import { FaHistory } from "react-icons/fa";
import WHLVideoList from "./../../Components/WHL/WHLVideoList";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

function Library() {
  const vids = [
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

  return (
    <div className="container_Pages_App">
      <LeftSidebar />
      <div className="container2_Pages_App">
        <div className="container_libraryPage">
          <h1 className="title_container_LibraryPage">
            <b>
              <FaHistory />
            </b>
            <b>History</b>
          </h1>
          <div className="container_videoList_LibraryPage">
            <WHLVideoList page={"History"} videoList={vids} />
          </div>
        </div>
        <div className="container_libraryPage">
          <h1 className="title_container_LibraryPage">
            <b>
              <MdOutlineWatchLater />
            </b>
            <b>Watch Later</b>
          </h1>
          <div className="container_videoList_LibraryPage">
            <WHLVideoList page={"History"} videoList={vids} />
          </div>
        </div>
        <div className="container_libraryPage">
          <h1 className="title_container_LibraryPage">
            <b>
              <AiOutlineLike />
            </b>
            <b>Liked Videos</b>
          </h1>
          <div className="container_videoList_LibraryPage">
            <WHLVideoList page={"History"} videoList={vids} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
