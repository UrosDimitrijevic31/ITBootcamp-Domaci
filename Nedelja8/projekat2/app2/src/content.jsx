import React from 'react'

export const Popup = ({message, reject, accept}) => {
    return (
      <div>
        <div>
          <p>{message}</p>
          <div>
            <button onClick={accept}>Da</button>
            <button onClick={reject}>Ne</button>
          </div>
        </div>
      </div>
    );
}

