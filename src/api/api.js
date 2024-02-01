import axios from 'axios'

const instanceAXIOS = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'api-key': '06e40396-0103-4b3e-bfd5-81092855e9b3' }
})

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanceAXIOS.get(`users?page=${ currentPage }&count=${ pageSize }`)
    },

    unfollowUser(idUser) {
        return instanceAXIOS.delete(`follow/${ idUser }`)
    },

    followUser(idUser) {
        return instanceAXIOS.post(`follow/${ idUser }`)
    }
}

export const profileApi = {
    getProfile(userId) {
        return instanceAXIOS.get(`profile/${ userId }`)
    },

    getStatus(userId) {
        return instanceAXIOS.get(`profile/status/${ userId }`)
    },

    updateStatus(status) {
        return instanceAXIOS.put('profile/status', { status })
    }
}

export const authApi = {
    getAccountData() {
        return instanceAXIOS.get(`auth/me`)
    },

    login(email, password, rememberMe = false) {
        return instanceAXIOS.post(`auth/login`, { email, password, rememberMe })
    },

    logout() {
        return instanceAXIOS.delete(`auth/login`)
    }
}