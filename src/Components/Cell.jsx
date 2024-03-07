import React from 'react';
import Mood from './Mood';

function Cell() {

    const [active, setActive] = React.useState(false);
    const [buttonContent, setButtonContent] = React.useState('');

    const handleMoodClick = (content) => {
        setButtonContent(content);
        setActive(!active);
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
