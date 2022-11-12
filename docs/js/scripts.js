let zipTest = /(^\d{5}$)|(^\d{5}-\d{4}$)/
let phoneTest = /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/
let emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
function homepage() {
    window.location.href = "index.html";
}
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
    let code, i, len;

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

    window.location.href = "about.html";
}

function spanishPage() {
    gtag('event', "link_click", {
        'page_from': 'Home',
        'page_to': "Spanish Home",
    })

    window.location.href = "index-es.html";
}

function tabClick(tab) {
    gtag('event', 'tab_click', {
        'tab': tab
    })
}

function toSpanish() {

    let containerArray = [
        // Quote Banner Text
        document.getElementById("banner-text"),

        // Tabs
        document.getElementById("auto-tab-text"),
        document.getElementById("home-tab-text"),
        document.getElementById("commercial-tab-text"),
        document.getElementById("life-tab-text"),

        // Auto
        document.getElementById("auto-section-label"),
        document.getElementById("vehicle-info"),
        document.getElementById("auto-name-label"),
        document.getElementById("auto-dob-label"),
        document.getElementById("auto-address-label"),
        document.getElementById("auto-get-your-quote"),

        // Home
        document.getElementById("home-section-label"),
        document.getElementById("home-name-label"),
        document.getElementById("home-dob-label"),
        document.getElementById("home-address-label"),
        document.getElementById("home-get-your-quote"),

        // Commercial
        document.getElementById("commercial-section-label"),
        document.getElementById("commercial-business-label"),
        document.getElementById("commercial-name-label"),
        document.getElementById("commercial-dob-label"),
        document.getElementById("commercial-address-label"),
        document.getElementById("commercial-get-your-quote"),

        // Life
        document.getElementById("life-section-label"),
        document.getElementById("life-name-label"),
        document.getElementById("life-dob-label"),
        document.getElementById("life-address-label"),
        document.getElementById("life-get-your-quote"),
        document.getElementById("life-history-label"),

        // Below Forms
        document.getElementById("providers-text-line"),
        document.getElementById("javiers-face-text"),
        document.getElementById("service-promise"),

        // Testimonials
        document.getElementById("testimonial-text-nic"),
        document.getElementById("testimonial-text-brandon"),
        document.getElementById("testimonial-text-jamie"),

        // Call Today
        document.getElementById("want-to-talk"),
        document.getElementById("call-today"),

        // Wall of Text
        document.getElementById("info-text"),

        // Footer
        document.getElementById("copyright"),
        document.getElementById("footer-info"),
        document.getElementById("about-us-footer"),
    ]
    let spanishTextArray = [
        // Tabs and Above
        "<p><span>Solicitar</span><span>presupuesto</span></p>", // Request a Quote
        "Coche", // Car
        "Hogar", // Home
        "Negocio", // Business
        "Vida", // Life

        // Auto
        "Seguro de auto", // Car Insurance
        "Información del conductor", // Driver Information
        "Nombre", // Name
        "Fecha de nacimiento", // Date of Birth
        "Dirección", // Address
        "¡Obtenga su cotización!", // Get Your Quote

        // Home
        "Seguro de Hogar", // Home Insurance
        "Nombre", // Name
        "Fecha de nacimiento", // Date of Birth
        "Dirección", // Address
        "¡Obtenga su cotización!", // Get Your Quote

        // Commercial
        "Seguro de negocio", // Business Insurance
        "Información de negocios", // Business Information
        "Nombre", // Name
        "Fecha de nacimiento", // Date of Birth
        "Dirección", // Address
        "¡Obtenga su cotización!", // Get Your Quote

        // Life
        "Seguro de vida", // Life Insurance
        "Nombre", // Name
        "Fecha de nacimiento", // Date of Birth
        "Dirección", // Address
        "¡Obtenga su cotización!", // Get Your Quote
        "Historial médico", // Medical History

        // Below Forms
        "Seguro de calidad a través de estos excelentes proveedores", // Providers Line
        'Garantía de Javier:<br> <i>"¡Nunca dejo de trabajar para conseguirte las mejores ofertas!"</i>', // Gurantee
        "Servicio de 5 estrellas garantizado", // 5 Star Service

        // Testimonials
        '"¡Ahorré un montón de dinero con el seguro que Javier me encontró!"',
        '"Javier nunca deja de trabajar duro para proporcionar el mejor servicio en la ciudad"',
        '"Siempre puedo comunicarme con Javier si tengo preguntas sobre mi póliza. El servicio personalizado significa mucho"',

        // Contact us
        "¿Querer hablar?",
        "¡Llama hoy!",

        // Info Text
        'Trabajando arduamente en el corazón de Newberg, <b> Family First Insurance </b> ha brindado una experiencia excepcional al cliente al comprar y mantener un seguro durante muchos años. Una y otra vez, Javier puede brindar el toque personal que falta en la vida de la mayoría de los compradores. <br><br><b> Family First Insurance </b> nunca dejará de trabajar para usted. </br> <img id="botimg" src="img/family-first-insurance.png" />', // wall of text
        "Derechos de autor © 2022. Todos los derechos reservados.", // Copyright
        'Family First Insurance • <a href="javascript:address();">1419 Parkside Ct Newberg, OR 97132</a> • Número de teléfono: 503-313-1942 <br> Fax: 503-487-1164 • Correo electrónico:javierdelaobailon@gmail.com<br>Javier De La O Bailon', // Footer Contact Info
        'Sobre nosotros', // About Us

    ]
    let placeholderContainerArray = [
        // Auto
        document.getElementById("drivers-license-auto"),
        document.getElementById("first-name-auto"),
        document.getElementById("middle-name-auto"),
        document.getElementById("last-name-auto"),
        document.getElementById("address-one-auto"),
        document.getElementById("address-two-auto"),
        document.getElementById("city-auto"),
        document.getElementById("state-auto"),
        document.getElementById("zip-auto"),
        document.getElementById("email-address-auto"),
        document.getElementById("phone-number-auto"),

        // Home
        document.getElementById("drivers-license-home"),
        document.getElementById("first-name-home"),
        document.getElementById("middle-name-home"),
        document.getElementById("last-name-home"),
        document.getElementById("address-one-home"),
        document.getElementById("address-two-home"),
        document.getElementById("city-home"),
        document.getElementById("state-home"),
        document.getElementById("zip-home"),
        document.getElementById("email-address-home"),
        document.getElementById("phone-number-home"),

        // Commercial
        document.getElementById("drivers-license-commercial"),
        document.getElementById("first-name-commercial"),
        document.getElementById("middle-name-commercial"),
        document.getElementById("last-name-commercial"),
        document.getElementById("address-one-commercial"),
        document.getElementById("address-two-commercial"),
        document.getElementById("city-commercial"),
        document.getElementById("state-commercial"),
        document.getElementById("zip-commercial"),
        document.getElementById("email-address-commercial"),
        document.getElementById("phone-number-commercial"),
        document.getElementById("business-name-commercial"),
        document.getElementById("federal-id-number-commercial"),
        document.getElementById("annual-reciepts-commercial"),
        document.getElementById("employee-count-commercial"),

        // Life
        document.getElementById("drivers-license-life"),
        document.getElementById("first-name-life"),
        document.getElementById("middle-name-life"),
        document.getElementById("last-name-life"),
        document.getElementById("address-one-life"),
        document.getElementById("address-two-life"),
        document.getElementById("city-life"),
        document.getElementById("state-life"),
        document.getElementById("zip-life"),
        document.getElementById("email-address-life"),
        document.getElementById("phone-number-life"),

    ]
    let spanishPlaceholderText = [
        // Auto
        "Número de licencia", // licence #
        "Primero", // First
        "Medio", // Middle
        "Último", // Last
        "Dirección Línea Uno", // Address line 1
        "Línea de dirección 2", // Address line 2
        "Ciudad", // City
        "Estado", // State
        "Código postal", // Zip Code
        "Correo electrónico", // Email
        "Número de teléfono", // Phone Number

        // Home
        "Número de licencia", // licence #
        "Primero", // First
        "Medio", // Middle
        "Último", // Last
        "Dirección Línea Uno", // Address line 1
        "Línea de dirección 2", // Address line 2
        "Ciudad", // City
        "Estado", // State
        "Código postal", // Zip Code
        "Correo electrónico", // Email
        "Número de teléfono", // Phone Number

        // Commercial
        "Número de licencia", // licence #
        "Primero", // First
        "Medio", // Middle
        "Último", // Last
        "Dirección Línea Uno", // Address line 1
        "Línea de dirección 2", // Address line 2
        "Ciudad", // City
        "Estado", // State
        "Código postal", // Zip Code
        "Correo electrónico", // Email
        "Número de teléfono", // Phone Number
        "Nombre del Negocio", // Business Name
        "Número de identificación federal", // Federal ID Number
        "Recibos Anuales", // Annual Reciepts
        "Número de empleados", // Number of Employees

        // Life
        "Número de licencia", // licence #
        "Primero", // First
        "Medio", // Middle
        "Último", // Last
        "Dirección Línea Uno", // Address line 1
        "Línea de dirección 2", // Address line 2
        "Ciudad", // City
        "Estado", // State
        "Código postal", // Zip Code
        "Correo electrónico", // Email
        "Número de teléfono", // Phone Number
    ]
    let errorContainerArray = [
        // Auto
        document.getElementById("first-name-auto-err"),
        document.getElementById("last-name-auto-err"),
        document.getElementById("month-auto-err"),
        document.getElementById("day-auto-err"),
        document.getElementById("year-auto-err"),
        document.getElementById("address-one-auto-err"),
        document.getElementById("city-auto-err"),
        document.getElementById("state-auto-err"),
        document.getElementById("zip-auto-err"),
        document.getElementById("email-address-auto-err"),
        document.getElementById("phone-number-auto-err"),

        // Home
        document.getElementById("first-name-home-err"),
        document.getElementById("last-name-home-err"),
        document.getElementById("month-home-err"),
        document.getElementById("day-home-err"),
        document.getElementById("year-home-err"),
        document.getElementById("address-one-home-err"),
        document.getElementById("city-home-err"),
        document.getElementById("state-home-err"),
        document.getElementById("zip-home-err"),
        document.getElementById("email-address-home-err"),
        document.getElementById("phone-number-home-err"),

        // Commercial
        document.getElementById("first-name-home-err"),
        document.getElementById("last-name-home-err"),
        document.getElementById("month-home-err"),
        document.getElementById("day-home-err"),
        document.getElementById("year-home-err"),
        document.getElementById("address-one-home-err"),
        document.getElementById("city-home-err"),
        document.getElementById("state-home-err"),
        document.getElementById("zip-home-err"),
        document.getElementById("email-address-home-err"),
        document.getElementById("phone-number-home-err"),
        document.getElementById("business-name-commercial-err"),
        document.getElementById("federal-id-number-commercial-err"),
        document.getElementById("annual-reciepts-commercial-err"),
        document.getElementById("employee-count-commercial-err"),

        // Life
        document.getElementById("first-name-life-err"),
        document.getElementById("last-name-life-err"),
        document.getElementById("month-life-err"),
        document.getElementById("day-life-err"),
        document.getElementById("year-life-err"),
        document.getElementById("address-one-life-err"),
        document.getElementById("city-life-err"),
        document.getElementById("state-life-err"),
        document.getElementById("zip-life-err"),
        document.getElementById("email-address-life-err"),
        document.getElementById("phone-number-life-err"),
    ]
    let spanishErrorText = "Campo requerido" // Field Required

    for (let i = 0; i < containerArray.length; i++) {
        containerArray[i].innerHTML = spanishTextArray[i];
    }
    for (let i = 0; i < placeholderContainerArray.length; i++) {
        placeholderContainerArray[i].placeholder = spanishPlaceholderText[i]
    }
    for (let i = 0; i < errorContainerArray.length; i++) {
        errorContainerArray[i].innerHTML = spanishErrorText
    }

    document.getElementById("flag-row").innerHTML = '<div class="row"><div class="col-12"><img id="flag-icon" src="img/es-flag.png" /></div><div class="col-12">es</div></div>'
}

