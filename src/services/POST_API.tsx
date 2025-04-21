import { instance } from "@/lib/Axios.interceptor";
const Auth_Base = "http://localhost:8080/api/v1/auth/login"




interface authApiInput {
    email:string,
    password:string,
    department:number,
    role:number
}

//  Add user API
export const AddNewUserApi = async (data:authApiInput) => {
    const response = await instance.post(`${Auth_Base}/register`,data);
    if (response.status !== 200) {
        throw new Error("Something is wrong!");
    }
    return response;
};


// add login API

export const LogiApi = async (data: { email: string; password: number }) => {
    const response = await instance.post(`${Auth_Base}`, data)
    if (response.status !== 200) {
      throw new Error("Something is wrong!")
    }
    return response
  }
  







//https://localhost:8080/api/v1
//https://localhost:8080/api/v1/attender
//https://localhost:8080/api/v1/attender/pucnin
//https://localhost:8080/api/v1/attender/punchout

//https://localhost:8080/api/v1/auth
//https://localhost:8080/api/v1/auth/login
//https://localhost:8080/api/v1/auth/register
//https://localhost:8080/api/v1/auth/forgetn-password

