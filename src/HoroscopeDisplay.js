
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
      This is the horoscope display.
      Your Horoscope is {horoscope}
    </div>
  )
}

export default HoroscopeDisplay