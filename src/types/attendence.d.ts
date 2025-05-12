
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
  

