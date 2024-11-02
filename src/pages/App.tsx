import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { sessionState, useChatSession } from "@chainlit/react-client";
import { Playground } from "@/components/playground";
import { useRecoilValue } from "recoil";

import { getChat } from "@/api/chats";
import { Chat } from "@/types";

const userEnv = {};


function App() {
  const { connect } = useChatSession();
  const session = useRecoilValue(sessionState);
  const [chat, setChat] = useState<Chat | null>(null);

  const { chatId } = useParams<{ chatId : string }>();

  if (chatId) {
    getChat(parseInt(chatId, 10)).then((chat) => {
      setChat(chat);
    });
  }



  useEffect(() => {
    if (session?.socket.connected) {
      return;
    }
    fetch("http://localhost:80/custom-auth")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        connect({
          userEnv,
          accessToken: `Bearer: ${data.token}`,
        });
      });
  }, [connect]);

  return (
    <>
      <div className="w-full">
      <h1>
        {chatId}
      </h1>
        {/* {
          chat && (
            <div>
              <h1>{chat.name}</h1>
            </div>
          )
        } */}
        <Playground />
      </div>
    </>
  );
}

export default App;
