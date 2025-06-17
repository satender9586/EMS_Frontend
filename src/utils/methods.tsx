import { UserAuthPayload } from "@/types/auth";


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CURRENT DATE & MONTH
export const currentDateAndTime = (): string => {
    const data = Date();
    return data.toLocaleString().split(" ").slice(0,4).join(" "); 
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
export const getMonthStartAndEndDates = () => {
    const now = new Date();
    const currentData = new Date()
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    const formatDate = (date:any) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return {
        start: formatDate(firstDay),
        end: formatDate(lastDay),
        currentDate : formatDate(currentData)
    };
};

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> GET DIFF BETWEEN TWO DATS

export const getDiffInTwoDates = (start: string, end: string): number => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const timeDiff = endDate.getTime() - startDate.getTime();
    const diffInDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))+1;
    return diffInDays;
};

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 

export const storeAuthInLocalStorage = (data: UserAuthPayload) => {
    const { email, status, role,employee_id } = data;
    const userData = { email, status, role ,employee_id};
    window.localStorage.setItem("user", JSON.stringify(userData));
};

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
export const getLocalStrageData = (key: string): any => {
  if (typeof window === "undefined") {
    return null; 
  }
  return window.localStorage.getItem(key);
};

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
export const clearLocalStorage = (key:string)=>{
    window.localStorage.removeItem(key)
}
