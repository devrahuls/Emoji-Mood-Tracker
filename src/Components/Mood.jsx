import React from 'react';



const Mood = () => {

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white rounded-lg p-4 shadow">
                <div className="flex justify-between mb-4">
                    <h2 className="text-xl font-bold">Mood Tracker</h2>
                    <button className="text-gray-500 hover:text-gray-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                d="M10 1a9 9 0 100 18 9 9 0 000-18zm4.95 11.364l-1.414 1.414L10 11.414l-3.536 3.536-1.414-1.414L8.586 10 5.05 6.464l1.414-1.414L10 8.586l3.536-3.536 1.414 1.414L11.414 10l3.536 3.536z"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Button 1
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Button 2
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Button 3
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Button 4
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Button 5
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Button 6
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Button 7
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Mood;