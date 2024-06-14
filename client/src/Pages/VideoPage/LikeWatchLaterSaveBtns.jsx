import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import { MdPlaylistAddCheck } from "react-icons/md";
import {
  RiHeartAddFill,
  RiPlayListAddFill,
  RiShareForwardLine,
} from "react-icons/ri";
import "./LikeWatchLaterSaveBtns.css";

function LikeWatchLaterSaveBtns() {
  const [SAveVideo, setSAveVideo] = useState(true);
  const [DislikeBtn, setDislikeBtn] = useState(false);
  const [LikeBtn, setLikeBtn] = useState(false);
  const [likeCount,setLikeCount] = useState(1)

  const toggleSaveVideo = () => {
    if (SAveVideo) {
      setSAveVideo(false);
    } else {
      setSAveVideo(true);
    }
  };

  const toggleLikeBtn = () => {
    if (LikeBtn) {
      setLikeBtn(false);
      setLikeCount(likeCount-1)
    } else {
      setLikeBtn(true);
      setLikeCount(likeCount+1)
    }
  };

  const toggleDislikeBtn = () => {
    if (DislikeBtn) {
      setDislikeBtn(false);
    } else {
      setDislikeBtn(true);
    }
  };
  return (
    <div className="btns_cont_videoPage">
      <div className="btn_VideoPage">
        <BsThreeDots />
      </div>
      <div className="btn_VideoPage">
        <div className="like_videoPage" onClick={() => toggleLikeBtn()}>
          {LikeBtn ? (
            <>
              <AiFillLike size={22} className="btns_videoPage" />
              <b>{likeCount}</b>
            </>
          ) : (
            <>
              <AiOutlineLike size={22} className="btns_videoPage" />
              <b>{likeCount}</b>
            </>
          )}
        </div>
        <div className="like_videoPage" onClick={() => toggleDislikeBtn()}>
          {DislikeBtn ? (
            <>
              <AiFillDislike size={22} className="btns_videoPage" />
            </>
          ) : (
            <>
              <AiOutlineDislike size={22} className="btns_videoPage" />
            </>
          )}
          <b>DISLIKE</b>
        </div>
        <div className="like_videoPage" onClick={() => toggleSaveVideo()}>
          {SAveVideo ? (
            <>
              <RiPlayListAddFill size={22} className="btns_videoPage" />
              <b>save</b>
            </>
          ) : (
            <>
              <MdPlaylistAddCheck size={22} className="btns_videoPage" />
              <b>saved</b>
            </>
          )}
        </div>
        <div className="like_videoPage">
          <>
            <RiHeartAddFill size={22} className="btns_videoPage" />
            <b>Thanks</b>
          </>
        </div>
        <div className="like_videoPage">
          <>
            <RiShareForwardLine size={22} className="btns_videoPage" />
            <b>Share</b>
          </>
        </div>
      </div>
    </div>
  );
}

export default LikeWatchLaterSaveBtns;
