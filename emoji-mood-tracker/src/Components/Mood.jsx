import React from 'react'
import emojis from './emoji';

const Mood = ({ moodTab, setMoodTab, onMoodClick }) => {

    // let angryEmoji = "😡";
    // let sadEmoji = "😢";
    // let dissapointEmoji = "😞";
    // let neutralEmoji = "😐";
    // let preservingEmoji = "😣";
    // let happyEmoji = "😊";
    // let laughEmoji = "😆";

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white rounded-lg p-4 shadow">
                <div className="flex justify-between mb-4">
                    <h2 className="text-xl font-bold">Mood Tracker</h2>
                    <button className="text-gray-500 hover:text-gray-700"
                        onClick={() => setMoodTab(!moodTab)}
                    >
                        X
                    </button>
                </div>
                <div className="flex justify-between">
                    {
                        emojis.map((emoji, index) => {
                            return (
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    key={index} onClick={() => onMoodClick({emojiName: emoji.emojiName, emoji: emoji.emoji})}
                                >
                                    {emoji.emoji}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Mood;

