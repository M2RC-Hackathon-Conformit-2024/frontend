import { Chat } from '@/types'

export async function getChats() {
    const chats : Chat[] = [
        {
            "id": 1,
            "name": "Chat 1",
        },
        {
            "id": 2,
            "name": "Chat 2",
        },
        {
            "id": 3,
            "name": "Chat 3",
        },
        {
            "id": 4,
            "name": "Chat 4",
        }
    ]

    return new Promise<Chat[]>((resolve, reject) => {
        resolve(chats)
    })
}

export function getChat(id: number) {
    const chat : Chat = {
        "id": id,
        "name": "Chat " + id,
    }

    return new Promise<Chat>((resolve, reject) => {
        resolve(chat)
    })
}