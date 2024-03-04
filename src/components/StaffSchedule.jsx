import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Avatar from '@mui/material/Avatar';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import ScheduleIcon from '@mui/icons-material/Schedule';

const StaffSchedule = () => {
  const [date, setDate] = useState(new Date());
  const [currentDaySchedule, setCurrentDaySchedule] = useState([]);

  const staffData = [
    {
      department: 'Front Office',
      tasks: [
        { id: 1, title: 'Machine repair', completed: true, time: '10:00 AM', date: '2024-03-15', name: 'John Doe' },
        { id: 2, title: 'New task', completed: false, time: '2:00 PM', date: '2024-03-16', name: 'Jane Smith' },
      ],
    },
    {
      department: 'Kitchen',
      tasks: [
        { id: 3, title: 'Cooking for guest', completed: true, time: '11:00 AM', date: '2024-03-15', name: 'Alice Johnson' },
        { id: 4, title: 'Inventory check', completed: false, time: '4:00 PM', date: '2024-03-17', name: 'Bob Brown' },
      ],
    },
    {
      department: 'Guest Room',
      tasks: [
        { id: 5, title: 'Cleaning room', completed: true, time: '9:00 AM', date: '2024-03-18', name: 'Charlie Davis' },
        { id: 6, title: 'Laundry collection', completed: false, time: '3:00 PM', date: '2024-03-15', name: 'Dana Evans' },
      ],
    },
  ];

  useEffect(() => {
    const selectedDate = date.toISOString().split('T')[0];
    const filteredSchedule = staffData.map(department => ({
      ...department,
      tasks: department.tasks.filter(task => task.date === selectedDate),
    })).filter(department => department.tasks.length > 0);
    setCurrentDaySchedule(filteredSchedule);
  }, [date]);

  const handleCalendarChange = (newDate) => setDate(newDate);

  return (
    <div className="flex flex-col items-center p-5">
      <Calendar onChange={handleCalendarChange} value={date} className="border-none shadow-lg rounded-lg bg-gray-300" />
      <div className="mt-4">
        Selected Date: {date.toLocaleDateString('en-IN')}
      </div>
      {currentDaySchedule.map((department, index, task) => (
        <div key={index} className="bg-blue-100 p-4 mt-4 w-full rounded-lg shadow ">
          <h3 className="font-bold">
            {department.department}
          </h3>
          {department.tasks.map(task => (
            <div key={task.id} className=" items-center mt-2">
              <div className='bg-red- flex p-2'>
                <Avatar sx={{ width: 24, height: 24, fontSize: '0.75rem', marginRight: '2' }}>{task.name[0]}</Avatar>
                <span className=' m-1'>{task.name}</span>
              </div>

              <div className="ml-2 bg-green flex">
                <ScheduleIcon />
                <span className="ml-1">{task.time}</span>
                <span className="ml-1">{task.title} (Task #{task.id})</span>
                {task.completed ? (
                  <CheckCircleOutlineIcon className="ml-1 text-green-500" />
                ) : (
                  <HourglassEmptyIcon className="ml-1 text-orange-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default StaffSchedule;
