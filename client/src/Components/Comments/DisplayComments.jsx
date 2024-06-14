import React, { useState } from "react";
import "./Comments.css";

function DisplayComments({ cId, commentBody, userCommented, handleDelete }) {
  const [Edit, setEdit] = useState(false);
  const [cmt, setCmt] = useState(commentBody);

  const handleEdit = (ctId, ctBdy) => {
    setEdit(true);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
  };

  return (
    <>
      {Edit ? (
        <>
          <form
            className="comments_sub_form_comments"
            onSubmit={handleOnSubmit}
          >
            <input
              type="text"
              onChange={(e) => setCmt(e.target.value)}
              placeholder="Edit comment..."
              value={cmt}
              className="comment_ibox"
            />
            <input
              type="submit"
              value="Change"
              className="comment_add_btn_comments"
            />
          </form>
        </>
      ) : (
        <>
          <p className="comment_body">{cmt}</p>
        </>
      )}
      <p className="user_commented"> - {userCommented} commented</p>
      <p className="EditDel_DisplayCommendt">
        <i onClick={() => handleEdit(cId, commentBody)}>Edit</i>
        <i onClick={() => handleDelete(cId)}>Delete</i>
      </p>
    </>
  );
}

export default DisplayComments;
