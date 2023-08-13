import ReactPlayer from 'react-player'
import { next } from '../redux-store/slices/player';
import { useCurrentLesson } from '../redux-store/hooks';
import { useAppDispatch, useAppSelector } from '../redux-store';
import { Loader } from 'lucide-react';

export function VideoRedux() {
  const dispatch = useAppDispatch()
  const { currentLesson } = useCurrentLesson()
  const isCourseLoading = useAppSelector(state => state.player.isLoading)

  function handlePlayNext() {
    dispatch(next())
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isCourseLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  );
}
