
// punchIn 
export interface punchInPayload {
  users_id: string
}

export interface punchInResponse {
  success: boolean
  token?: string
  message?: string
}


// punch Out
export interface punchOutPayload {
  users_id: string
}

export interface punchInResponse {
  success: boolean
  token?: string
  message?: string
}

 export interface MyAttendenceResponseInterface {
    date: string,
    type: string,
    holiday_name: string,
    punch_in: string,
    punch_out: string,
    hours_worked: string,
    reason: string
    status: string
  }
