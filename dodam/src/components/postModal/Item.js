import { useState, useRef } from "react";
import Input from "@mui/material/Input";
export default function Item({ closeModal }) {
  const [title, setTitle] = useState("");
  const tagRef = useRef();
  const [contents, setContents] = useState("");
  const [imgState, setImageState] = useState("/logo512.png");
  const [tagList, setTagList] = useState([]);

  const CloseHandler = () => {
    closeModal();
  };
  const ClickHandler = () => {
    const tag = tagList;
    console.log(title, tag, contents, imgState);
  };
  const TitleChangeHandler = (e) => {
    const title = e.currentTarget.value;
    setTitle(title);
  };
  const ContentsChangeHandler = (e) => {
    const contents = e.currentTarget.value;
    setContents(contents);
  };
  const TagInput = () => {
    if (window.event.keyCode === 13 && tagRef.current.value !== "") {
      setTagList([...tagList, tagRef.current.value]);
      tagRef.current.value = "";
    }
  };
  const DeleteTag = (key) => {
    const newTags = tagList.filter((item, idx) => {
      return idx !== key;
    });
    setTagList(newTags);
  };
  const onFileChange = (e) => {
    setImageState(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div style={{ margin: "auto" }}>
      <h1>물품 기증</h1>
      <Input
        type="text"
        onChange={TitleChangeHandler}
        value={title}
        placeholder="제목"
      />
      <Input
        fullWidth
        type="text"
        ref={tagRef}
        onKeyUp={TagInput}
        placeholder="물품에 어울리는 태그를 작성해 주세요."
      />
      {tagList.map((tag, idx) => (
        <div
          key={idx}
          onClick={() => DeleteTag(idx)}
          style={{
            background: "#eee",
            border: "none",
            borderRadius: "20px",
            height: "35px",
            padding: "5px 15px",
          }}
        >
          {tag}
        </div>
      ))}
      <Input
        fullWidth
        style={{ width: "400px", height: "400px" }}
        type="text"
        onChange={ContentsChangeHandler}
        value={contents}
        placeholder="가게 정보를 입력해주세요"
      />
      <img
        alt="sample"
        src={imgState}
        style={{
          width: "100px",
          height: "100px",
        }}
      />
      <Input
        fullWidth
        type="file"
        accept="image/*"
        encType="multipart/form-data"
        onChange={onFileChange}
      />
      <button onClick={ClickHandler}>등록하기</button>
      <button onClick={CloseHandler}>되돌아가기</button>
    </div>
  );
}
