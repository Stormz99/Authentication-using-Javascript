//user database
const userDatabase = {
    "stormz123" : {
        firstName: "ijiola",
        lastName: "usman",
        email: "usmanijiola@gmail.com",
        userVerified: true,
        password: "usman123"
    },
     "benny001" : {
        firstName: "benedicta",
        lastName: "obiukwu",
        email: "benny@gmail.com",
        userVerified: true,
        paswword: "benny123"
    },
     "wale89" : {
        firstName: "adewale",
        lastName: "ayodele",
        email: "wale@gmail.com",
        userVerified: false,
        password: "wale12345"
    },
     "tope69" : {
        firstName: "tope",
        lastName: "olaide",
        email: "tope@gmail.com",
        userVerified: true,
        password: "tope12345"
    }
}



function displayUserDetails() {
    //enter username
    let username= prompt("Enter your username")

    while (validateUsername(username) == false) {
        username= prompt("Please retry entering a correct username")
    }

    if (username == null) {
        return
    }

    //enter password
    let password = prompt("Enter your password")

    while (validatePassword(password) == false) {
        password = prompt("Please retry entering a correct password")
    }

    if (password == null) {
        return
    }

    //confirm password
    let confirmPass = prompt("Kindly reconfirm your password")

    while (confirmPass !== password) {
        confirmPass = prompt("Incorrect confirmation")
    }

    if (confirmPass == null) {
        return
    }

    //confirm if user name exists in the database
    const user = userDatabase[username]
    console.log(user)

    if (user == undefined) {
        alert("User not found. Please sign up")
        return
    }

    alert(`
    User found with the following details
    First Name: ${user.firstName}
    Last Name: ${user.lastName}
    Email Address: ${user.email}
    Account Activated: ${user.userVerified}
    `)


    
}

displayUserDetails()
alert("You are here, everything is fine")
alert("You have come to the end of this program")

function validateUsername(username) {
    if (username == null) {
        return true
    }
    if (username.length > 10) {
        return false 
    }else {
        return true
    }

}


function validatePassword(password) {
    if (password == null) {
        return true
    }
    if (password.length < 6) {
        return false
    }else {
        return true
    }
}


