import { useQuery } from '@tanstack/react-query';
import { IVideo } from 'consts/video';
import React, { useState } from 'react';
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from 'react-icons/ai';
import Request from 'components/classes/http';
import { IPreference } from 'consts/preference';

type Props = {
  video: IVideo;
};

const Video: React.FC<Props> = ({ video }) => {
  const [recallLike, setRecallLike] = useState(false);
  const [recallDislike, setRecallDislike] = useState(false);
  const [preference, setPreference] = useState<IPreference>()

  const { data } = useQuery({
    queryKey: [`queryLike${video.id}`],
    queryFn: () => {
      setRecallLike(false);
      return Request.get(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/users/like_video/${video.id}`
      );
    },
    onSuccess: (response) => {
      setPreference(response.data)
      // toast('You are like successfully!');
    },
    onError: () => {
      // toast('You are like failure!');
    },
    enabled: recallLike,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const { data: dataDislike } = useQuery({
    queryKey: [`queryDislike${video.id}`],
    queryFn: () => {
      setRecallDislike(false);
      return Request.get(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/users/dislike_video/${video.id}`
      );
    },
    onSuccess: (response) => {
      setPreference(response.data)
      // toast('You are dislike successfully!');
    },
    onError: () => {
      // toast('You are dislike failure!');
    },
    enabled: recallDislike,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const handleOnBtnLikeClicked = () => {
    setRecallLike(true);
  };

  const handleOnBtnDislikeClicked = () => {
    setRecallDislike(true);
  };

  return (
    <div className="flex my-10 flex-col lg:flex-row">
      <div className="lg:min-w-[33%] mb-4">
        <div className="relative pb-[56.25%] h-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.code}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      <div className="flex flex-col flex-wrap lg:ml-10 max-w-full">
        <h2 className="whitespace-normal font-bold text-[20px]">
          {video.title}
        </h2>
        <p className="whitespace-pre-wrap text-base">
          Share by: {video.user?.email}
        </p>
        <div className="flex gap-2 items-center">
          <span>{video.like ?? 0}</span>
          {(preference?.pref ?? video.preference.pref) === 'like' ? (
            <AiFillLike
              onClick={handleOnBtnLikeClicked}
              className="cursor-pointer"
            />
          ) : (
            <AiOutlineLike
              onClick={handleOnBtnLikeClicked}
              className="cursor-pointer"
            />
          )}
          <span>{video.dislike ?? 0}</span>
          {(preference?.pref ?? video.preference.pref) === 'dislike' ? (
            <AiFillDislike
              onClick={handleOnBtnDislikeClicked}
              className="cursor-pointer"
            />
          ) : (
            <AiOutlineDislike
              onClick={handleOnBtnDislikeClicked}
              className="cursor-pointer"
            />
          )}
        </div>
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default Video;
