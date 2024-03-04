import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const ChatPage = () => {
  const [socket, setSocket] = useState(null);
  const [curr_id, setCurrId] = useState("");

  useEffect(() => {
    const newSocket = io("http://localhost:8000");
    setSocket(newSocket);
    return () => newSocket.close();
  }
  , []);

  // connection
  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        setCurrId(socket.id);
        console.log("connected by:", socket.id);
      });
    }
  }, [socket]);

  return (
    <div>
      <div>id: {curr_id}</div>
    </div>
  );
};

export default ChatPage;
