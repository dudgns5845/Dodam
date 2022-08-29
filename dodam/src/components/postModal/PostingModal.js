import { OpenInBrowserOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";
import Modal from "../Modal";
import Item from "./Item";
import Need from "./Need";
import Store from "./Store";
import Talent from "./Talent";

export default function PostingModal({ open, setOpen }) {
  const [value, setValue] = useState("1");
  // useEffect(() => {
  //   setPosting(open);
  // }, [open]);
  const closePosting = () => {
    setOpen(!open);
  };
  const onChangeHandler = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  return (
    <>
      <Modal visible={open} closeModal={closePosting}>
        <select
          id="posting"
          label="posting"
          required="required"
          onChange={onChangeHandler}
          defaultValue="1"
          style={{
            width: "300px",
            height: "50px",
            margin: "30px",
            textAlign: "center",
          }}
        >
          <option value="1">재능 기부 </option>
          <option value="2">물품 나눔 </option>
          <option value="3">음식점 등록</option>
          <option value="4">요청해요</option>
        </select>
        <>
          {value === "1" && <Talent closeModal={closePosting} />}
          {value === "2" && <Item closeModal={closePosting} />}
          {value === "3" && <Store closeModal={closePosting} />}
          {value === "4" && <Need closeModal={closePosting} />}
        </>
      </Modal>
    </>
  );
}
