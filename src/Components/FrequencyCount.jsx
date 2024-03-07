import React from 'react'

const FrequencyCount = ({emojiCount}) => {
  return (
    <div>
      {
        Object.entries(emojiCount).map(([emoji, count]) => (
          <div key={emoji} className="flex justify-between mt-2">
            <span>{emoji}: {count}</span>
          </div>
        ))
      }
    </div>
  )
}

export default FrequencyCount
