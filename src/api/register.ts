import { UserRegisterData } from "@/types";

export function register(userRegisterData : UserRegisterData) {
    return new Promise((resolve, reject) => {
        resolve("success")
    })
}