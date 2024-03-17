import './App.css'
import React from 'react';
import Cell from './Components/Cell'
import MoodCounts from './Components/MoodCounts';

function App() {

  // This holds every mood that is clicked.
  const [moods, setMoods] = React.useState([]);
  //This holds every mood as 0, and then updates the count as the mood is clicked.
  const [moodCounts, setMoodCounts] = React.useState({
    '😡': 0, '😢': 0, '😞': 0, '😐': 0, '😣': 0, '😊': 0, '😆': 0,
  });

  // This function is called when a mood is clicked from Mood Tab. It updates the moods array and the moodCounts object.
  //Works when a user wants to add a mood or to swap a new mood from the previous one.
  const addMood = (mood, change) => {
    setMoods([...moods, mood]);
    setMoodCounts((prevCounts) => ({
      ...prevCounts,
      [mood]: prevCounts[mood] + change,
    }));
  };


  //formula to calculate average mood-
  /*
    [|(Total no of filled cells * -4)| + (Total no of filled cells * +4)] / Total no of emojis = x;
    [(Total no of filled cells * -4) + x].. upto.. [(Total no of filled cells * +4) + x]
    Here, emojis has a points range from -4 to +4, -1 and 0 excluded, (angry -> -4,...neutral -> 1,...laugh -> +4) and x is the gap between these range.
    So, the average mood is calculated by the above formula.
  */

   //To calculate the total number of filled cells.
   let i = 0;
   let moodAvg = 0;
   const emojiPoints = {'😡': -4, '😢': -3, '😞': -2, '😐': 1, '😣': 2, '😊': 3, '😆': 4};
   let avgEmoji = '';
 
   Object.entries(moodCounts).map(([emoji, count]) => (
     i = i + count
   ))
   console.log(i)
 
  //To calculate the average mood by multiplying a unique point (associated to each emoji) with the count of each emoji.
  for (let [emoji, count] of Object.entries(moodCounts)) {
    const points = emojiPoints[emoji];
    if (points !== undefined){
      moodAvg += count * points;
    }
  }
  console.log(moodAvg)
 
 let x = ((i * 4) + (i * 4)) / 7; 
 //x is the gap between the range of emojis. 4 represents the minimum and maximum points of the emojis and 7 represents the total number of emojis.
 console.log(x)
 //Represents each gap between the whole range with an emoji.
  if( ( i * (-4)) <= moodAvg && moodAvg <= (i* (-4)) + x){avgEmoji = '😡';}
  if( ( i * (-4)) + x < moodAvg && moodAvg <= (i* (-4)) + (2 * x)){avgEmoji = '😢';}
  if( ( i * (-4)) + (2 * x) < moodAvg && moodAvg <= (i* (-4)) + (3 * x)){avgEmoji = '😞';}
  if( ( i * (-4)) + (3 * x) < moodAvg && moodAvg <= (i* (-4)) + (4 * x)){avgEmoji = '😐';}
  if( ( i * (-4)) + (4 * x) < moodAvg && moodAvg <= (i* (-4)) + (5 * x)){avgEmoji = '😣';}
  if( ( i * (-4)) + (5 * x) < moodAvg && moodAvg <= (i* (-4)) + (6 * x)){avgEmoji = '😊';}
  if( ( i * (-4)) + (6 * x) < moodAvg && moodAvg <= (i* (-4)) + (7 * x)){avgEmoji = '😆';}

  return (
    <>
      <h1 className='text-3xl'>hello</h1>
      <Cell onMoodCountChange={addMood} />
      <Cell onMoodCountChange={addMood} />
      <Cell onMoodCountChange={addMood} />
      <Cell onMoodCountChange={addMood} />
      <Cell onMoodCountChange={addMood} />
      <Cell onMoodCountChange={addMood} />
      <Cell onMoodCountChange={addMood} />
      <Cell onMoodCountChange={addMood} />
      <Cell onMoodCountChange={addMood} />
      <Cell onMoodCountChange={addMood} />

      <MoodCounts moodCounts={moodCounts}/>
      <h2>Average Mood: {avgEmoji}</h2>
    </>
  )
}

export default App
