import React from 'react';

function Calender() {
  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="px-6 py-3 border-b">Date</th>
              <th className="px-6 py-3 border-b">Day</th>
              <th className="px-6 py-3 border-b">Punch In</th>
              <th className="px-6 py-3 border-b">Attendance</th>
              <th className="px-6 py-3 border-b">Punch Out</th>
              <th className="px-6 py-3 border-b">Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 even:bg-gray-50 text-gray-800">
              <td className="px-6 py-4 border-b">25-04-2025</td>
              <td className="px-6 py-4 border-b">Friday</td>
              <td className="px-6 py-4 border-b">09:00</td>
              <td className="px-6 py-4 border-b text-green-600 font-bold">P</td>
              <td className="px-6 py-4 border-b">18:00</td>
              <td className="px-6 py-4 border-b">9:00</td>
            </tr>
            <tr className="hover:bg-gray-50 even:bg-gray-50 text-gray-800">
              <td className="px-6 py-4 border-b">24-04-2025</td>
              <td className="px-6 py-4 border-b">Thursday</td>
              <td className="px-6 py-4 border-b">09:15</td>
              <td className="px-6 py-4 border-b text-green-600 font-bold">P</td>
              <td className="px-6 py-4 border-b">18:05</td>
              <td className="px-6 py-4 border-b">8:50</td>
            </tr>
            <tr className="hover:bg-gray-50 even:bg-gray-50 text-gray-800">
              <td className="px-6 py-4 border-b">23-04-2025</td>
              <td className="px-6 py-4 border-b">Wednesday</td>
              <td className="px-6 py-4 border-b">08:55</td>
              <td className="px-6 py-4 border-b text-green-600 font-bold">P</td>
              <td className="px-6 py-4 border-b">17:50</td>
              <td className="px-6 py-4 border-b">8:55</td>
            </tr>
            <tr className="hover:bg-gray-50 even:bg-gray-50 text-gray-800">
              <td className="px-6 py-4 border-b">23-04-2025</td>
              <td className="px-6 py-4 border-b">Wednesday</td>
              <td className="px-6 py-4 border-b">08:55</td>
              <td className="px-6 py-4 border-b text-green-600 font-bold">P</td>
              <td className="px-6 py-4 border-b">17:50</td>
              <td className="px-6 py-4 border-b">8:55</td>
            </tr>
            <tr className="hover:bg-gray-50 even:bg-gray-50 text-gray-800">
              <td className="px-6 py-4 border-b">23-04-2025</td>
              <td className="px-6 py-4 border-b">Wednesday</td>
              <td className="px-6 py-4 border-b">08:55</td>
              <td className="px-6 py-4 border-b text-green-600 font-bold">P</td>
              <td className="px-6 py-4 border-b">17:50</td>
              <td className="px-6 py-4 border-b">8:55</td>
            </tr>
            <tr className="hover:bg-gray-50 even:bg-gray-50 text-gray-800">
              <td className="px-6 py-4 border-b">23-04-2025</td>
              <td className="px-6 py-4 border-b">Wednesday</td>
              <td className="px-6 py-4 border-b">---</td>
              <td className="px-6 py-4 border-b text-red-600 font-bold">A</td>
              <td className="px-6 py-4 border-b">---</td>
              <td className="px-6 py-4 border-b">---</td>
            </tr>
            <tr className="hover:bg-gray-50 even:bg-gray-50 text-gray-800">
              <td className="px-6 py-4 border-b">23-04-2025</td>
              <td className="px-6 py-4 border-b">Wednesday</td>
              <td className="px-6 py-4 border-b">08:55</td>
              <td className="px-6 py-4 border-b text-green-600 font-bold">P</td>
              <td className="px-6 py-4 border-b">17:50</td>
              <td className="px-6 py-4 border-b">8:55</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calender;
