import { UserLoginData } from "@/types";

export function login(userLogindata : UserLoginData) {
    return new Promise((resolve, reject) => {
        resolve("success")
    })
}