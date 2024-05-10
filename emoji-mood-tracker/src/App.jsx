import './App.css'
import React from 'react';
import Cell from './Components/Cell'
import MoodCounts from './Components/MoodCounts';
import { updateDayMood, updateWeeklyAverageMoods } from './api/APICalls';
import emoji from './Components/emoji';

function App() {

  const [moods, setMoods] = React.useState([]); // This holds every mood that is clicked.
  //This holds every mood as 0, and then updates the count as the mood is clicked.
  const [moodCounts, setMoodCounts] = React.useState({
    '😡': 0, '😢': 0, '😞': 0, '😐': 0, '😣': 0, '😊': 0, '😆': 0,
  });
  const [clearCellContent, setClearCellContent] = React.useState(false); //This is used to clear the emoji inside the cells.
  const [weeklyAverageMoods, setWeeklyAverageMoods] = React.useState([]); //This holds the average mood of each week.

  //For Backend
  React.useEffect(() => {
    const response = updateDayMood(moods);
    console.log(response);
  }, [moods])
  console.log("Mood:", moods);
  React.useEffect(() => {
    const response = updateWeeklyAverageMoods(weeklyAverageMoods);
    console.log(response);
  }, [weeklyAverageMoods])

  // This function is called when a mood is clicked from Mood Tab. It updates the moods array and the moodCounts object.
  //Works when a user wants to add a mood or to swap a new mood from the previous one.
  const addMood = (mood, change) => {
    // setMoods([...moods, mood]);
    setMoodCounts((prevCounts) => ({
      ...prevCounts,
      [mood]: prevCounts[mood] + change,
    }));
    // const response = await updateDayMood(moods);
    // console.log(response);
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
  const emojiPoints = { '😡': -4, '😢': -3, '😞': -2, '😐': 1, '😣': 2, '😊': 3, '😆': 4 };
  let avgEmoji = '';

  Object.entries(moodCounts).map(([emoji, count]) => (
    i = i + count
  ))
  console.log(i)

  //To calculate the average mood by multiplying a unique point (associated to each emoji) with the count of each emoji.
  for (let [emoji, count] of Object.entries(moodCounts)) {
    const points = emojiPoints[emoji];
    if (points !== undefined) {
      moodAvg += count * points;
    }
  }
  console.log(moodAvg)

  let x = ((i * 4) + (i * 4)) / 7;
  //x is the gap between the range of emojis. 4 represents the minimum and maximum points of the emojis and 7 represents the total number of emojis.
  console.log(x)
  //Represents each gap between the whole range with an emoji.
  if ((i * (-4)) <= moodAvg && moodAvg <= (i * (-4)) + x) { avgEmoji = '😡'; }
  if ((i * (-4)) + x < moodAvg && moodAvg <= (i * (-4)) + (2 * x)) { avgEmoji = '😢'; }
  if ((i * (-4)) + (2 * x) < moodAvg && moodAvg <= (i * (-4)) + (3 * x)) { avgEmoji = '😞'; }
  if ((i * (-4)) + (3 * x) < moodAvg && moodAvg <= (i * (-4)) + (4 * x)) { avgEmoji = '😐'; }
  if ((i * (-4)) + (4 * x) < moodAvg && moodAvg <= (i * (-4)) + (5 * x)) { avgEmoji = '😣'; }
  if ((i * (-4)) + (5 * x) < moodAvg && moodAvg <= (i * (-4)) + (6 * x)) { avgEmoji = '😊'; }
  if ((i * (-4)) + (6 * x) < moodAvg && moodAvg <= (i * (-4)) + (7 * x)) { avgEmoji = '😆'; }


  //reset function to reset the moodCounts, moods array, remove emoji from each cells, and the average mood and save the current avgEmoji in an array.
  function handleReset() {
    setMoodCounts({
      '😡': 0, '😢': 0, '😞': 0, '😐': 0, '😣': 0, '😊': 0, '😆': 0,
    });
    setMoods([]);
    setClearCellContent(true);
    setWeeklyAverageMoods((prevMoods) => [...prevMoods, avgEmoji]); //Save the current avgEmoji in an array.
    // setWeekCount((prevCount) => prevCount + 1); //Increase the week count by 1.
    // avgEmoji = '';
    // const response = await updateWeeklyAverageMoods(weeklyAverageMoods);
    // console.log(response);
  }

  //To keep track of the week count. Also, to keep track of the average mood of each week.
  React.useEffect(() => {
    if (clearCellContent) {
      setTimeout(() => {
        setClearCellContent(false);
      }, 100);
    }
  }, [clearCellContent]);
  console.log(weeklyAverageMoods);

  function CellCreator(){
    const arr = [];
    for(let i=0; i<11; i++){
      arr[i] = <Cell key={i} onMoodCountChange={addMood} clearContent={clearCellContent} index={i} moods={moods} setMoods= {setMoods}/>
    }
    return arr;
  }

  console.log("Moods: ", moods);
   
  return (
    <>
      <h1 className='text-3xl'>hello</h1>

      {CellCreator().map((item, index)=> item)}

{/*
      <Cell onMoodCountChange={addMood} clearContent={clearCellContent} index={0} />
      <Cell onMoodCountChange={addMood} clearContent={clearCellContent} index={1} />
      <Cell onMoodCountChange={addMood} clearContent={clearCellContent} index={2} />
      <Cell onMoodCountChange={addMood} clearContent={clearCellContent} index={3} />
      <Cell onMoodCountChange={addMood} clearContent={clearCellContent} index={4} />
      <Cell onMoodCountChange={addMood} clearContent={clearCellContent} index={5} />
*/}

      <MoodCounts moodCounts={moodCounts} />
      <h2>Average Mood: {avgEmoji}</h2>
      {weeklyAverageMoods.length > 0 && (
        <div>
          <h3>Weekly Average Moods</h3>
          {weeklyAverageMoods.map((mood, index) => (
            <p key={index}>Week {index}: {mood}</p>
          ))}
        </div>
      )}
      <button onClick={handleReset}>Go to the new week</button>
    </>
  )
}

export default App
