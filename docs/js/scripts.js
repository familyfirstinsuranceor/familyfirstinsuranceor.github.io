let zipTest = /(^\d{5}$)|(^\d{5}-\d{4}$)/
let phoneTest = /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/
let emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
function submitAuto() {

    let fName = document.getElementById("first-name-auto").value
    let mName = document.getElementById("middle-name-auto").value
    let lName = document.getElementById("last-name-auto").value
    let mDate = document.getElementById("month-auto").value
    let dDate = document.getElementById("day-auto").value
    let yDate = document.getElementById("year-auto").value
    let odlNumber = document.getElementById("drivers-license-auto").value
    let viNumber = document.getElementById("vehicle-identification-number-auto").value
    let addressOne = document.getElementById("address-one-auto").value
    let addressTwo = document.getElementById("address-two-auto").value
    let city = document.getElementById("city-auto").value
    let state = document.getElementById("state-auto").value
    let zip = document.getElementById("zip-auto").value
    let phone = document.getElementById("phone-number-auto").value
    let email = document.getElementById("email-address-auto").value
    let valid = true

    gtag('event', 'formSubmit_click', {
        'form_type': 'Auto'
    })

    document.getElementById("first-name-auto-err").hidden = true
    document.getElementById("last-name-auto-err").hidden = true
    if (!isValidNames(fName, mName, lName)) {
        document.getElementById("first-name-auto-err").hidden = false
        document.getElementById("last-name-auto-err").hidden = false
        valid = false
    }
    document.getElementById("month-auto-err").hidden = true
    document.getElementById("day-auto-err").hidden = true
    document.getElementById("year-auto-err").hidden = true
    if (!isValidDOB(mDate, dDate, yDate)) {
        document.getElementById("month-auto-err").hidden = false
        document.getElementById("day-auto-err").hidden = false
        document.getElementById("year-auto-err").hidden = false
        valid = false
    }
    document.getElementById("address-one-auto-err").hidden = true
    if (addressOne.trim() == "") {
        document.getElementById("address-one-auto-err").hidden = false
        valid = false
    }
    document.getElementById("city-auto-err").hidden = true
    if (city.trim() == "" || !isAlphaNumeric(city.trim())) {
        document.getElementById("city-auto-err").hidden = false
        valid = false
    }
    document.getElementById("state-auto-err").hidden = true
    if (state.trim() == "") {
        document.getElementById("state-auto-err").hidden = false
        valid = false
    }
    document.getElementById("zip-auto-err").hidden = true
    if (!zipTest.test(zip)) {
        document.getElementById("zip-auto-err").hidden = false
        valid = false
    }
    document.getElementById("email-address-auto-err").hidden = true
    if (!emailTest.test(email)) {
        document.getElementById("email-address-auto-err").hidden = false
        valid = false
    }
    document.getElementById("phone-number-auto-err").hidden = true
    if (!phoneTest.test(phone)) {
        document.getElementById("phone-number-auto-err").hidden = false
        valid = false
    }
    if (!valid) return

    gtag('event', 'formSubmit_submission', {
        'form_type': 'Auto'
    })

    document.getElementById("first-name-auto-hidden").value = fName
    document.getElementById("middle-name-auto-hidden").value = mName
    document.getElementById("last-name-auto-hidden").value = lName
    document.getElementById("month-auto-hidden").value = mDate
    document.getElementById("day-auto-hidden").value = dDate
    document.getElementById("year-auto-hidden").value = yDate
    document.getElementById("drivers-license-auto-hidden").value = odlNumber
    document.getElementById("vehicle-identification-number-auto-hidden").value = viNumber
    document.getElementById("address-one-auto-hidden").value = addressOne
    document.getElementById("address-two-auto-hidden").value = addressTwo
    document.getElementById("city-auto-hidden").value = city
    document.getElementById("state-auto-hidden").value = state
    document.getElementById("zip-auto-hidden").value = zip
    document.getElementById("phone-number-auto-hidden").value = phone
    document.getElementById("email-address-auto-hidden").value = email

    document.getElementById("auto-hidden-form-submit").click()

}
function submitHome() {
    let fName = document.getElementById("first-name-home").value
    let mName = document.getElementById("middle-name-home").value
    let lName = document.getElementById("last-name-home").value
    let mDate = document.getElementById("month-home").value
    let dDate = document.getElementById("day-home").value
    let yDate = document.getElementById("year-home").value
    let odlNumber = document.getElementById("drivers-license-home").value
    let addressOne = document.getElementById("address-one-home").value
    let addressTwo = document.getElementById("address-two-home").value
    let city = document.getElementById("city-home").value
    let state = document.getElementById("state-home").value
    let zip = document.getElementById("zip-home").value
    let phone = document.getElementById("phone-number-home").value
    let email = document.getElementById("email-address-home").value
    let valid = true

    gtag('event', 'formSubmit_click', {
        'form_type': 'Home'
    })

    document.getElementById("first-name-home-err").hidden = true
    document.getElementById("last-name-home-err").hidden = true
    if (!isValidNames(fName, mName, lName)) {
        document.getElementById("first-name-home-err").hidden = false
        document.getElementById("last-name-home-err").hidden = false
        valid = false
    }
    document.getElementById("month-home-err").hidden = true
    document.getElementById("day-home-err").hidden = true
    document.getElementById("year-home-err").hidden = true
    if (!isValidDOB(mDate, dDate, yDate)) {
        document.getElementById("month-home-err").hidden = false
        document.getElementById("day-home-err").hidden = false
        document.getElementById("year-home-err").hidden = false
        valid = false
    }
    document.getElementById("address-one-home-err").hidden = true
    if (addressOne.trim() == "") {
        document.getElementById("address-one-home-err").hidden = false
        valid = false
    }
    document.getElementById("city-home-err").hidden = true
    if (city.trim() == "" || !isAlphaNumeric(city.trim())) {
        document.getElementById("city-home-err").hidden = false
        valid = false
    }
    document.getElementById("state-home-err").hidden = true
    if (state.trim() == "") {
        document.getElementById("state-home-err").hidden = false
        valid = false
    }
    document.getElementById("zip-home-err").hidden = true
    if (!zipTest.test(zip)) {
        document.getElementById("zip-home-err").hidden = false
        valid = false
    }
    document.getElementById("email-address-home-err").hidden = true
    if (!emailTest.test(email)) {
        document.getElementById("email-address-home-err").hidden = false
        valid = false
    }
    document.getElementById("phone-number-home-err").hidden = true
    if (!phoneTest.test(phone)) {
        document.getElementById("phone-number-home-err").hidden = false
        valid = false
    }
    if (!valid) return

    gtag('event', 'formSubmit_submission', {
        'form_type': 'Home'
    })

    document.getElementById("first-name-home-hidden").value = fName
    document.getElementById("middle-name-home-hidden").value = mName
    document.getElementById("last-name-home-hidden").value = lName
    document.getElementById("month-home-hidden").value = mDate
    document.getElementById("day-home-hidden").value = dDate
    document.getElementById("year-home-hidden").value = yDate
    document.getElementById("drivers-license-home-hidden").value = odlNumber
    document.getElementById("address-one-home-hidden").value = addressOne
    document.getElementById("address-two-home-hidden").value = addressTwo
    document.getElementById("city-home-hidden").value = city
    document.getElementById("state-home-hidden").value = state
    document.getElementById("zip-home-hidden").value = zip
    document.getElementById("phone-number-home-hidden").value = phone
    document.getElementById("email-address-home-hidden").value = email

    document.getElementById("home-hidden-form-submit").click()

}
function submitCommercial() {
    let bName = document.getElementById("business-name-commercial").value
    let fName = document.getElementById("first-name-commercial").value
    let mName = document.getElementById("middle-name-commercial").value
    let lName = document.getElementById("last-name-commercial").value
    let mDate = document.getElementById("month-commercial").value
    let dDate = document.getElementById("day-commercial").value
    let yDate = document.getElementById("year-commercial").value
    let odlNumber = document.getElementById("drivers-license-commercial").value
    let addressOne = document.getElementById("address-one-commercial").value
    let addressTwo = document.getElementById("address-two-commercial").value
    let city = document.getElementById("city-commercial").value
    let state = document.getElementById("state-commercial").value
    let zip = document.getElementById("zip-commercial").value
    let phone = document.getElementById("phone-number-commercial").value
    let email = document.getElementById("email-address-commercial").value
    let fedID = document.getElementById("federal-id-number-commercial").value
    let employeeCount = document.getElementById("employee-count-commercial").value
    let valid = true

    gtag('event', 'formSubmit_click', {
        'form_type': 'Commercial'
    })

    document.getElementById("business-name-commercial-err").hidden = true
    if (bName == "") {
        document.getElementById("business-name-commercial-err").hidden = false
        valid = false
    }
    document.getElementById("first-name-commercial-err").hidden = true
    document.getElementById("last-name-commercial-err").hidden = true
    if (!isValidNames(fName, mName, lName)) {
        document.getElementById("first-name-commercial-err").hidden = false
        document.getElementById("last-name-commercial-err").hidden = false
        valid = false
    }
    document.getElementById("month-commercial-err").hidden = true
    document.getElementById("day-commercial-err").hidden = true
    document.getElementById("year-commercial-err").hidden = true
    if (!isValidDOB(mDate, dDate, yDate)) {
        document.getElementById("month-commercial-err").hidden = false
        document.getElementById("day-commercial-err").hidden = false
        document.getElementById("year-commercial-err").hidden = false
        valid = false
    }
    document.getElementById("address-one-commercial-err").hidden = true
    if (addressOne.trim() == "") {
        document.getElementById("address-one-commercial-err").hidden = false
        valid = false
    }
    document.getElementById("city-commercial-err").hidden = true
    if (city.trim() == "" || !isAlphaNumeric(city.trim())) {
        document.getElementById("city-commercial-err").hidden = false
        valid = false
    }
    document.getElementById("state-commercial-err").hidden = true
    if (state.trim() == "") {
        document.getElementById("state-commercial-err").hidden = false
        valid = false
    }
    document.getElementById("zip-commercial-err").hidden = true
    if (!zipTest.test(zip)) {
        document.getElementById("zip-commercial-err").hidden = false
        valid = false
    }
    document.getElementById("federal-id-number-commercial-err").hidden = true
    if (isNaN(parseInt(fedID.trim())) || fedID.trim().length != 9) {
        document.getElementById("federal-id-number-commercial-err").hidden = false
        valid = false
    }
    document.getElementById("employee-count-commercial-err").hidden = true
    if (isNaN(parseInt(fedID.trim()))) {
        document.getElementById("employee-count-commercial-err").hidden = false
        valid = false
    }
    document.getElementById("email-address-commercial-err").hidden = true
    if (!emailTest.test(email)) {
        document.getElementById("email-address-commercial-err").hidden = false
        valid = false
    }
    document.getElementById("phone-number-commercial-err").hidden = true
    if (!phoneTest.test(phone)) {
        document.getElementById("phone-number-commercial-err").hidden = false
        valid = false
    }
    if (!valid) return

    gtag('event', 'formSubmit_submission', {
        'form_type': 'Commercial'
    })

    document.getElementById("business-name-commercial-hidden").value = bName
    document.getElementById("first-name-commercial-hidden").value = fName
    document.getElementById("middle-name-commercial-hidden").value = mName
    document.getElementById("last-name-commercial-hidden").value = lName
    document.getElementById("month-commercial-hidden").value = mDate
    document.getElementById("day-commercial-hidden").value = dDate
    document.getElementById("year-commercial-hidden").value = yDate
    document.getElementById("drivers-license-commercial-hidden").value = odlNumber
    document.getElementById("address-one-commercial-hidden").value = addressOne
    document.getElementById("address-two-commercial-hidden").value = addressTwo
    document.getElementById("city-commercial-hidden").value = city
    document.getElementById("state-commercial-hidden").value = state
    document.getElementById("zip-commercial-hidden").value = zip
    document.getElementById("annual-reciepts-commercial-hidden").value = document.getElementById("annual-reciepts-commercial").value
    document.getElementById("federal-id-number-commercial-hidden").value = fedID
    document.getElementById("employee-count-commercial-hidden").value = employeeCount
    document.getElementById("phone-number-commercial-hidden").value = phone
    document.getElementById("email-address-commercial-hidden").value = email

    document.getElementById("commercial-hidden-form-submit").click()

}
function submitLife() {
    let fName = document.getElementById("first-name-life").value
    let mName = document.getElementById("middle-name-life").value
    let lName = document.getElementById("last-name-life").value
    let mDate = document.getElementById("month-life").value
    let dDate = document.getElementById("day-life").value
    let yDate = document.getElementById("year-life").value
    let odlNumber = document.getElementById("drivers-license-life").value
    let addressOne = document.getElementById("address-one-life").value
    let addressTwo = document.getElementById("address-two-life").value
    let city = document.getElementById("city-life").value
    let state = document.getElementById("state-life").value
    let zip = document.getElementById("zip-life").value
    let phone = document.getElementById("phone-number-life").value
    let email = document.getElementById("email-address-life").value
    let valid = true

    gtag('event', 'formSubmit_click', {
        'form_type': 'Life'
    })

    document.getElementById("first-name-life-err").hidden = true
    document.getElementById("last-name-life-err").hidden = true
    if (!isValidNames(fName, mName, lName)) {
        document.getElementById("first-name-life-err").hidden = false
        document.getElementById("last-name-life-err").hidden = false
        valid = false
    }
    document.getElementById("month-life-err").hidden = true
    document.getElementById("day-life-err").hidden = true
    document.getElementById("year-life-err").hidden = true
    if (!isValidDOB(mDate, dDate, yDate)) {
        document.getElementById("month-life-err").hidden = false
        document.getElementById("day-life-err").hidden = false
        document.getElementById("year-life-err").hidden = false
        valid = false
    }
    document.getElementById("address-one-life-err").hidden = true
    if (addressOne.trim() == "") {
        document.getElementById("address-one-life-err").hidden = false
        valid = false
    }
    document.getElementById("city-life-err").hidden = true
    if (city.trim() == "" || !isAlphaNumeric(city.trim())) {
        document.getElementById("city-life-err").hidden = false
        valid = false
    }
    document.getElementById("state-life-err").hidden = true
    if (state.trim() == "") {
        document.getElementById("state-life-err").hidden = false
        valid = false
    }
    document.getElementById("zip-life-err").hidden = true
    if (!zipTest.test(zip)) {
        document.getElementById("zip-life-err").hidden = false
        valid = false
    }
    document.getElementById("email-address-life-err").hidden = true
    if (!emailTest.test(email)) {
        document.getElementById("email-address-life-err").hidden = false
        valid = false
    }
    document.getElementById("phone-number-life-err").hidden = true
    if (!phoneTest.test(phone)) {
        document.getElementById("phone-number-life-err").hidden = false
        valid = false
    }
    if (!valid) return

    gtag('event', 'formSubmit_submission', {
        'form_type': 'Life'
    })

    document.getElementById("first-name-life-hidden").value = fName
    document.getElementById("middle-name-life-hidden").value = mName
    document.getElementById("last-name-life-hidden").value = lName
    document.getElementById("month-life-hidden").value = mDate
    document.getElementById("day-life-hidden").value = dDate
    document.getElementById("year-life-hidden").value = yDate
    document.getElementById("drivers-license-life-hidden").value = odlNumber
    document.getElementById("address-one-life-hidden").value = addressOne
    document.getElementById("address-two-life-hidden").value = addressTwo
    document.getElementById("city-life-hidden").value = city
    document.getElementById("state-life-hidden").value = state
    document.getElementById("zip-life-hidden").value = zip
    document.getElementById("phone-number-life-hidden").value = phone
    document.getElementById("email-address-life-hidden").value = email
    document.getElementById("note-life-hidden").value = document.getElementById("note-life").value

    document.getElementById("life-hidden-form-submit").click()

}

