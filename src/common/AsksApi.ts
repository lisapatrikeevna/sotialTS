import axios from "axios";

const instans= axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY':'40979d82-3c32-4398-abbe-81041d6b3ea6'
    }
})
export const UserApi={
    getUsers(currentPage=1,pagesSize=10){
        debugger
        return  instans.get(`users?page=${currentPage}&count=${pagesSize}`)
            .then(response =>{
                return response.data
            })
    }
}
export const AuthMyApi={
    getMy(){
        debugger
        return  instans.get(`auth/me`)
            .then(response =>{
                return response.data
            })
    }
}
export const FollowUserApi={
    getUser(userId:number){
        return  instans.get(`follow/${userId}`)
            // .then(response =>{
            //     return response.data
            // })
    },

    unfollow(userId:number){
        return  instans.delete(`follow/${userId}`)
    },

    follow(userId:number){
        return  instans.post(`follow/${userId}`)
    },

}
export const ProfileUserApi={
    getUser(userId:number){
        return  instans.get(`profile/${userId}`)
    }
}