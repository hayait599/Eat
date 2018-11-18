import binaryToBase64 from 'binaryToBase64';
import utf8 from 'utf8';

/**
 * Creates the Encoding class.
 * 
 * @class Encoding
 */
class Encoding {
  /**
   * used to encode data
   * 
   * @param {JSON} data 
   */
  encodeData(data) {
   // get json data and return string
   const encoded = JSON.stringify(data);
   return encoded;
  }
  /**
   * used to encode data route
   * 
   * @param {string} url 
   */
  encodeKey(url) {
    const bytes = utf8.encode(url);
    const encoded = binaryToBase64(bytes);
    return (encoded);
  }
  /**
   * used to decode data 
   * 
   * @param {string} encodedData 
   */
  decodeData(encodedData) {
    // get string data and return json
    return JSON.parse(encodedData);
  }
}
export default new Encoding();
