import  axios  from 'axios';

const base="https://social-network.samuraijs.com/api/1.0/"
const instance=axios.create({
    withCredentials: true,
    headers:{
        // "API-KEY":"5cf9b979-9d72-434e-b32d-2c5efe8f8070"
        "API-KEY":"b70ab979-ad2a-4569-bbf5-ecec5c146183"

    },
    baseURL:"https://social-network.samuraijs.com/api/1.0/"
})

export const usersAPI={
    getUsers(currentPage=1,pageSize=5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>{
                return response.data;
            })},
    getFriends(currentPage=1,pageSize=5,friend=true) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&friend=${friend}`).then(response=>{
                return response.data;
            })},
}

export const followAPI={
    unfollow(id){
       return instance.delete(`follow/${id}`).then(responce=>{
        return responce.data
       })
    },
    follow(id){
        return instance.post(`follow/${id}`,{}).then(responce=>{
            return responce.data
           })
    }
}

export const authAPI={
    setUserAuthData(){
        return instance.get(`auth/me`).then(responce=>{
            return responce.data
        })
    },
    login(email,password,rememberMe=false){
        return instance.post('/auth/login',{
            email,password,rememberMe
        }).then(responce=>{
            return responce.data
        })
    },
    logout(){
        return instance.delete('/auth/login')
    }

}

export const profileAPI={
    getProfile(id){
        return instance.get(`profile/`+id).then(responce=>{
         return responce.data
        })
     },
     setProfile(profile){
        return instance.put(`profile`,profile).then(responce=>{
            return responce.data
           })
     },
     getStatus(id){
        return instance.get(`/profile/status/`+id).then(responce=>{
            return responce.data
           })
     },
     putStatus(status){
        return instance.put(`/profile/status/`,{status:status}).then(responce=>{
            return responce.data
           })
     },
     savePhoto(file){
        var formData=new FormData();
        formData.append('image',file)
        return instance.put(`profile/photo`,formData,{headers:{
            'Content-Type':'multipart/form-data'
        }}).then(responce=>{
            return responce
        })
     },


}

        

    