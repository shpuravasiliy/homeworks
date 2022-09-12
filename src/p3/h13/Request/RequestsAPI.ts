import axios, {AxiosResponse} from 'axios';


const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',
})


//API
export const RequestsAPI = {
    create(body: bodyType) {
        return instance.post<bodyType, AxiosResponse<ResponseType>>('/auth/test', body)
     },
}

//types
export type bodyType = {
    success: boolean
}
export type ResponseType = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    }
    yourQuery: {}
}