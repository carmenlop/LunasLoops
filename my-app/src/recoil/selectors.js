import { selector } from 'recoil'
import { userState } from './atoms'

export const loggedInState = selector({
    key: 'loggedInState',
    get: ({ get }) => {
        const user = get(userState);
        console.log('selector', user)
        if(user) return true
        return false
    }
})