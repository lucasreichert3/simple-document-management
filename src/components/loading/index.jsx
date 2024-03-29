import React from 'react'
import './style.scss'

function Loading({ visible, children }) {
  return (
    <>
      {visible && !children && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      {children && (
        <div className="loading-container">
          {visible && (
            <div className="loader-container-with-chdilren">
              <div className="loader"></div>
            </div>
          )}
          <div className={`${!visible ? 'loader-visible-content' : 'loader-hidden-content'}`}>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default Loading
