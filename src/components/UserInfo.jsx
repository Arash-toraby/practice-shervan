import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import UserInfoItems from "./UserInfoItems";
import data from "../json/data.json";

function UserInfo() {
  const [userId, setUserID] = useState(1);
  const className = {
    base: "bg-blue-500 p-3 rounded-full flex items-center justify-center",
    disabled: "bg-slate-500 p-3 rounded-full flex items-center justify-center",
  };

  const userInfo =
    data &&
    data.map((user) => (
      <UserInfoItems user={user} key={user.id} userId={userId} />
    ));

  function handleNext() {
    setUserID((userId) => userId + 1);
  }

  function handlePrev() {
    setUserID((userId) => userId - 1);
  }

  return data ? (
    <>
      <button
        name="prev"
        onClick={handlePrev}
        className={userId > 1 ? className.base : className.disabled}
        disabled={userId < 2}
      >
        <ArrowBackIcon fontSize="small" style={{ color: "white" }} />
      </button>
      {userInfo}
      <button
        name="next"
        className={userId < 10 ? className.base : className.disabled}
        disabled={userId > 9}
        onClick={handleNext}
      >
        <ArrowForwardIcon fontSize="small" style={{ color: "white" }} />
      </button>
    </>
  ) : (
    <p className="text-4xl text-center">beni khare kie !!!!!</p>
  );
}

export default UserInfo;
