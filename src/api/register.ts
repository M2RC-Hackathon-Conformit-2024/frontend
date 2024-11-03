import { UserRegisterData } from "@/types";

export async function register(userRegisterData : UserRegisterData) {
    const res = await fetch("http://localhost:80/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userRegisterData)
    })
    if (!res.ok) {
        throw new Error("Error registering user")
    }
    return res.json()
}