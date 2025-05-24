import { authInfoInterface } from "@/types/profile"

export const editProfileSetDeafultFormData = (parmaData:authInfoInterface)=>{
    const {user_info, personal_info,contact_info,bank_info}=parmaData;
   return {
      first_name: personal_info.first_name || "",
      last_name: personal_info.last_name || "",
      gender: personal_info.gender || "",
      marital_status: personal_info.marital_status || "",
      blood_group: personal_info.blood_group || "",
      date_of_birth: personal_info.date_of_birth || "",

      phone_number: contact_info.phone_number || "",
      alternative_email: contact_info.alternate_email || "",
      emergency_number: contact_info.emergency_number || "",
      address: contact_info.address || "",

      bank_name: bank_info.bank_name || "",
      bank_number: bank_info.bank_number || "",
      ifsc_number: bank_info.ifsc_number || "",
      pan_number: bank_info.pan_number || "",
      pf_number: bank_info.pf_number || "",
    }
}