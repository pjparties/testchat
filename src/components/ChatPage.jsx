import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const ChatPage = () => {
  const [socket, setSocket] = useState(null);

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
        console.log("connected by:", socket.id);
      });
    }
  }, [socket]);

  return (
    <div>
      <div>id: {socket?.id}</div>
    </div>
  );
};

export default ChatPage;
