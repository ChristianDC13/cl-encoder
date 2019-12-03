
  encodeString = function(originalText, key){

    const chars = originalText.split('');
    const keys = key.split('');

    let output = [];
    let keyIndex = 0;

    for (let i = 0; i < chars.length; i++) {
      if (keyIndex >= keys.length) {
        keyIndex = 0;
      }
      output += (String.fromCharCode((chars[i].charCodeAt(0) + keys[keyIndex].charCodeAt(0))));
      keyIndex++;
    }

    return output;
  }
  
  decodeString = function(encodedText, key){

    const chars = encodedText.split('');
    const keys = key.split('');

    let output = [];
    let keyIndex = 0;

    for (let i = 0; i < chars.length; i++) {
      if (keyIndex >= keys.length) {
        keyIndex = 0;
      }
      output += (String.fromCharCode((chars[i].charCodeAt(0) - keys[keyIndex].charCodeAt(0))));
      keyIndex++;
    }

    return output;
  }

  export { encodeString, decodeString };