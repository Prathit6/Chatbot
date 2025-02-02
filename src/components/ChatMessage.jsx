
import RobotProfileImage from "../assets/robot.png"
import UserProfileImage from "../assets/user.png"

export function ChatMessage({ massage, sender }) {
        return (
         
        
        <div className={sender === "user" ? "Chat-message-user" : "Chat-message-robot"}>
      {sender === "robot" && <img src={RobotProfileImage} width="50" alt="Robot" />}
      
      <div className="chat-message-content">
        {massage}
      </div>

      {sender === "user" && <img src={UserProfileImage } width="50" alt="User" />}
    </div>
        );
      }