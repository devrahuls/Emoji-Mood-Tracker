import React from 'react';

const MoodCounts = ({ moodCounts }) => {
  return (
    <div>
      <h2>Mood Counts</h2>
      <ul>
        {Object.entries(moodCounts).map(([emoji, count]) => (
          <li key={emoji}>
            {emoji}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoodCounts;
