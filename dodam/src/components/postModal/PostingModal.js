import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "../Modal";
import Item from "./Item";
import Need from "./Need";
import Store from "./Store";
import Talent from "./Talent";

export default function PostingModal({ open, setOpen }) {
  const [value, setValue] = useState("0");
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
        <Wrap>
          <FormControl>
            <InputLabel id="demo-simple-select-label">posting</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="posting"
              onChange={onChangeHandler}
              defaultValue="0"
              required="required"
            >
              <MenuItem value="0">--선택---</MenuItem>
              <MenuItem value="1">재능기부</MenuItem>
              <MenuItem value="2">물품나눔</MenuItem>
              <MenuItem value="3">음식점등록</MenuItem>
              <MenuItem value="4">요청해요</MenuItem>
            </Select>
          </FormControl>
          {value === "0" && <button onClick={closePosting}>뒤돌아가기</button>}
          {value === "1" && <Talent closeModal={closePosting} />}
          {value === "2" && <Item closeModal={closePosting} />}
          {value === "3" && <Store closeModal={closePosting} />}
          {value === "4" && <Need closeModal={closePosting} />}
        </Wrap>
      </Modal>
    </>
  );
}
const Wrap = styled.div`
  width: 100%;
  padding: 50px;
`;
