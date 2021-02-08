import axios from "axios";
import {AxiosGetType} from "../components/ProfileWrap";

type MyResType={
    data:{id:number,email:string,login:string}
    resultCode:number
    message:Array<string>
}
const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '40979d82-3c32-4398-abbe-81041d6b3ea6'
    }
})
export const UserApi = {
    getUsers(currentPage = 1, pagesSize = 10) {
        // debugger
        return instans.get(`users?page=${currentPage}&count=${pagesSize}`)
            .then(response => {
                return response.data
            })
    }
}
export const AuthMyApi = {
    getMy() {
        return instans.get<MyResType>(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email: string, password: string, rememberMe=true) {
        return instans.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                return response.data
            })
    },
    logout(){
        return instans.delete(`auth/login`).then(response=>{
            return response.data
        })
    }
}
export const FollowUserApi = {
    getUser(userId: number) {
        return instans.get(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(userId: number) {
        return instans.delete(`follow/${userId}`)
    },
    follow(userId: number) {
        return instans.post(`follow/${userId}`)
    },
}
export const ProfileUserApi = {
    getUser(userId: number) {
        return instans.get(`profile/${userId}`)
    },
    updateUserPhoto(file:any) {
        const formData = new FormData()
        formData.append('image',file)
        return instans.put(`profile/photo`,formData, {headers: {
            'Content-Type': 'multipart/form-data'
            }})
    },
    saveProfile(profile:any) {
        return instans.put(`profile`,profile)
    },
    updateStatus(status: string) {
        return instans.put(`profile/status`, {status: status})
    },
    getStatus(userId: number) {
        return instans.get(`profile/status/${userId}`)
    }
}