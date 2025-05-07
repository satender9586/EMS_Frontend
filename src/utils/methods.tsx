import { UserAuthPayload } from "@/types/auth";

export const currentDateAndTime = (): string => {
    const data = Date();
    return data.toLocaleString().split(" ").slice(0,4).join(" "); 
}


export const storeAuthInLocalStorage = (data: UserAuthPayload) => {
    const { email, status, role } = data;
    const userData = { email, status, role };
    window.localStorage.setItem("user", JSON.stringify(userData));
};

export const getLocalStrageData = (key:string)=>{
    window.localStorage.getItem(key)
}

export const clearLocalStorage = (key:string)=>{
    window.localStorage.removeItem(key)
}