let holdingTextArray = []
let holdingPlaceholderArray = []

function toEnglish() {
    let errorContainerArray = [
        // Auto
        document.getElementById("first-name-auto-err"),
        document.getElementById("last-name-auto-err"),
        document.getElementById("month-auto-err"),
        document.getElementById("day-auto-err"),
        document.getElementById("year-auto-err"),
        document.getElementById("address-one-auto-err"),
        document.getElementById("city-auto-err"),
        document.getElementById("state-auto-err"),
        document.getElementById("zip-auto-err"),
        document.getElementById("email-address-auto-err"),
        document.getElementById("phone-number-auto-err"),

        // Home
        document.getElementById("first-name-home-err"),
        document.getElementById("last-name-home-err"),
        document.getElementById("month-home-err"),
        document.getElementById("day-home-err"),
        document.getElementById("year-home-err"),
        document.getElementById("address-one-home-err"),
        document.getElementById("city-home-err"),
        document.getElementById("state-home-err"),
        document.getElementById("zip-home-err"),
        document.getElementById("email-address-home-err"),
        document.getElementById("phone-number-home-err"),

        // Commercial
        document.getElementById("first-name-home-err"),
        document.getElementById("last-name-home-err"),
        document.getElementById("month-home-err"),
        document.getElementById("day-home-err"),
        document.getElementById("year-home-err"),
        document.getElementById("address-one-home-err"),
        document.getElementById("city-home-err"),
        document.getElementById("state-home-err"),
        document.getElementById("zip-home-err"),
        document.getElementById("email-address-home-err"),
        document.getElementById("phone-number-home-err"),
        document.getElementById("business-name-commercial-err"),
        document.getElementById("federal-id-number-commercial-err"),
        document.getElementById("annual-reciepts-commercial-err"),
        document.getElementById("employee-count-commercial-err"),

        // Life
        document.getElementById("first-name-life-err"),
        document.getElementById("last-name-life-err"),
        document.getElementById("month-life-err"),
        document.getElementById("day-life-err"),
        document.getElementById("year-life-err"),
        document.getElementById("address-one-life-err"),
        document.getElementById("city-life-err"),
        document.getElementById("state-life-err"),
        document.getElementById("zip-life-err"),
        document.getElementById("email-address-life-err"),
        document.getElementById("phone-number-life-err"),
    ]
    let placeholderContainerArray = [
        // Auto
        document.getElementById("drivers-license-auto"),
        document.getElementById("first-name-auto"),
        document.getElementById("middle-name-auto"),
        document.getElementById("last-name-auto"),
        document.getElementById("address-one-auto"),
        document.getElementById("address-two-auto"),
        document.getElementById("city-auto"),
        document.getElementById("state-auto"),
        document.getElementById("zip-auto"),
        document.getElementById("email-address-auto"),
        document.getElementById("phone-number-auto"),

        // Home
        document.getElementById("drivers-license-home"),
        document.getElementById("first-name-home"),
        document.getElementById("middle-name-home"),
        document.getElementById("last-name-home"),
        document.getElementById("address-one-home"),
        document.getElementById("address-two-home"),
        document.getElementById("city-home"),
        document.getElementById("state-home"),
        document.getElementById("zip-home"),
        document.getElementById("email-address-home"),
        document.getElementById("phone-number-home"),

        // Commercial
        document.getElementById("drivers-license-commercial"),
        document.getElementById("first-name-commercial"),
        document.getElementById("middle-name-commercial"),
        document.getElementById("last-name-commercial"),
        document.getElementById("address-one-commercial"),
        document.getElementById("address-two-commercial"),
        document.getElementById("city-commercial"),
        document.getElementById("state-commercial"),
        document.getElementById("zip-commercial"),
        document.getElementById("email-address-commercial"),
        document.getElementById("phone-number-commercial"),
        document.getElementById("business-name-commercial"),
        document.getElementById("federal-id-number-commercial"),
        document.getElementById("annual-reciepts-commercial"),
        document.getElementById("employee-count-commercial"),

        // Life
        document.getElementById("drivers-license-life"),
        document.getElementById("first-name-life"),
        document.getElementById("middle-name-life"),
        document.getElementById("last-name-life"),
        document.getElementById("address-one-life"),
        document.getElementById("address-two-life"),
        document.getElementById("city-life"),
        document.getElementById("state-life"),
        document.getElementById("zip-life"),
        document.getElementById("email-address-life"),
        document.getElementById("phone-number-life"),

    ]
    let containerArray = [
        // Quote Banner Text
        document.getElementById("banner-text"),

        // Tabs
        document.getElementById("auto-tab-text"),
        document.getElementById("home-tab-text"),
        document.getElementById("commercial-tab-text"),
        document.getElementById("life-tab-text"),

        // Auto
        document.getElementById("auto-section-label"),
        document.getElementById("vehicle-info"),
        document.getElementById("auto-name-label"),
        document.getElementById("auto-dob-label"),
        document.getElementById("auto-address-label"),
        document.getElementById("auto-get-your-quote"),

        // Home
        document.getElementById("home-section-label"),
        document.getElementById("home-name-label"),
        document.getElementById("home-dob-label"),
        document.getElementById("home-address-label"),
        document.getElementById("home-get-your-quote"),

        // Commercial
        document.getElementById("commercial-section-label"),
        document.getElementById("commercial-business-label"),
        document.getElementById("commercial-name-label"),
        document.getElementById("commercial-dob-label"),
        document.getElementById("commercial-address-label"),
        document.getElementById("commercial-get-your-quote"),

        // Life
        document.getElementById("life-section-label"),
        document.getElementById("life-name-label"),
        document.getElementById("life-dob-label"),
        document.getElementById("life-address-label"),
        document.getElementById("life-get-your-quote"),
        document.getElementById("life-history-label"),

        // Below Forms
        document.getElementById("providers-text-line"),
        document.getElementById("javiers-face-text"),
        document.getElementById("service-promise"),

        // Testimonials
        document.getElementById("testimonial-text-nic"),
        document.getElementById("testimonial-text-brandon"),
        document.getElementById("testimonial-text-jamie"),

        // Call Today
        document.getElementById("want-to-talk"),
        document.getElementById("call-today"),

        // Wall of Text
        document.getElementById("info-text"),

        // Footer
        document.getElementById("copyright"),
        document.getElementById("footer-info"),
        document.getElementById("about-us-footer"),
    ]

    for (let i = 0; i < containerArray.length; i++) {
        containerArray[i].innerHTML = holdingTextArray[i];
    }
    for (let i = 0; i < placeholderContainerArray.length; i++) {
        placeholderContainerArray[i].placeholder = holdingPlaceholderArray[i]
    }
    for (let i = 0; i < errorContainerArray.length; i++) {
        errorContainerArray[i].innerHTML = "Field Required"
    }

    document.getElementById("flag-row").innerHTML = '<div class="row"><div class="col-12"><img id="flag-icon" src="img/en-flag.png" /></div><div class="col-12">en</div></div>'

}

