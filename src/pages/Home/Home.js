import React from "react";
import DisplayCard from "../../components/DisplayCard";

const Home = () => {
  return (
    <section className="h-screen w-full p-2 overflow-y-scroll no-scrollbar flex flex-col items-center">
      {[1, 1, 1, 1, 1, 1].map((post, i) => (
        <div className="">
          <DisplayCard key={i} />
        </div>
      ))}
    </section>
  );
};

export default Home;
