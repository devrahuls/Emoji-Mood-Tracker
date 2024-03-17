import React from 'react'

const Mood = ({ setMood, mood, onMoodClick }) => {

    let angryEmoji = "😡";
    let sadEmoji = "😢";
    let dissapointEmoji = "😞";
    let neutralEmoji = "😐";
    let preservingEmoji = "😣";
    let happyEmoji = "😊";
    let laughEmoji = "😆";

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white rounded-lg p-4 shadow">
                <div className="flex justify-between mb-4">
                    <h2 className="text-xl font-bold">Mood Tracker</h2>
                    <button className="text-gray-500 hover:text-gray-700"
                    onClick = { () => setMood(!mood)}
                    >
                       X
                    </button>
                </div>
                <div className="flex justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={ () => onMoodClick(angryEmoji)}
                    >
                    {angryEmoji}
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={ () => onMoodClick(sadEmoji)}
                    >
                    {sadEmoji}
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={ () => onMoodClick(preservingEmoji)}
                    >
                    {preservingEmoji}
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={ () => onMoodClick(neutralEmoji)}
                    >
                    {neutralEmoji}
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={ () => onMoodClick(dissapointEmoji)}
                    >
                    {dissapointEmoji}
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={ () => onMoodClick(happyEmoji)}
                    >
                        {happyEmoji}
                    </button>
                    <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={ () => onMoodClick(laughEmoji)}
                    >
                        {laughEmoji}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Mood;

