import React from 'react';
import Mood from './Mood';

function Cell({onMoodCountChange, clearContent}) {

    // This is the state that holds the active state of the Cell and controls Mood tab accordinlgy.
    const [active, setActive] = React.useState(false); // This is used to show and hide the Mood tab.
    const [buttonContent, setButtonContent] = React.useState('');
    const [prevMood, setPrevMood] = React.useState(''); // It is used to reduce the count of the previous mood when a new mood is clicked.

    // This function is called when a mood is clicked. It sets the button content and updates the mood count.
    const handleMoodClick = (content) => {
        setButtonContent(content);
        setActive(!active); // This closes the Mood tab when a mood gets clicked.
        if (prevMood) {
            onMoodCountChange(prevMood, -1); // Reduce the count by 1 of the previous mood
          }
      
          onMoodCountChange(content, 1); // Increase the count by 1 of the selected mood
          setPrevMood(content); // Update the previous mood
    }

    // This useEffect is used to clear the content of the button and reset the active state when the clearContent prop is true.
    React.useEffect(() => {
        if (clearContent) {
          setButtonContent('');
          setActive(false);
          setPrevMood(''); // Reset prevMood state
        }
      }, [clearContent]);

    return (
        <>
            <button
                className='rounded-full border-2 border-black-500 px-4 py-4 hover:border-black'
                onClick={() => setActive(!active)}
            >
                {buttonContent}
            </button>
            {active && <Mood mood={active} setMood={setActive} onMoodClick = {handleMoodClick}/>}

        </>
    );
}

export default Cell;
