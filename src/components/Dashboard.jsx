import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from '../Header';
import Summary from '../Summary';
import CampaignOverviewChart from './CampaignOverviewChart';
import BookingList from './BookingList';
import StaffSchedule from './StaffSchedule';




const Dashboard = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-100 bg-gre">
            {/* for small screens */}
            {isNavOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" onClick={() => setIsNavOpen(true)}></div>
            )}

            {/* Sidebar Navigation */}
            <div className={`fixed inset-y-0 left-0 transform  ${isNavOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0   transition-transform duration-300 ease-in-out bg-gray-200 p-4 z-30`}>
                {/* Menu button for toggling sidebar */}
                <div className="text-right mb-4 md:hidden  ">
                    <button
                        onClick={() => setIsNavOpen(false)}
                        className="text-gray-400 hover:text-gray-300"
                    >
                        Close
                    </button>
                </div>
                <Navigation />
            </div>

            {/* Main content area */}
            <div className="flex flex-col flex-grow  md:ml-52 xl:ml-52 ">
                {/* Header always visible */}
                <Header />
                {/* Main content including Summary, Chart, and BookingList */}
                <div className="flex-grow p-3 ">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                        {/* Left side - Summary and CampaignOverviewChart */}
                        <div className="lg:col-span-3 space-y-4">
                            <Summary />
                            <CampaignOverviewChart />
                            <BookingList />

                        </div>

                        {/* Right side - BookingList */}
                        <div className="lg:col-span-1">
                            <StaffSchedule />
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Menu button to open sidebar on small screens */}
            <button
                className={`fixed top-4 left-4 z-40 md:hidden ${isNavOpen ? 'hidden' : 'block'}`}
                onClick={() => setIsNavOpen(true)}
            >
                Menu
            </button>
        </div>
    );
};

export default Dashboard;