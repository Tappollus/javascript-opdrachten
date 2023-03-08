
function isLeap (year) {
    var year = prompt("Which year would you like to check?");

    if (year % 4 === 0) {
        if (year % 100 !== 0) {
            var interpretation = "Leap year.";
        } else {
            if (year % 400 === 0) {
                var interpretation = "Leap year.";
            } else {
                var interpretation = "Not leap year.";
            }
        }
    } else {
        if (year % 100 !== 0) {
            if (year % 400 === 0) {
                var interpretation = "Leap year.";
            } else {
                var interpretation = "Not leap year.";
            }
        } else {
            var interpretation = "Not leap year.";
        }
    }
    return interpretation;
}