import React from "react"
import "./SeasonDisplay.css"
const seasnConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "Burr it is cold",
    iconName: "snwflake"
  }
}
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter"
  } else {
    return lat > 0 ? "winter" : "summer"
  }
}
const SeasonDisplay = props => {
  const season = getSeason(props.latitude, new Date().getMonth())
  const { text, iconName } = seasnConfig[season]
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left icon massive ${iconName}`}></i>
      <h2>{text}</h2>
      <i className={`icon-right icon massive ${iconName}`}></i>
    </div>
  )
}

export default SeasonDisplay
