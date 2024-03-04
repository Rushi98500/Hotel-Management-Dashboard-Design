import React from 'react';

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

const CompletedTasks = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Completed Tasks</h1>
      <div className="flex flex-row md:grid-cols-3 gap-4">
        {staffData.map((department) => (
          <div key={department.department} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{department.department}</h2>
            <ul className="list-disc space-y-2">
              {department.tasks.filter((task) => task.completed).map((task) => (
                <li key={task.id} className="text-gray-600">
                  {task.title} (Completed)
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedTasks;
