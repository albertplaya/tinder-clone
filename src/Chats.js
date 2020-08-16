import React from "react";
import "./Chats.css";
import Chat from "./Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Hey how are you 😃!"
        timestamp="40 seconds ago"
        profilePic="https://www.gre.ac.uk/__data/assets/image/0004/1611994/Chapman-Mark-500.jpg"
      />
      <Chat
        name="Oscar"
        message="Loooool"
        timestamp="55 minutes ago"
        profilePic="https://media-exp1.licdn.com/dms/image/C4E03AQHPGhQDUs0c4Q/profile-displayphoto-shrink_400_400/0?e=1603324800&v=beta&t=7KCl-R76FWI3wAgSKBSCmrI6dPSvBqE7jDkhCOTZCaQ"
      />
      <Chat
        name="Nicole"
        message="Love you"
        timestamp="2 days ago"
        profilePic="https://profile-images.xing.com/images/8a5c3a56f55741fabf8911d38469b737-5/nicole-distler.1024x1024.jpg"
      />
      <Chat
        name="Cristina"
        message="Tot bé?"
        timestamp="1 week ago"
        profilePic="https://www.instyle.es/medio/2020/06/27/cristina-pedroche-tarta-queso_4aeeb946_812x456.jpg"
      />
    </div>
  );
};

export default Chats;
