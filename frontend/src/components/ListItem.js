import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ListItem = ({ note, getNotes }) => {

  let [length, setLength] = useState(0)

  const deleteNote = async () => {
    let response = await fetch(`/api/note/${note.id}/delete`, {
      method: "DELETE",
    });

    let data = await response.json();
    console.log(data);
    getNotes();
  };

  useEffect(()=>{
    setLength(window.innerHeight >= 700 ? 20 : 50)
  }, [])
  return (
    <div className="bg-gray-500 rounded-xl my-3 py-3 flex bg-opacity-35 lg:w-2/3
    w-[90%]
    mx-auto">
      <Link to={`notes/${note.id}`} className="w-full">
        <div >
          <h3 className="font-bold mx-4 ">{note.body.substring(0,length)}</h3>
        </div>
      </Link>
      <button
        className="bg-orange-500 rounded p-1
            block ml-auto mr-2 text-black w-[100px] h-[30px]" 
        onClick={deleteNote}
      >
        Delete
      </button>
    </div>
  );
};

export default ListItem;
