import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import UserInfoItems from "./UserInfoItems";
import data from "../json/data.json";

function UserInfo() {
  const [userId, setUserID] = useState(1);
  const [disabled, setDisabled] = useState({ next: false, prev: true });

  const userInfo =
    data &&
    data.map((user) => (
      <UserInfoItems user={user} key={user.id} userId={userId} />
    ));

  function handleChangeInfo(e) {
    const { name } = e.target;
    setUserID((prevUserId) => {
      const newUserId =
        name === "prev"
          ? prevUserId - 1
          : name === "next"
          ? prevUserId + 1
          : prevUserId;

      setDisabled({
        prev: newUserId <= 1,
        next: newUserId >= 10,
      });

      return newUserId;
    });
  }

  return data ? (
    <>
      <button
        name="prev"
        onClick={handleChangeInfo}
        className={`${
          disabled.prev ? "bg-zinc-500" : "bg-blue-500"
        } p-3 rounded-full flex items-center justify-center`}
        disabled={disabled.prev}>
        <ArrowBackIcon fontSize="small" style={{ color: "white" }} />
      </button>
      {userInfo}
      <button
        name="next"
        className={`${
          disabled.next ? "bg-zinc-500" : "bg-blue-500"
        } p-3 rounded-full flex items-center justify-center`}
        disabled={disabled.next}
        onClick={handleChangeInfo}>
        <ArrowForwardIcon fontSize="small" style={{ color: "white" }} />
      </button>
    </>
  ) : (
    <p className="text-4xl text-center">beni khare kie !!!!!</p>
  );
}

export default UserInfo;
