import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ButtonRed } from "../../style/view.styles";
import { makeApiRequest, getUserCredentials } from "../../utils/RequestHandler";
import LoadingSpinner from "./LoadingSpinner";
import EmptyState from "./EmptyState";
import { getLoggedInUser } from "../../utils/AuthHandler";

const UserConversations = ({ receiver }) => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messageInput, setMessageInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        let headers = {
          "Content-Type": "application/json",
        };
        const credentials = getUserCredentials();
        headers = { ...headers, ...credentials };
        const response = await makeApiRequest(
          "/conversations",
          "GET",
          null,
          headers
        );
        if (response.success) {
          setConversations(response.result);
        }
      } catch (error) {
        console.error(`Failed to load conversations`);
      } finally {
        setLoading(false);
      }
    };
    fetchConversations();
    setLoggedInUser(getLoggedInUser());
  }, []);

  const handleSelectChat = async (chat) => {
    try {
      setLoadingMessages(true);
      setSelectedConversation(chat);
      let headers = {
        "Content-Type": "application/json",
      };
      const credentials = getUserCredentials();
      headers = { ...headers, ...credentials };
      const response = await makeApiRequest(
        `/conversation/${chat.added_by}`,
        "GET",
        null,
        headers
      );
      if (response.success) {
        setMessages(response.result);
      }
    } catch (error) {
      console.error(`Failed to load chat`);
    } finally {
      setLoadingMessages(false);
    }
  };

  const handleSendMessage = async () => {
    if (messageInput.trim()) {
      try {
        let headers = {
          "Content-Type": "application/json",
        };
        const credentials = getUserCredentials();
        headers = { ...headers, ...credentials };
        const response = await makeApiRequest(
          "/send/text/",
          "POST",
          { recipient: selectedConversation.added_by, text: messageInput },
          headers
        );
        if (response.success) {
          const newMessage = { sender: loggedInUser.username, body: messageInput, added_on: "Now" };
          setMessages([...messages, newMessage])
          setMessageInput("");
        }
      } catch (error) {
        console.error(`Unable to initiate a conversation.`);
      }
    }
  };

  return (
    <ChatContainer>
      {/* Chat List */}
      <ChatList>
        {loading && <LoadingSpinner />}
        {!loading &&
          conversations.map((chat) => (
            <ChatItem
              key={chat.added_by}
              onClick={() => handleSelectChat(chat)}
              active={selectedConversation?.email === chat.added_by}
            >
              <EmployerName>{chat.added_by}</EmployerName>
              {/* <LastMessage>{chat.lastMessage}</LastMessage> */}
              <Timestamp>{chat.added_on}</Timestamp>
            </ChatItem>
          ))}
      </ChatList>

      {/* Chat Window */}
      <ChatWindow>
        {!selectedConversation && <EmptyState />}
        {selectedConversation && (
          <>
            <ChatHeader>{selectedConversation?.added_by}</ChatHeader>
            <MessagesContainer>
              {loadingMessages && <LoadingSpinner />}
              {!loadingMessages &&
                messages.map((msg, index) => (
                  <Message
                    key={index}
                    sender={msg.sender === loggedInUser?.username}
                  >
                    <MessageText>{msg.body}</MessageText>
                    <MessageTime>{msg.added_on}</MessageTime>
                  </Message>
                ))}
            </MessagesContainer>

            {/* Message Input */}
            <ChatInputContainer>
              <ChatInput
                type="text"
                placeholder="Type a message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
              <ButtonRed onClick={handleSendMessage}>Send</ButtonRed>
            </ChatInputContainer>
          </>
        )}
      </ChatWindow>
    </ChatContainer>
  );
};

export default UserConversations;

// Styled Components
const ChatContainer = styled.div`
  display: flex;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`;

const ChatList = styled.div`
  width: 30%;
  background: #f7f7f7;
  padding: 10px;
  border-right: 1px solid #ccc;
  overflow-y: auto;
`;

const ChatItem = styled.div`
  padding: 10px;
  border-radius: 5px;
  background: ${(props) => (props.active ? "#ddd" : "#fff")};
  cursor: pointer;
  margin-bottom: 10px;
  transition: 0.3s;
  &:hover {
    background: #ddd;
  }
`;

const EmployerName = styled.div`
  font-weight: bold;
`;

// const LastMessage = styled.div`
//   font-size: 12px;
//   color: gray;
// `;

const Timestamp = styled.div`
  font-size: 10px;
  text-align: right;
  color: gray;
`;

const ChatWindow = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const ChatHeader = styled.div`
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  background: #eee;
  border-bottom: 1px solid #ccc;
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  align-self: ${(props) => (props.sender ? "flex-end" : "flex-start")};
  background: ${(props) => (props.sender ? "#4caf50" : "#eee")};
  color: ${(props) => (props.sender ? "white" : "black")};
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  max-width: 60%;
`;

const MessageText = styled.div`
  font-size: 14px;
`;

const MessageTime = styled.div`
  font-size: 10px;
  text-align: right;
  margin-top: 5px;
  opacity: 0.6;
`;

const ChatInputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
  background: #fff;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 14px;
  outline: none;
`;
