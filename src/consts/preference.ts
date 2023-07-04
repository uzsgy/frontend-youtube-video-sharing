import { IUser } from './user';
import { IVideo } from './video';

export type TPreference = 'idle' | 'like' | 'dislike'

export interface IPreference {
  user_id?: number;
  video_id?: number;
  pref: TPreference;
  user?: IUser;
  video?: IVideo;
}
