
import { useState } from "react";
import { ChatInput } from "./components/ChatInput";
import { ChatMessages } from "./components/ChatMessages";
import './App.css';



function App() {
  const [chatmassages, setChatMassages] = useState([
   
  ]);

  return (
    <div
      className=" app-container
              max-w-[600px]
              h-screen
              ml-auto 
              mr-auto
              "
    >
    <ChatMessages chatmassages={chatmassages} />
      <ChatInput
        chatmassages={chatmassages}
        setChatMassages={setChatMassages}
      />
     
    </div>
  );
}
export default App
