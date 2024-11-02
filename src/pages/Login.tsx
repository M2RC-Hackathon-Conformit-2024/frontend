import { useState } from "react";
import { login } from "@/api/login";
import { Navigate, Link } from "react-router-dom";

export default function Login() {
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [loginInProgress, setLoginInProgress] = useState<boolean>(false)
    const [isLogin, setIsLogin] = useState<boolean | null>(null)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        setLoginInProgress(true)
        e.preventDefault()
        const form = e.currentTarget as HTMLFormElement
        const email = form.email.value
        const password = form.password.value
        setIsLogin(true)

        login({email, password})
            .then((res) => {
                setErrorMessage("")
                setIsLogin(true)
            })
            .catch((e : Error) => {
                setErrorMessage(e.message)
            })
            .finally(() => setLoginInProgress(false))
    }

    if (isLogin) {
        return <Navigate to="/chat" />
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="M2RC"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Connectez-vous
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Adresse e-mail</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Mot de passe</label>
                            {/* <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div> */}
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <button disabled={loginInProgress} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        <p>{errorMessage}</p>
                    </div>
                </form>
                <div>
                    <span>Pas de compte ? </span>
                    <Link to="/register">En créer un</Link>
                </div>
            </div>
        </div>
    )
}