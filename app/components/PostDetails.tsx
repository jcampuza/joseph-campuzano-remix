import { useMemo } from 'react';
import { cn } from '../lib/cn';
import { formatDateLong } from '../lib/date';
import { FCWithClassName } from '../lib/types';

interface PostDetailsProps {
  timestamp: number;
  timeToReadMins: number;
}

export const PostDetails: FCWithClassName<PostDetailsProps> = (props) => {
  const dateFormatted = useMemo(() => formatDateLong(props.timestamp), [props.timestamp]);

  return (
    <aside className={cn(props.className)}>
      <time className="block text-xs italic text-gray-700">{dateFormatted} </time>
      <small className="block italic text-gray-600">Reading Time: {props.timeToReadMins} min</small>
    </aside>
  );
};
