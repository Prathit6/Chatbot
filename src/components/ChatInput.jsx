   
   import { useState } from "react";
   import { Chatbot } from "supersimpledev";
   
   
   export function ChatInput({ chatmassages, setChatMassages }) {
        const [inputText, setInputText] = useState("");

        function saveInputText(event) {
          setInputText(event.target.value);
        }

        function sendMessage() {
          const newChatMessages = [
            ...chatmassages,
            {
              massage: inputText,
              sender: "user",
            },
          ];
          setChatMassages(newChatMessages);

          const res = Chatbot.getResponse(inputText);
          //  console.log(res);

          setChatMassages([
            ...newChatMessages,
            {
              massage: res,
              sender: "robot",
            },
          ]);

          setInputText("");
        }

        return (
          <div
            className="
                flex
                grow-1
                chat-input-container
                "
          >
            <input
              placeholder=" Send a massage to chatbot"
              size="30"
              onChange={saveInputText}
              value={inputText}
              className="
                       py-3 
                       px-5 
                       border 
                       text-[15px]  
                       rounded-md
                       grow
                       mb-[60px]

                       "
            />
           <button
  onClick={sendMessage}
  className="
    bg-[rgb(25,135,84)] 
    text-white 
    border-0 
    px-[5px]  
    cursor-pointer
    ml-[1px] /* Reduce margin */
    text-[15px]  /* Smaller font size */
    rounded-[10px]  /* Slightly smaller border-radius */
    w-[80px] /* Set a smaller width */
    h-[50px] /* Set a smaller height */
  "
>
  Send
</button>

          </div>
        );
      }