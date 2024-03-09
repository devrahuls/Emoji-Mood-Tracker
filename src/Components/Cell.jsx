import React from 'react';
import Mood from './Mood';

function Cell({onMoodCountChange}) {

    // This is the state that holds the active state of the Cell and controls Mood tab accordinlgy.
    const [active, setActive] = React.useState(false);
    const [buttonContent, setButtonContent] = React.useState('');

    // This function is called when a mood is clicked. It sets the button content and updates the mood count.
    const handleMoodClick = (content) => {
        setButtonContent(content);
        setActive(!active); // This closes the Mood tab when a mood is clicked.
        onMoodCountChange(content);
    }

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
