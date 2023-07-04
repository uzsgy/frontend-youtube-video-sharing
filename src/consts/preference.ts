import { IUser } from './user';
import { IVideo } from './video';

export const PREFERENCE_STATE = {
  IDLE: 0,
  LIKE: 1,
  DISLIKE: 2,
};

export interface IPreference {
  user_id?: number;
  video_id?: number;
  pref: number;
  user?: IUser;
  video?: IVideo;
}
