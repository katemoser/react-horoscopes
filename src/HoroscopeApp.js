import React, {useState} from "react";

import "./HoroscopeApp.css"
import MarkovApi from "./api/MarkovApi";
import HoroscopeDisplay from "./HoroscopeDisplay";
import HoroscopeForm from "./HoroscopeForm";

/**
 * Props: None
 *
 * State: horoscope (string)
 *
 * App -> HoroscopeApp -> HoroscopeDisplay
 *                     -> HoroscopeForm
 */
function HoroscopeApp(){
  const [horoscope, setHoroscope] = useState(null);

  return(
    <div className="HoroscopeApp">
      <HoroscopeDisplay horoscope={horoscope} />
      <HoroscopeForm signs={["aries","taurus"]}/>
    </div>
  )

}

export default HoroscopeApp