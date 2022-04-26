export class Speaker {
    constructor(
        public _id:string,
        public Email:string,
        public username:string,
        public password:string,
        public address:{
            city:string,
            street:string,
            building:string,
        }
    ){}
}
