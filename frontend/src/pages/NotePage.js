import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import MobileHeader from "../components/MobileHeader";
const NotePage = () => {
  let { id } = useParams();
  let [noteContent, setNoteContent] = useState(null);
  let [created, setCreated] = useState(null);
  let [updated, setUpdated] = useState(null);

  const updateNote = async () => {
    let response = await fetch(`/api/note/${id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: noteContent,
      }),
    });
    let data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    const getNote = async () => {
      try {
        let response = await fetch(`/api/notes/${id}`);
        let data = await response.json();
        setNoteContent(data.body);
        setCreated(data.created);
        setUpdated(data.updated);
        console.log(data);
      } catch (error) {
        console.error("Error fetching note:", error);
      }
    };

    getNote();
    console.log(window.innerHeight);
  }, []);

  return (
    <div>
      {noteContent !== null ? (
        <div>{window.innerHeight >= 700 ? <MobileHeader/> : null}
        <div className="flex justify-center flex-col">
            {window.innerHeight <= 700 ? (<div onClick={updateNote} className="lg:absolute lg:ml-10">
            <BackButton />
          </div>) : null}
          
          <textarea
            className="bg-black text-white outline-none w-[90%] lg:h-[40dvw] h-[120dvw] p-4 border-none mx-auto bg-opacity-90 lg:ring ring-white ring-opacity-30 lg:text-xl rounded"
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            placeholder="Enter your note here..."
          />
          <div className="ml-auto my-5 opacity-30">
            <p>
              Created on: <span className="text-orange-500">{created}</span>
            </p>
            <p>
              Updated on: <span className="text-orange-500">{updated}</span>
            </p>
          </div>
        </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NotePage;
