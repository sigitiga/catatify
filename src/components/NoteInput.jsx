"use client";

import { useState } from "react"
import { useRouter } from "next/navigation"; 

export const NoteInput = () => {
    const router = useRouter();
    const [note, setNote] = useState("");
    
    async function createNote(){
        const res = await fetch("https://devscale-mockapi.fly.dev/api/collections/notes/records?filter=(user='hi.sigitpamungkas@gmail.com')", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: note, user:"hi.sigitpamungkas@gmail.com", additionalData:"" })
        });
        const data = await res.json()
        router.refresh()
        console.log(data)
    }

    return (
        <div className="bg-white gap-2 mt-2 p-2 border-2 rounded-md" >
            <textarea className="w-full h-24 focus:outline-none" onChange={(e) => setNote(e.target.value)}/>
            <div className="flex justify-end">
            <button className="text-xs bg-purple-100 hover:bg-purple-200 text-purple-600 p-2 rounded-md " onClick={createNote} >Add note</button>
            </div>
            

            
        </div>
    )
}