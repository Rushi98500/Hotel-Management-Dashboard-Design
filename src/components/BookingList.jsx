import React from 'react';
import Avatar from '@mui/joy/Avatar';

const bookings = [
  {
    id: 1,
    avatarUrl: 'https://example.com/avatar1.jpg',
    name: 'John Doe',
    roomNumber: '101',
    roomType: 'Single',
    visitDate: '2023-03-01',
    bookedDate: '2023-02-25',
    paymentStatus: 'Paid'
  },
  {
    id: 2,
    avatarUrl: 'https://example.com/avatar2.jpg',
    name: 'Jane Smith',
    roomNumber: '102',
    roomType: 'Double',
    visitDate: '2023-03-02',
    bookedDate: '2023-02-26',
    paymentStatus: 'Unpaid'
  },
  
];

const BookingList = () => {
  return (
    <div className="max-w-6xl  py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Booking List</h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className="text-left text-gray-700">
                <th className="px-4 py-2 font-medium">Name</th>
                <th className="px-4 py-2 font-medium">Room No</th>
                <th className="px-4 py-2 font-medium">Room Type</th>
                <th className="px-4 py-2 font-medium">Visit Date</th>
                <th className="px-4 py-2 font-medium">Booked Date</th>
                <th className="px-4 py-2 font-medium">Payment Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bookings.map(booking => (
                <tr key={booking.id} className="bg-white">
                  <td className="px-4 py-2 whitespace-nowrap">{booking.name}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{booking.roomNumber}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{booking.roomType}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{booking.visitDate}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{booking.bookedDate}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${booking.paymentStatus === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {booking.paymentStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
