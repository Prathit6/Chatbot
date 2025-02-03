import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";

export function ChatMessages({ chatmassages }) {
  /*... is known as spread opearator it can 
          make the copy of and array */
  // react will run the function when any component is created
  //the second perameteris dependency array
  const chatMessagesRef = useRef(null);
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatmassages]);

  return (
    <div className="chat-message-container" ref={chatMessagesRef}>
      {chatmassages.map((chatMassage) => {
        return (
          <ChatMessage
            massage={chatMassage.massage}
            sender={chatMassage.sender}
          />
        );
      })}
    </div>
  );
}
