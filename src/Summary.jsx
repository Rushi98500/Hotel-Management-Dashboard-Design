import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Summary() {
    const [summaryData, setSummaryData] = useState({});

    {/* This for api handling 
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://api-xzy');
            setSummaryData(response.data);
        };

        fetchData();
    }, []); */}

    return (

        <section className="summary bg-gray-100 rounded-md p-4 ">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                <div className="summary-card bg-white rounded-md shadow-md flex p-4">
                    <img className=' rounded-2xl w-28 h-28' src="totalarrived.png" />
                    <div className='m-5'>
                        <h3>Total Arrived</h3>
                        <p className="text-xl font-bold">{summaryData.totalArrived || 0}</p>
                    </div>
                </div>

                <div className="summary-card bg-white rounded-md p-4 shadow-md flex">
                    <img className=' rounded-2xl w-28 h-28' src="hotelBooked.png" />
                    <div className='m-5'>
                        <h3>Total Booked</h3>
                        <p className="text-xl font-bold">{summaryData.totalBooked || 0}</p>
                    </div>
                </div>

                <div className="summary-card bg-white rounded-md p-4 shadow-md flex">
                    <img className=' rounded-2xl w-28 h-28' src="totalCheckIn.png" />
                    <div className='m-5'>
                        <h3>Total Check in</h3>
                        <p className="text-xl font-bold">{summaryData.totalBooked || 0}</p>
                    </div>

                </div>

            </div>
        </section>



    );

}

export default Summary;
