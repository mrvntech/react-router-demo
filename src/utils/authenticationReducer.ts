import { IAuthentication } from "./AuthenticationContext";

export default function authenticationReducer(state: IAuthentication | null, action: { type: string, role?: string }): IAuthentication | null {
    switch (action.type) {
        case 'login':
            return {
                accessToken: {
                    token: 'abc',
                    expiredAt: 1234
                },
                user: {
                    email: 'mrvntech@gmail.com',
                    username: 'mrvntech',
                    role: action.role ?? '',
                    imageUrl: ''
                }
            }
        case 'logout':
            return null;
        default:
            return null
    }
}