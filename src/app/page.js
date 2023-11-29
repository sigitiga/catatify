import { NoteCard } from "@/components/NoteCard";
import { NoteInput } from "@/components/NoteInput";

async function getNote() {
  const res = await fetch("https://devscale-mockapi.fly.dev/api/collections/notes/records?filter=(user='hi.sigitpamungkas@gmail.com')", {
    cache: "no-store",
  });
  const data = await res.json()
  return data;
}

export default async function Page() {
  const { items } = await getNote();

  return (
    <div className="max-w-md m-auto py-10 px-5">
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-medium">Catatify ✍️ </h1>
      </div>
      <NoteInput/>
        <div className="flex flex-col py-4 gap-5">
        {items.map(({ id, content }) => {
          return <NoteCard id={id} content={content}/>
        })}
      </div>
   </div>
  );
}