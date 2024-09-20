import React from "react";
import data from "./tweets_12.json";
import { FiHeart, FiMessageSquare, FiRepeat } from "react-icons/fi";

const Tweets = () => {
  return (
    <div className=" mx-auto h-[47rem] overflow-y-auto mt-6 mb-8 scrollbar-hide">
      <div className="text-4xl font-bold mb-4">Tweets</div>
      {data &&
        Array.isArray(data) &&
        data.map((tweet, index) => {
          const {
            link,
            text,
            user,
            date,
            isRetweet,
            replyingTo,
            stats,
            pictures,
            videos,
          } = tweet;
          return (
            <div
              className="max-w-xl mx-auto border border-gray-300 rounded p-4 mb-4"
              key={index}
            >
              {/* Header Section */}
              <div className="flex items-center">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="rounded-full w-10 h-10 mr-2"
                />
                <div>
                  <p className="font-bold">{user.name}</p>
                  <p className="text-gray-500">{user.username}</p>
                </div>
              </div>

              {/* Tweet Content */}
              <p className="mt-2">{text}</p>

              {/* Media (Pictures) */}
              {pictures && pictures.length > 0 && (
                <img
                  src={pictures[0]}
                  alt="Tweet Media"
                  className="mt-2 w-24"
                />
              )}
              {videos && videos.length > 0 && (
                <div className="mt-2">
                  <video controls className="w-full">
                    <source src={videos[0]} type="video/mp4" />
                  </video>
                </div>
              )}

              {/* Footer Section */}
              <div className="flex justify-between mt-2 text-gray-500">
                <p>{date}</p>
                <div className="flex">
                  <div className="flex items-center mr-6">
                    <FiMessageSquare className="mr-1" />
                    {stats.comments}
                  </div>
                  <div className="flex items-center mr-6">
                    <FiRepeat className="mr-1" />
                    {stats.retweets}
                  </div>
                  <div className="flex items-center">
                    <FiHeart className="mr-1" />
                    {stats.likes}
                  </div>
                </div>
              </div>

              {/* Actions Section */}
              <div className="flex justify-between mt-2">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  View on Twitter
                </a>
                {isRetweet && (
                  <p className="text-gray-500">
                    Retweeting{" "}
                    <span className="font-bold">{replyingTo[0]}</span>
                  </p>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Tweets;
