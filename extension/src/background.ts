import {firestore} from "./firebase-init"
import {collection,getDocs} from "firebase/firestore"

// type EventData = Record<"weblink"|"title"|"date"|"companyName",string>
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
}

const EventDataConverter  = {
    toFirestore: (event: Event) => {
        return {
            weblink: event.weblink,
            title: event.title,
            date: event.date,
            companyName: event.companyName
        }
    },
    fromFirestore: (snapshot) => {
        const data = snapshot.date()
        return new Event(data.weblink,data.title,data.date,data.companyName)
    }
}

const EventDatasSnapShot = collection(firestore,"event")
// const EventDatas = await getDocs(EventDatasSnapShot)
const ResolveData  = EventDataConverter.fromFirestore(EventDatasSnapShot,)




console.log("Background Hackathon Extension!")