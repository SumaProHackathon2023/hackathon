import {firestore} from "./firebase-nit"
import {collection,getDocs} from "firebase/firestore"

/* type EventData = Record<"weblink"|"title"|"date"|"companyName",string>
class Event {
    weblink: string;
    title: string;
    date: string | Date;
    companyName: string
    
    constructor(weblink:string,title:string,date:(string | Date),companyName:string){
        this.weblink = weblink
        this.title = title,
        this.date = date instanceof Date ? date : new Date(date)
        this.companyName  = companyName
    }
} */

const EventDatasSnapShot = collection(firestore,"event") 
const EventDatas = await getDocs(EventDatasSnapShot)
