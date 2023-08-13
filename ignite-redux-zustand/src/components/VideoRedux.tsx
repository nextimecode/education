import ReactPlayer from 'react-player'
import { next } from '../redux-store/slices/player';
import { useCurrentLesson } from '../redux-store/hooks';
import { useAppDispatch } from '../redux-store';

export function VideoRedux() {
  const dispatch = useAppDispatch()
  const { currentLesson } = useCurrentLesson()

  function handlePlayNext() {
    dispatch(next())
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing
        onEnded={handlePlayNext}
        url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
      />
    </div>
  );
}
