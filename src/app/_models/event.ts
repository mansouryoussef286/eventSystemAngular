import { Student } from "./student";
import { Speaker } from "./speaker";

export class Event {
    constructor(
        public _id:number,
        public title:string,
        public date:Date,
        public mainSpeaker:Speaker,
        public otherSpeakers:Speaker[],
        public students:Student[],
    ){}
}
