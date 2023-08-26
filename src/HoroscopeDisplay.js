
/**
 * Displays today's horoscope
 *
 * props:
 *    horoscope
 *
 * state:
 *    None
 *
 * HoroscopeApp -> Horoscope Display
 */
function HoroscopeDisplay({horoscope}){

  return (
    <div className="HoroscopeDisplay">
      {horoscope ? horoscope : "Please select your sign"}
    </div>
  )
}

export default HoroscopeDisplay