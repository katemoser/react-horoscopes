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

  /** Generates horoscope for chosen sign */
  async function generateHoroscope(formData){
    console.log("generateHoroscope, formData =", formData);
    const generatedHoroscope = await MarkovApi.getHoroscope(formData.sign);
    setHoroscope(generatedHoroscope)
  }

  return(
    <div className="HoroscopeApp">
      <HoroscopeDisplay horoscope={horoscope} />
      <HoroscopeForm handleSave={generateHoroscope}/>
    </div>
  )

}

export default HoroscopeApp