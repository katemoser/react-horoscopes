import React, { useState } from "react";

/**
 * Select your sign
 *
 * props:
 *    handleSave
 *    signs like ["aries", "pisces", ...]
 *    initial formData like {sign}
 *
 * state:
 *    formData like {sign}
 *
 * HoroscopeApp -> Horoscope Display
 */
function HoroscopeForm({initialFormData, signs, handleSave}){
  const [formData, setFormData] = useState(initialFormData);

  return(
    <div className="HoroscopeForm">
      This is the horoscope form.
      The choices are {signs}
    </div>
  )
}

export default HoroscopeForm