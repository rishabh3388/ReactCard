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
    <div className="w-full min-h-screen bg-zinc-300 flex flex-wrap justify-center items-center gap-6 p-4">
      {data.map((val, index) => (
        <div
          key={index}
          className="w-full sm:w-52 rounded-md bg-zinc-200 overflow-hidden shadow-md"
        >
          <div className="w-full h-40 sm:h-32 bg-zinc-400">
            <img
              className="w-full h-full object-cover"
              src={val.image}
              alt={val.title}
            />
          </div>
          <div className="w-full px-4 py-4 bg-white">
            <h2 className="font-semibold text-lg">{val.title}</h2>
            <p className="text-sm mt-2 text-gray-600">{val.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;