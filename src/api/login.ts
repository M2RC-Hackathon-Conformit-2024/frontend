import { UserLoginData } from "@/types";

export async function login(userLogindata : UserLoginData) {
    const res = await fetch("http://localhost:80/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userLogindata)
    })

    if (!res.ok) {
        throw new Error("Error logging in")
    }

    return res.json()
}