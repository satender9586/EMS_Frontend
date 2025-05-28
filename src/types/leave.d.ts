
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

//>>>>>>>>>>>>>>>>>>>>>>>> ADD OFFICIAL HOLIDAY PAYLOAD

export interface addOfficialHolidayPayload {
    holiday_name : string,
    description : string,
    start_date : string,
    end_date : string
}
