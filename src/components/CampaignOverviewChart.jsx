import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import TailwindSelector from './TailwindSelector'; // Ensure this path matches your project structure

// Mock data
const initialData = [
  { month: 'Jan', roomVisited: 100, roomBooked: 60 },
  { month: 'Feb', roomVisited: 120, roomBooked: 80 },
  { month: 'Mar', roomVisited: 50, roomBooked: 10 },
  { month: 'Apr', roomVisited: 100, roomBooked: 60 },
  { month: 'May', roomVisited: 70, roomBooked: 55 },
  { month: 'Jun', roomVisited: 150, roomBooked: 90 },
  { month: 'Jul', roomVisited: 75, roomBooked: 90 },
  // Add more data as needed
];

const CampaignOverviewChart = () => {
  const [data, setData] = useState(initialData);

  const handleMonthChange = (month) => {
    if (month === 'All') {
      setData(initialData);
    } else {
      const filteredData = initialData.filter(d => d.month === month);
      setData(filteredData);
    }
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-700">Campaign Overview</h2>
        <TailwindSelector onMonthChange={handleMonthChange} />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <span className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div> Room Visited
        </span>
        <span className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div> Room Booked
        </span>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[0, 200]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="roomVisited" stroke="#3182ce" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="roomBooked" stroke="#38a169" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CampaignOverviewChart;
