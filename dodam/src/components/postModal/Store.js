import { useRef, useState } from "react";

export default function Store({ closeModal }) {
  const [title, setTitle] = useState("");
  const tagRef = useRef();
  const [contents, setContents] = useState("");
  const [imgState, setImageState] = useState("/logo512.png");
  const [tagList, setTagList] = useState([]);
  const [phone, setPhone] = useState();
  const [open, setOpen] = useState(0);
  const [close, setClose] = useState(0);
  const [address, setAddress] = useState();
  const CloseHandler = () => {
    closeModal();
  };
  const ClickHandler = () => {
    const tag = tagList;
    console.log(title, tag, contents, imgState, phone, open, close, address);
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
  const PhoneChangeHandler = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhone(e.target.value);
    }
  };
  const CloseTimeChangeHandler = (e) => {
    const close = e.target.value;
    setClose(close);
  };
  const OpenTimeChangeHandler = (e) => {
    const open = e.target.value;
    setOpen(open);
  };
  const AddressChangeHandler = (e) => {
    const address = e.target.value;
    setAddress(address);
  };
  return (
    <>
      <div>
        <h1>음식점을 등록 해 주세요.</h1>
        <input
          type="text"
          onChange={TitleChangeHandler}
          value={title}
          placeholder="가게 제목을 입력해주세요"
        />
        <input
          type="text"
          ref={tagRef}
          onKeyUp={TagInput}
          placeholder="태그를 입력해주세요"
        />
        <input type="time" value={open} onChange={OpenTimeChangeHandler} />
        <input type="time" value={close} onChange={CloseTimeChangeHandler} />
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
        <input
          type="tel"
          maxLength={11}
          value={phone}
          onChange={PhoneChangeHandler}
          placeholder="전화번호를 입력해주세요"
        />
        <input
          type="text"
          onChange={AddressChangeHandler}
          value={address}
          placeholder="가게 주소를 입력해주세요."
        />

        <input
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
            width: "200px",
            height: "200px",
          }}
        />
        <input
          type="file"
          accept="image/*"
          encType="multipart/form-data"
          onChange={onFileChange}
        />
        <button onClick={ClickHandler}>등록하기</button>
        <button onClick={CloseHandler}>되돌아가기</button>
      </div>
    </>
  );
}
