import { useEffect, useState } from "react";
import { firestore } from "./firebase-init";
import {collection,getDocs} from "firebase/firestore";


export default async function PopUp(){
    const [eventDatas,setEventDatas] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const EventCollection = collection(firestore,"event")    
            const fetchData = await getDocs(EventCollection).docs.map((data) => {return data.data()})
            setEventDatas(fetchData)
        }
        fetchData()
    },[])

    return (
        <>
            {eventDatas.map((event: { weblink: any; title: any; date: any; companyName: any; },i: any) => {
                return (
                    <div key={event.title}>
                        <p>{i}</p>
                        <h1>{event.weblink}</h1>
                        <p>{event.title}</p>
                        <p>{event.date}</p>
                        <p>{event.companyName}</p>
                    </div>
                )
            })}
        </>
    )
}