import App from '@/pages/App';
import {getChats } from '@/api/chats';
import { useState } from 'react';
import { Chat } from '@/types';
import { NavLink, Outlet } from 'react-router-dom';

export default function Chats() {
    const [chats, setChats] = useState<Chat[]>([])
    getChats().then((data) => {
        setChats(data);
    });


    return (
        <div className="flex flex-row bg-orange-400">
            <div className="bg-blue-400 w-1/6">
                <div>
                    <h1>Conversations</h1>
                </div>
                
                <div>
                    <ul>
                        {chats.map((chat) => {
                            return (
                                <NavLink key={chat.id} to={"/chats/" + chat.id.toString()}>
                                    <li>{chat.name}</li>
                                </NavLink>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="bg-amber-400 w-full">
                <Outlet />
            </div>
        </div>
    );
}