import {Comment} from './comment';
export class Accommodation{
    id: String;
    city: String;
    address: String;
    numberOfRooms: number;
    furnished: boolean;
    images: String[];
    description: String;
    title: String;
    comments: Comment[];
}