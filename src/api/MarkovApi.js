import axios from "axios";

const BASE_URL = process.env.API_BASE_URL || "http://localhost:5000";

/** functions for making AJAX requests to markov flask API
 *
 */
class MarkovApi {

  /** Get an auto generated horoscope */
  static async getHoroscope(sign){
    let response = await axios.get(
      `${BASE_URL}/horoscopes/daily/${sign}`);
    console.log("response from axios for ", sign, response);
    return response.data.text;
  }
}

export default MarkovApi