import React from "react";

function Card() {
  const data = [
    {
      image: "img1.png",
      title: "Amazon",
      description: "Amazon is a cloud computing company.",
    },
    {
      image: "img2.png",
      title: "Facebook",
      description: "Facebook is a social media platform.",
    },
    {
      image: "img3.png",
      title: "Instagram",
      description: "Instagram is a photo and video sharing app.",
    },
    {
      image: "img4.png",
      title: "Twitter",
      description: "Twitter is a social media platform.",
    }
  ];
  return (
    <>
      <div className="w-full h-screen bg-zinc-300 flex justify-center items-center gap-10">
        {data.map((val,index)=>(
          <div className="w-52 rounded-md bg-zinc-200  overflow-hidden">
          <div className="w-full h-32 bg-zinc-400">
            <img
              className=" w-full h-full object-cover"
              src={val.image}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4 bg-white">
            <h2 className="font-semibold">{val.title}</h2>
            <p className="text-sm mt-3">
              {val.description}
            </p>
          </div>
        </div>
        ))}
      </div>
    </>
  );
}

export default Card;
