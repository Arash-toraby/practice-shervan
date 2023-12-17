import React, { useState } from "react";
import data from "../json/data.json";

import UserInfoItems from "./UserInfoItems";

function UserInfo() {
  const [userId, setUserID] = useState(1);

  function handleNext() {
    setUserID((userid) => userid + 1);
  }
  function handlePrev() {
    setUserID((userid) => userid - 1);
  }

  return (
    <>
      {
        <button disabled={userId < 2} onClick={handlePrev}>
          ⬅️
        </button>
      }
      <div className="">
        {data.map((user) => (
          <UserInfoItems user={user} key={user.id} userId={userId} />
        ))}
      </div>
      {
        <button disabled={userId > 9} onClick={handleNext}>
          ➡️
        </button>
      }
    </>
  );
}

export default UserInfo;
