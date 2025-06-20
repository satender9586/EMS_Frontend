import { authInfoInterface } from "@/types/profile";

interface ProfilesCardsProps {
  profileData: authInfoInterface;
}



const ProfilesCards: React.FC<ProfilesCardsProps> = ({ profileData }) => {
  const { personal_info, user_info, contact_info, bank_info } = profileData;



  const InfoRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between py-1 border-b border-gray-100 last:border-b-0">
      <span className="text-sm text-gray-500 font-serif">{label}</span>
      <span className="text-sm text-gray-800 font-sans">{value || "-"}</span>
    </div>
  );



  return (
    <div className="space-y-6">
      {/* Profile Summary */}
      <div className="bg-white shadow rounded-xl p-4 flex gap-4 items-center">
        <div className="w-16 h-16 rounded-full bg-gray-300" />
        <div>
          <h2 className="text-lg font-sarif text-gray-800">
            {personal_info?.first_name} {personal_info?.last_name}
          </h2>
          <div className="text-sm text-gray-600 flex font-sans flex-wrap gap-2 mt-1">
            <span>{user_info?.employee_id}</span>
            <span className="border-l border-gray-300 pl-2">
              {user_info.role}
            </span>
            <span className="border-l border-gray-300 pl-2">{user_info.department}</span>
          </div>
          <div className="text-sm text-gray-600 flex font-sans flex-wrap gap-2 mt-1">
            <span>+91 {contact_info?.phone_number}</span>
            <span className="border-l border-gray-300 pl-2">{user_info.email}</span>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {/* Personal Details */}
        <div className="bg-white shadow rounded-xl p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 font-serif">Personal Details</h3>
          <div className="space-y-2">
            <InfoRow label="Mobile" value={contact_info?.phone_number || "-"} />
            <InfoRow label="Email" value={contact_info?.alternate_email || "-"} />
            <InfoRow label="Date of Join" value="-" />
            <InfoRow label="Blood Group" value={personal_info?.blood_group || "-"} />
            <InfoRow label="Date of Birth" value={personal_info?.date_of_birth?.split("T")[0] || "-"} />
            <InfoRow label="Gender" value={personal_info?.gender || "-"} />
            <InfoRow label="Reporting To" value="-" />
          </div>
        </div>

      

      

        {/* Identity Info */}
        <div className="bg-white shadow rounded-xl p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 font-serif">Identity Information</h3>
          <div className="space-y-2">
            <InfoRow label="Phone Number" value={contact_info?.phone_number || "-"} />
            <InfoRow label="Alter Email" value={contact_info?.alternate_email || "-"} />
            <InfoRow label="Address" value={contact_info?.address || "-"} />
            <InfoRow label="Emergency Number" value={contact_info?.emergency_number || "-"} />
          </div>
        </div>
          {/* Bank Details */}
        <div className="bg-white shadow rounded-xl p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 font-serif">Bank Details</h3>
          <div className="space-y-2">
            <InfoRow label="Passport Number" value="-" />
            <InfoRow label="Bank Name" value={bank_info?.bank_name || "-"} />
            <InfoRow label="Account Number" value={bank_info.bank_number || "-"} />
            <InfoRow label="IFSC Code" value={bank_info.ifsc_number || "-"} />
            <InfoRow label="Pan Number" value={bank_info.pan_number || "-"} />
            <InfoRow label="PF Number" value={bank_info.pf_number || "-"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilesCards;
