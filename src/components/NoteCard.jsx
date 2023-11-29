"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const NoteCard = ({ id, content }) => {
        const router = useRouter();
        const [onEdit, setOnEdit] = useState(false);
        const [currentContent, setCurrentContent] = useState(content);  
    // async function handleDelete() {
    //     console.log(id);
    // }

    async function handleDelete() {
        await fetch(`https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`, {
            method: "DELETE",
        });
    
        router.refresh();
    }

    // async function handleUpdate() {
    //     const res = await fetch(`https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`, {
    //         method: "PATCH",
    //         headers:{
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({ content: currentContent }),
    //     });
    //     const data = await res.json();
    //     setOnEdit(false);
    //     router.refresh();
    // }

    return (
        <div className=" flex flex-col rounded-md p-2 bg-yellow-200">
            {onEdit ? (
                <textarea value={currentContent} onChange={(e)=> setCurrentContent(e.target.value)} className="border-2 p-2 rounded" />
            ) : (
                <textarea className=" w-full h-24 focus:outline-none bg-yellow-200">{currentContent}</textarea>
            )}
            <div className=" flex justify-end " >
            {/* {onEdit ? (
                <button className="text-xs bg-grey-100 text-grey-600 p-2 rounded-xl " onClick={handleUpdate}>
                    Update
                </button>
            ) : ( 
                <button className="text-xs bg-green-100 text-green-600 p-2 rounded-xl " onClick={() => setOnEdit(true)}>
                    Edit
                </button> 
            )}   */}
    
            <button className="text-xs bg-white hover:bg-red-100 text-red-500 p-2 rounded-md " onClick={handleDelete}>
                Delete
            </button>
            </div>
            
        </div>
    )
}