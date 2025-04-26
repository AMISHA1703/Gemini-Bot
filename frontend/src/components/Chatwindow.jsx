import { TbMessageChatbot } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
const ChatWindow = ({ messages ,loading}) => {
  console.log(messages)
    return (
      <div className="flex-1 p-6 overflow-y-auto ">
        {messages.map((msg, index) => (
 
           
         ( msg.role==="user")?
         (<div className="flex items-start ">
          <div key={index} className="mb-4 p-3 w-1/2  rounded-2xl  bg-blue-100  ml-auto  text-left text-blue-950 ">
          <FaUser /> <p className="p-1">{msg.text}</p>
          </div></div>)
          :( {loading}? <div className="flex items-start w-1/2"><div  key={index} className="mb-4 p-3  w-3/2 rounded-lg max-w-lg bg-gray-300 backdrop-blur-xl opacity-40 self-start mr-auto text-black ">
            <TbMessageChatbot  className="text-gray-900"/>
            <p className="p-1">{msg.text}</p></div> 
            </div> :
            <div className="text-white">loading</div>
            )
          

         
        ))}
      </div>
    );
  };
  
  export default ChatWindow;
  