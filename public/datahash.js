function generateDataHash(uuid, address) {
    var uuidbytes = hexStringToBytes(uuid)
    var addressbytes = hexStringToBytes(address.substring(2))
    var message = new Uint8Array(uuidbytes.length + addressbytes.length);
    message.set(uuidbytes);
    message.set(addressbytes, uuidbytes.length);

    console.log('Message generated bytes: '+message)

    return keccak256(message);
}

function hexStringToBytes(str) {
  if (!str) {
      return new Uint8Array();
  }

  var a = [];
  for (var i = 0, len = str.length; i < len; i += 2) {
      a.push(parseInt(str.substr(i, 2), 16));
  }

  return new Uint8Array(a);
}

function bytesToHexString(uint8arr) {
    if (!uint8arr) {
      return '';
    }
    
    var hexStr = '';
    for (var i = 0; i < uint8arr.length; i++) {
      var hex = (uint8arr[i] & 0xff).toString(16);
      hex = (hex.length === 1) ? '0' + hex : hex;
      hexStr += hex;
    }
    
    return hexStr.toLowerCase();
  }
