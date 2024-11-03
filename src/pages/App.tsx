import { useEffect } from "react";
import { sessionState, useChatSession } from "@chainlit/react-client";
import { Playground } from "../components/playground";
import { useRecoilValue } from "recoil";
import { useToken } from "../TokenContext"; // Import useToken

const userEnv = {};

function App() {
  const { connect } = useChatSession();
  const session = useRecoilValue(sessionState);
  const { token, setToken } = useToken(); // Récupère token et setToken depuis le contexte

  useEffect(() => {
    if (session?.socket.connected) {
      return;
    }
    
    // Utilise le token depuis le contexte
    connect({
      userEnv,
      accessToken: `Bearer ${token}`
    });
    
  }, [connect]); // Ajoute token et session comme dépendances

  // Exemple de fonction pour mettre à jour le token
  const updateToken = () => {
    const newToken = "nouveauToken";
    setToken(newToken); // Met à jour le token dans le contexte
  };

  return (
    <>
      <div>
        <Playground />
      </div>
    </>
  );
}

export default App;