function init() {

    let placeholderContainerArray = [
        // Auto
        document.getElementById("drivers-license-auto"),
        document.getElementById("first-name-auto"),
        document.getElementById("middle-name-auto"),
        document.getElementById("last-name-auto"),
        document.getElementById("address-one-auto"),
        document.getElementById("address-two-auto"),
        document.getElementById("city-auto"),
        document.getElementById("state-auto"),
        document.getElementById("zip-auto"),
        document.getElementById("email-address-auto"),
        document.getElementById("phone-number-auto"),

        // Home
        document.getElementById("drivers-license-home"),
        document.getElementById("first-name-home"),
        document.getElementById("middle-name-home"),
        document.getElementById("last-name-home"),
        document.getElementById("address-one-home"),
        document.getElementById("address-two-home"),
        document.getElementById("city-home"),
        document.getElementById("state-home"),
        document.getElementById("zip-home"),
        document.getElementById("email-address-home"),
        document.getElementById("phone-number-home"),

        // Commercial
        document.getElementById("drivers-license-commercial"),
        document.getElementById("first-name-commercial"),
        document.getElementById("middle-name-commercial"),
        document.getElementById("last-name-commercial"),
        document.getElementById("address-one-commercial"),
        document.getElementById("address-two-commercial"),
        document.getElementById("city-commercial"),
        document.getElementById("state-commercial"),
        document.getElementById("zip-commercial"),
        document.getElementById("email-address-commercial"),
        document.getElementById("phone-number-commercial"),
        document.getElementById("business-name-commercial"),
        document.getElementById("federal-id-number-commercial"),
        document.getElementById("annual-reciepts-commercial"),
        document.getElementById("employee-count-commercial"),

        // Life
        document.getElementById("drivers-license-life"),
        document.getElementById("first-name-life"),
        document.getElementById("middle-name-life"),
        document.getElementById("last-name-life"),
        document.getElementById("address-one-life"),
        document.getElementById("address-two-life"),
        document.getElementById("city-life"),
        document.getElementById("state-life"),
        document.getElementById("zip-life"),
        document.getElementById("email-address-life"),
        document.getElementById("phone-number-life"),

    ]
    let containerArray = [
        // Quote Banner Text
        document.getElementById("banner-text"),

        // Tabs
        document.getElementById("auto-tab-text"),
        document.getElementById("home-tab-text"),
        document.getElementById("commercial-tab-text"),
        document.getElementById("life-tab-text"),

        // Auto
        document.getElementById("auto-section-label"),
        document.getElementById("vehicle-info"),
        document.getElementById("auto-name-label"),
        document.getElementById("auto-dob-label"),
        document.getElementById("auto-address-label"),
        document.getElementById("auto-get-your-quote"),

        // Home
        document.getElementById("home-section-label"),
        document.getElementById("home-name-label"),
        document.getElementById("home-dob-label"),
        document.getElementById("home-address-label"),
        document.getElementById("home-get-your-quote"),

        // Commercial
        document.getElementById("commercial-section-label"),
        document.getElementById("commercial-business-label"),
        document.getElementById("commercial-name-label"),
        document.getElementById("commercial-dob-label"),
        document.getElementById("commercial-address-label"),
        document.getElementById("commercial-get-your-quote"),

        // Life
        document.getElementById("life-section-label"),
        document.getElementById("life-name-label"),
        document.getElementById("life-dob-label"),
        document.getElementById("life-address-label"),
        document.getElementById("life-get-your-quote"),
        document.getElementById("life-history-label"),

        // Below Forms
        document.getElementById("providers-text-line"),
        document.getElementById("javiers-face-text"),
        document.getElementById("service-promise"),

        // Testimonials
        document.getElementById("testimonial-text-nic"),
        document.getElementById("testimonial-text-brandon"),
        document.getElementById("testimonial-text-jamie"),

        // Call Today
        document.getElementById("want-to-talk"),
        document.getElementById("call-today"),

        // Wall of Text
        document.getElementById("info-text"),

        // Footer
        document.getElementById("copyright"),
        document.getElementById("footer-info"),
        document.getElementById("about-us-footer"),
    ]

    for (let i = 0; i < containerArray.length; i++) {
        holdingTextArray[i] = containerArray[i].innerHTML;
    }
    for (let i = 0; i < placeholderContainerArray.length; i++) {
        holdingPlaceholderArray[i] = placeholderContainerArray[i].placeholder
    }
}

