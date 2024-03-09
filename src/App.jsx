import './App.css'
import React from 'react';
import Cell from './Components/Cell'
import MoodCounts from './Components/MoodCounts';

function App() {

  // This holds every mood that is clicked.
  const [moods, setMoods] = React.useState([]);
  //This holds every mood as 0, and then updates the count as the mood is clicked.
  const [moodCounts, setMoodCounts] = React.useState({
    '😡': 0,
    '😢': 0,
    '😞': 0,
    '😐': 0,
    '😣': 0,
    '😊': 0,
    '😆': 0,
  });

  // This function is called when a mood is clicked. It updates the moods array and the moodCounts object.
  const addMood = (mood) => {
    setMoods([...moods, mood]);
    setMoodCounts((prevCounts) => ({
      ...prevCounts,
      [mood]: prevCounts[mood] + 1,
    }));
  };


  return (
    <>
      <h1 className='text-3xl'>hello</h1>
      <Cell onMoodCountChange={addMood} />
      <Cell onMoodCountChange={addMood} />
      <Cell onMoodCountChange={addMood} />

      <MoodCounts moodCounts={moodCounts}/>
    </>
  )
}

export default App
