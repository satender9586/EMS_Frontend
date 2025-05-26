
// >>>>>>>>>>>>>>>>>>>>>>> LEAVE REQUEST PAYLOAD

export interface leaveRequestPayload {
    leave_type : string,
    start_date : string,
    end_date : string,
    reason : string
}

//>>>>>>>>>>>>>>>>>>>>>>>> LEAVE PAYLOAD

export interface leaveActionPayload {
    leaveId : string,
    action : string
}