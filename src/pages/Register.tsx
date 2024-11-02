import { useState } from "react";
import { register } from "@/api/register";
import { Navigate, Link } from "react-router-dom";

export default function Register() {
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [registerInProgress, setRegisterInProgress] = useState<boolean>(false)
    const [isRegister, setIsRegister] = useState<boolean | null>(null)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        setRegisterInProgress(true)
        e.preventDefault()
        const form = e.currentTarget as HTMLFormElement
        const email = form.email.value
        const password = form.password.value
        const passwordConf = form.passwordConf.value
        setIsRegister(true)

        register({email, password, passwordConf})
            .then((res) => {
                setErrorMessage("")
                setIsRegister(true)
            })
            .catch((e : Error) => {
                setErrorMessage(e.message)
            })
            .finally(() => setRegisterInProgress(false))
    }

    if (isRegister) {
        return <Navigate to="/chat" />
    }
    return (<>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Créer un compte
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Mot de passe
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Conformation du mot de passe
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="passwordConf"
                                    name="passwordConf"
                                    type="password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={registerInProgress}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Créer son compte
                            </button>
                        </div>
                    </form>

                    <div>
                        <span>Déjà un compte </span>
                        <Link to="/login">S'y connecter</Link>
                    </div>
                </div>
            </div>
        </>
    )
}