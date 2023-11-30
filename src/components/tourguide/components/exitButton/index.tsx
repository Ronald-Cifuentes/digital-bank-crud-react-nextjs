import React from 'react'
import './index.css'
import { Button } from '@cencosud-ds/bigbang'
interface ExitButtonProps {
  onFinish: () => void
}
const ExitButton: React.FC<ExitButtonProps> = props => {
  const { onFinish } = props
  return (
    <div className="content-exitbutton">
      <Button
        className="button-exitbutton"
        darkMode={true}
        onClick={() => {
          if (onFinish) {
            onFinish()
          }
        }}>
        <div className="svg-exitbutton">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.4141 12.5002L17.7071 8.20725C18.0981 7.81625 18.0981 7.18425 17.7071 6.79325C17.3161 6.40225 16.6841 6.40225 16.2931 6.79325L12.0001 11.0862L7.70713 6.79325C7.31613 6.40225 6.68413 6.40225 6.29313 6.79325C5.90213 7.18425 5.90213 7.81625 6.29313 8.20725L10.5861 12.5002L6.29313 16.7933C5.90213 17.1843 5.90213 17.8162 6.29313 18.2072C6.48813 18.4022 6.74413 18.5002 7.00013 18.5002C7.25613 18.5002 7.51213 18.4022 7.70713 18.2072L12.0001 13.9142L16.2931 18.2072C16.4881 18.4022 16.7441 18.5002 17.0001 18.5002C17.2561 18.5002 17.5121 18.4022 17.7071 18.2072C18.0981 17.8162 18.0981 17.1843 17.7071 16.7933L13.4141 12.5002Z"
              fill="#166DC2"
            />
          </svg>
        </div>
      </Button>
    </div>
  )
}

export default ExitButton
