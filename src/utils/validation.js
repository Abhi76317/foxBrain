var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

function isName(name) {
    // console.log("name",name)
    const len = name.length;
    if (len >= 3 && len <= 8) {
        return true;
    }
    else {
        return false;
    }
}

function isEmail(email) {
    // console.log("email",regexEmail.test(email))
    
    if (regexEmail.test(email)) {
        return true
    } else {
       return false
    
    }
}

function isAddress (address) {
    const len = address.length;
    if (len >= 10 && len <= 15) {
        return true;
    }
    else {
        return false;
    }
}

function isPhone (phone_number) {
    const len = phone_number.length;
    if (len >= 8 && len <= 10) {
        return true;
    }
    else {
        return false;
    }
}
function isPassword (password) {
    const len = password.length;
    if (len >= 8) {
        return true;
    }
    else {
        return false;
    }
}

export {isName, isEmail, isAddress, isPassword, isPhone} ;