function getLang() {
    let lang = null
    if (navigator.languages != undefined) {
        lang = navigator.languages[0];
    }
    else { lang = navigator.language; }

    let spanishOptions = ["es", "es-AR", "es-GT", "es-CR", "es-PA", "es-DO", "es-MX", "es-VE", "es-CO",
        "es-PE", "es-EC", "es-CL", "es-UY", "es-PY", "es-BO", "es-SV", "es-HN", "es-NI",
        "es-PR"]

    for (let i = 0; i <= spanishOptions.length; i++) {
        if (lang == spanishOptions[i]) {
            toSpanish()
        }
    }
}

language = 0
function swapLanguage() {
    if (language == 0) {
        toSpanish()
        language = 1
    } else {
        toEnglish()
        language = 0
    }
}


let englishTextHtml = []
let spanishTextHtml = []
let elements = []

function aboutInit() {
    elements = [
        document.getElementById("top-company-name"),    //top logo area

        document.getElementById("banner-text"), //main banner text

        document.getElementById("javiers-face-text"), //Javiers gurantee
        document.getElementById("about-us-text"),   //main about us text

        document.getElementById("providers-text-line"), //our providers

        document.getElementById("google-maps-text"),

        document.getElementById("info-text"),   //bottom 

        document.getElementById("footer-text"), //footer
        document.getElementById("copyright"),
        document.getElementById("about-us-link")
    ]

    englishTextHtml = [
        //top logo
        `<img id="business-logo-navbar"
        src="img/family-first-insurance.png" />
    Family First Insurance`,
        //banner text
        `<p><span><br>About Us<br><br></nr></span></p>`,
        //Javiers gurantee
        `Javier's Gurantee:<br>
    <i>"I never stop working to get you the best deals!"</i>`,
        //about us text
        `Family First Insurance is all about Family First. We try to get you the best possible
    insurance we can.

    At Family First Insurance we give you the best customer service because we know how
    important you are. Contact us directly at 503-313-1942. If you want to talk over email
    send
    it to our email at javierdelaobailon@gmail.com
    </br>`,
        //insurance providers text
        `Quality Insurance Through
    These
    Great Providers`,
        //google maps text
        `Come find us<br>in Newberg`,
        //bottom info text
        `Working hard in the heart of Newberg, <b>Family First Insurance</b> has
    been
    providing an exceptional customer experience purchasing and maintaining insurance for
    many
    years now. Time and time again, Javier is able to provide the personal touch that is
    missing
    from the lives of most buyers.<br><br><b>Family First Insurance</b> will never stop
    working
    for
    you.`,
        //footer
        `Family First Insurance • <a href="javascript:address();">1419
    Parkside Ct Newberg, OR 97132
</a> • Phone: 503-313-1942 <br> Fax: 503-487-1164 • Email:
javierdelaobailon@gmail.com<br>Javier De La O Bailon`,
        //copy right
        `Copyright © 2022. All Rights Reserved.`,
        //about us text in footer
        `About Us`
    ]

    spanishTextHtml = [
        //top logo
        `<img id="business-logo-navbar"
        src="img/family-first-insurance.png" />
        Family First Insurance`,
        //banner text
        `<p><span><br>About Us<br><br></nr></span></p>`,
        //Javiers gurantee
        `Garantía de Javier:<br> <i>'¡Nunca dejo de trabajar para conseguirte las mejores ofertas!'</i>`,
        //about us text
        `Family First Insurance tiene que ver con Family First. Intentamos conseguirle el mejor seguro posible.

        En Family First Insurance te brindamos el mejor servicio al cliente porque sabemos cómo importante eres. Contáctenos directamente al 503-313-1942. Si quieres hablar por correo electrónico enviar a nuestro correo electrónico en javierdelaobailon@gmail.com</br>`,
        //insurance providers text
        `Seguro de calidad a través de Estas Grandes proveedores`,
        //google maps text
        `Ven a buscarnos<br>en Newberg`,
        //bottom info text
        `Trabajando arduamente en el corazón de Newberg, <b> Family First Insurance </b> ha brindado una experiencia excepcional al cliente al comprar y mantener un seguro durante muchos años. Una y otra vez, Javier puede brindar el toque personal que falta en la vida de la mayoría de los compradores. <br><br><b> Family First Insurance </b> nunca dejará de trabajar para usted. </br> <img id="botimg" src="img/family-first-insurance.png" />`,
        //footer
        `Family First Insurance • <a href="javascript:address();">1419 Parkside Ct Newberg, OR 97132 </a> • Teléfono: 503-313-1942 <br> Fax: 503-487-1164 • Correo electrónico: javierdelaobailon@gmail.com<br>Javier De La O Bailon`,
        //copy right
        `Copyright © 2022. Todos los derechos reservados.`,
        //about us text in footer
        `Sobre nosotros`

    ]
}

function aboutEnglish() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = englishTextHtml[i]
    }
}

function aboutSpanish() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = spanishTextHtml[i]
    }
}

function swapAboutLanguage() {
    if (language == 0) {
        aboutSpanish()
        language = 1
    } else {
        aboutEnglish()
        language = 0
    }
}