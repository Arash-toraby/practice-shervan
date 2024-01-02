import React from "react";
import UserInfo from "../components/UserInfo";

export default function Home() {
  return (
    <div>
      <header className="h-40 bg-orange-400 flex items-center justify-center">
        <p className="text-5xl">Welcome to our website</p>
      </header>
      <section className="flex h-[500px] items-center justify-center">
        <div className="flex justify-between col-start-2 col-span-1 row-start-2 row-end-3 items-center">
          <UserInfo />
        </div>
      </section>
    </div>
  );
}
