function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin) && (pin.length === 4 || pin.length === 6)
  }
validatePIN("1")
validatePIN("12")
validatePIN("123")
validatePIN("12345")
validatePIN("1234567")
validatePIN("-1234")
validatePIN("1.234")
validatePIN("-1.234")
validatePIN("00000000")
validatePIN("1234")
validatePIN("0000")
validatePIN("1111")
validatePIN("123456")
validatePIN("098765")
validatePIN("000000")
validatePIN("123456")
validatePIN("090909")