import React from "react"

// Since the design doesnt provide svgs for the background, I created them myself
const Background = () => {
  return (
    <>
      <svg
        viewBox="0 0 500 280"
        className="absolute top-0 transform scale-y-[-1] scale-x-[-1] z-10"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="120%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#3260C9", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#702CC8", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          d="M 0,100 Q 50,80 200,170 Q 290,220 400,170 Q 500,120 510,170 L 500,280 L 0,280"
          fill="url(#waveGradient)"
        />
      </svg>
      <svg
        viewBox="0 0 500 280"
        className="absolute top-4 transform scale-y-[-1] scale-x-[-1] z-0"
      >
        <path
          d="M 0,100 Q 50,80 200,170 Q 290,220 400,170 Q 500,120 510,170 L 500,280 L 0,280"
          fill="#DCD6F4"
        />
      </svg>
    </>
  )
}

export default Background
