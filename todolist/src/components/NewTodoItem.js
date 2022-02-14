import React, { useState } from "react";
import classes from "./NewTodoItem.module.css";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
function NewTodoItem(props) {
  const [title, changetitle] = useState("");
  const [layout, updatelayout] = useState(false);
  const [edfocus, setfocus] = useState(false);
  const [titletouched, updatetitletouch] = useState(false);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const edfocusfunc = () => {
    setfocus((prev) => !prev);
  };

  const toggleview = () => {
    updatelayout((prev) => !prev);
  };
  const titleerror = title === "" && titletouched;
  console.log(
    draftToHtml(convertToRaw(editorState.getCurrentContent())) + "" ===
      "<p></p>"
  );
  const changehandler = (e) => {
    changetitle(e.target.value);
  };
  const ontitletouched = () => updatetitletouch(true);
  const submithandler = (e) => {
    e.preventDefault();
    // console.log(titleref.current.value === "");
    console.log(titleerror);
    if (titleerror) {
      updatetitletouch(true);
    } else {
      props.add(
        title,
        draftToHtml(convertToRaw(editorState.getCurrentContent()))
      );

      setEditorState(() => EditorState.createEmpty());
      updatetitletouch(false);
      changetitle("");
      toggleview();
    }
  };

  return (
    <>
      {!layout ? (
        <div className={classes.background}>
          <button className={classes.addbutton} onClick={toggleview}>
            + Add New Todo
          </button>
        </div>
      ) : null}
      {layout ? (
        <form className={classes.form} onSubmit={submithandler}>
          <label htmlFor="text">Todo text</label>
          <input
            type="text"
            id="text"
            value={title}
            onChange={changehandler}
            onBlur={ontitletouched}
          ></input>
          {titleerror && (
            <p className={classes.error}>Title must not be empty</p>
          )}
          <label htmlFor="des">Todo description</label>
          <Editor
            onFocus={edfocusfunc}
            onBlur={edfocusfunc}
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
            editorClassName={`${classes.editor} ${
              edfocus && classes.editorfocus
            }`}
          ></Editor>
          <button>add todo</button>
        </form>
      ) : null}
    </>
  );
}

export default NewTodoItem;
