// ChatHistory.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface ChatHistoryProps {
  token: string;
}

interface Message {
  id: number;
  id_user: number;
  session_id: number;
  role: string;
  message: string;
}

export function ChatHistory({ token }: ChatHistoryProps) {
  const [history, setHistory] = useState<Message[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get("http://localhost:80/get_conversations", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setHistory(response.data); // Stocke les messages dans l'état
      } catch (error) {
        console.error("Erreur lors de la récupération de l'historique :", error);
      }
    };

    fetchHistory();
  }, [token]);

  return (
    <div className="p-6 bg-gray-200 dark:bg-gray-700 min-h-screen">
      <h2 className="text-lg font-bold mb-4">Chat History</h2>
      <ul>
        {history.map((conversation) => (
          <li key={conversation.id} className="mb-2">
            <strong>{conversation.role}:</strong> {conversation.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
