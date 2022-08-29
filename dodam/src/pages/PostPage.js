import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";
import PostingModal from "../components/postModal/PostingModal";

export default function PostPage() {
  const [open, setOpen] = useState(false);
  const write = () => {
    setOpen(true);
  };
  const actions = [
    { icon: <FileCopyIcon />, name: "Posting", action: write },
    { icon: <SaveIcon />, name: "Save", action: null },
    { icon: <PrintIcon />, name: "Print", action: null },
    { icon: <ShareIcon />, name: "Share", action: null },
  ];

  return (
    <>
      <PostingModal open={open} setOpen={setOpen} />
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.action}
          />
        ))}
      </SpeedDial>
    </>
  );
}
