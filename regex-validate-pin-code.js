function validatePIN(pin) {
  if (/^\d+$/.test(pin)) {
    if (pin.length == 4 || pin.length == 6) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

console.log(validatePIN("1111"));
