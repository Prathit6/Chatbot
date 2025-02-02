import { ChatMessage } from "./ChatMessage";


export function ChatMessages({ chatmassages }) {
    /*... is known as spread opearator it can 
          make the copy of and array */

    return (
      <div className="chat-message-container">
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