function isValidDOB(month, day, year) {
    let numMonth = parseInt(month)
    let numDay = parseInt(day)
    let numYear = parseInt(year)
    if (isNaN(numMonth) || isNaN(numDay) || isNaN(numYear)) return false
    if (numMonth > 12 || numMonth < 0) return false
    if (numDay > 31 || numDay < 1) return false
    if (numYear > 2010 || numYear < 1922) return false
    return true
}

function isAlphaNumeric(str) {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
    }
    return true;
}

function isValidNames(first, middle, last) {
    if (isAlphaNumeric(first.trim()) && first.trim() != "" && isAlphaNumeric(last.trim()) && last.trim() != "") {
        if (middle.trim() == "" || isAlphaNumeric(middle.trim())) return true
    }
    return false
}

function isValidODL(odlNumber) {
    if (isAlphaNumeric(odlNumber)) {
        if (odlNumber.length == 7) return true
    }
    return false
}
function isValidVIN(viNumber) {
    if (isAlphaNumeric(viNumber)) {
        if (viNumber.length == 17) return true
    }
    return false
}

function address() {
    gtag('event', "link_click", {
        'page_from': 'Home',
        'page_to': "Google Maps",
    })

    window.location.href = "https://www.google.com/maps/place/1419+Parkside+Ct,+Newberg,+OR+97132/@45.3107777,-122.9799679,17z/data=!3m1!4b1!4m5!3m4!1s0x54954029b95f1e9b:0xd2b7578059ce72a9!8m2!3d45.3107777!4d-122.9799679";
}

function aboutUs() {
    gtag('event', "link_click", {
        'page_from': 'Home',
        'page_to': "About Us",
    })

    window.location.href = "https://www.familyfirstinsurancejarbgllc.com/index.html";
}
function tabClick(tab) {
    gtag('event', 'tab_click', {
        'tab': tab
    })
}