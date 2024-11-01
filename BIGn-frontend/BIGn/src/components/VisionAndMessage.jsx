import React from "react";

const CARD_WIDTH = 350;

const VisionAndMessage = () => {
  const displayPosts = posts.slice(0, 2); 

  return (
    <section className=" py-8">
      <div className="mx-auto max-w-6xl">
  
        <div className="flex flex-wrap gap-24 justify-center">
          {displayPosts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Post = ({ imgUrl, title, description }) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
      style={{
        width: CARD_WIDTH,
      }}
    >
      <img
        src={imgUrl}
        className="mb-3 h-[200px] w-full rounded-lg hover:shadow-xl object-cover"
        alt={`An image for a fake blog post titled ${title}`}
      />
      <p className="mt-1.5 text-2xl text-center font-bold">{title}</p>
      <p className="text-sm text-center text-neutral-500">{description}</p>
    </div>
  );
};

export default VisionAndMessage;

const posts = [
  {
    id: 1,
    imgUrl: "/images/dummy4.jpg",
    title: "رؤيتنا",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 2,
    imgUrl: "/images/dummy5.jpg",
    title: "رسالتنا",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
];
