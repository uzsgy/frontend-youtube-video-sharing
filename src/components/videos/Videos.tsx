import React, { useState } from 'react';
import { IVideo } from 'consts/video';
import Video from './Video';
import { useQuery } from '@tanstack/react-query';
import Request from 'components/classes/http';
import Pagination from 'components/bases/Pagination';

const Videos: React.FC = () => {
  const [videos, setVideos] = useState<IVideo[]>();
  const [totalPages, setTotalPages] = useState<number>();
  const [currentPage, setCurrentPage] = useState(1);
  const [isNeedRefetchVideo, setNeedRefetchVideo] = useState(true);

  const { isLoading, error } = useQuery({
    queryKey: ['fetch:videos'],
    queryFn: () => {
      setNeedRefetchVideo(false);
      return Request.get(`${process.env.REACT_APP_SERVER_ENDPOINT}/videos`, {
        query: {
          sorts: 'id desc',
        },
        page: currentPage,
      });
    },
    onError: (error) => console.log(error),
    onSuccess: (response) => {
      setVideos(response.data?.videos);
      setTotalPages(response.data?.total);
    },
    enabled: isNeedRefetchVideo,
  });

  if (isLoading || videos === undefined) return null;

  if (error) {
    return <>Fetching videos errors</>;
  }

  return (
    <div className="px-4 md:px-10">
      Videos
      <ul>
        {videos.map((video) => {
          return <Video video={video} key={JSON.stringify(video)} />;
        })}
      </ul>
      {totalPages && (
        <Pagination
          className="my-10"
          currenPage={currentPage}
          totalPages={totalPages}
          step={2}
          handleOnChangePage={(page: number | string | null) => {
            if (page === null) return;
            if (typeof page === 'number') setCurrentPage(page);
            else setCurrentPage(parseInt(page));
            setNeedRefetchVideo(true);
          }}
        />
      )}
    </div>
  );
};

export default Videos;
