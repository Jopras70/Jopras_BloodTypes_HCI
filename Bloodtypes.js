function canGiveBlood(donor, receive) {

    True = "This donor accepted !"
    False = "This donor declined !"

    if (donor == "A-") {
        if (receive == "A+" || receive == "A-" || receive == "AB+" || receive == "AB-") {
            console.log(True);
        } else {
            console.log(False);
        }
    } else if (donor == "A+") {
        if (receive == "A+" || receive == "AB+") {
            console.log(True);
        } else {
            console.log(False);
        }
    } else if (donor == "B-") {
        if (receive == "B+" || receive == "B-" || receive == "AB+" || receive == "AB-") {
            console.log(True);
        } else {
            console.log(False);
        }
    } else if (donor == "B+") {
        if (receive == "B+" || receive == "AB+") {
            console.log(True);
        } else {
            console.log(False);
        }
    } else if (donor == "O-") {
        if (receive == "A+" || receive == "A-" || receive == "B+" || receive == "B-" || receive == "O+" || receive == "O-" || receive == "AB+" || receive == "AB-") {
            console.log(True);
        } else {
            console.log(False);
        }
    } else if (donor == "O+") {
        if (receive == "A+" || receive == "B+" || receive == "O+" || receive == "AB+") {
            console.log(True);
        } else {
            console.log(False);
        }
    } else if (donor == "AB-") {
        if (receive == "AB+" || receive == "AB-") {
            console.log(True);
        } else {
            console.log(False);
        }
    } else if (donor == "AB+") {
        if (receive == "AB+") {
            console.log(True);
        } else {
            console.log(False);
        }
    } else if (donor == donor.toLowerCase() || receive == receive.toLowerCase()) {
        console.log("Please re-enter use capital letter !");
    } else {
        console.log("Your answer is invalid, check again your answer.")
    }
};

canGiveBlood("O+", "A+")
canGiveBlood("A-", "B-")
canGiveBlood("A-", "AB+")