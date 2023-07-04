import { IPreference } from './preference';
import { IUser } from './user';

export interface IVideo {
  id?: number;
  code: string;
  title: string;
  description: string;
  thumbnails: string;
  user?: IUser;
  like?: number;
  dislike?: number;
  preference: IPreference;
}
