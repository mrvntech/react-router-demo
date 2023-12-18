import { Dispatch, createContext } from "react";

export interface IAuthentication {
    user: {
        email?: string
        username?: string
        imageUrl?: string
        role: string
    },
    accessToken: {
        token: string,
        expiredAt: number
    }
}

export const AuthenticationContext = createContext<IAuthentication | null>(null)

export function getAuthentication(): IAuthentication | null {
    const authentication = localStorage.getItem('authentication')
    return authentication != null ? JSON.parse(authentication) as IAuthentication : null
}

export const AuthenticationDispatchContext = createContext<Dispatch<{ type: string }> | null>(null)