function partyTime(input) {
    let guestList = {
        VIP: [],
        regular: []
    };

    let isPartyTime = false;

    for (let guests of input) {
        if (isPartyTime) {
            // Check if the guest arrived and remove them from the guest list
            if (guestList.VIP.includes(guests)) {
                guestList.VIP.splice(guestList.VIP.indexOf(guests), 1);
            } else if (guestList.regular.includes(guests)) {
                guestList.regular.splice(guestList.regular.indexOf(guests), 1);
            }
        } else if (guests === 'PARTY') {
            isPartyTime = true;
        } else {
            // Separate guests into VIP and regular based on the first character
            if (/^\d/.test(guests)) {
                guestList.VIP.push(guests);
            } else {
                guestList.regular.push(guests);
            }
        }
    }

    // Calculate and return guests who didn't attend the party
    const guestsNotAttending = guestList.VIP.concat(guestList.regular);
    console.log(guestsNotAttending.length);
    console.log(guestsNotAttending.join("\n"));
}
partyTime(['7IK9Yo0h', 
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc']);

// partyTime([
//   "m8rfQBvl",
//   "fc1oZCE0",
//   "UgffRkOn",
//   "7ugX7bm0",
//   "9CQBGUeJ",
//   "2FQZT3uC",
//   "dziNz78I",
//   "mdSGyQCJ",
//   "LjcVpmDL",
//   "fPXNHpm1",
//   "HTTbwRmM",
//   "B5yTkMQi",
//   "8N0FThqG",
//   "xys2FYzn",
//   "MDzcM9ZK",
//   "PARTY",
//   "2FQZT3uC",
//   "dziNz78I",
//   "mdSGyQCJ",
//   "LjcVpmDL",
//   "fPXNHpm1",
//   "HTTbwRmM",
//   "B5yTkMQi",
//   "8N0FThqG",
//   "m8rfQBvl",
//   "fc1oZCE0",
//   "UgffRkOn",
//   "7ugX7bm0",
//   "9CQBGUeJ",
// ]);