import { IUser } from './user';

export interface IVideo {
  code: string;
  title: string;
  description: string;
  thumbnails: string;
  user?: IUser;
  like?: number;
  dislike?: number;
}
