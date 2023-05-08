import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';
import { auth, db, logout } from "../firebase";
import "firebase/firestore";


const Chat = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const unsubscribe = db
      .collection("messages")
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        const messages = snapshot.docs.map((doc) => doc.data());
        setMessages(messages);
      });
    return unsubscribe;
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    await db.collection("messages").add({
      text: inputValue,
      user: user.displayName,
      userId: user.uid,
      createdAt: new Date(),
    });
    setInputValue("");
  };

  return (
    <MDBContainer className="chat-container">
      <MDBRow>
        <MDBCol md="8" className="mx-auto">
          <MDBListGroup className="chat-messages">
            {messages.map((message) => (
              <MDBListGroupItem
                key={message.createdAt}
                className={`chat-message ${
                  message.userId === user.uid ? "sent" : "received"
                }`}
              >
                <strong>{message.user}: </strong>
                {message.text}
              </MDBListGroupItem>
            ))}
          </MDBListGroup>
          <form onSubmit={handleSubmit} className="chat-form">
            <MDBInput
              type="text"
              label="Type your message here"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              className="chat-input"
            />
            <MDBBtn color="primary" type="submit" className="chat-send">
              Send
            </MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Chat;

