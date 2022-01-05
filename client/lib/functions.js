const MAX_SPEED = 100 //223 MPH
const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

/**
 * 
 * Scales a cars speed (m/s) into a value between 0 and 1
 * @param {Int} carSpeed Speed in m/s
 * @param {} method LINEAR|x^0.2|x^0.3|x^0.5
 * @returns value between 0 and 1
 */
module.exports.calculateFanSpeed = (carSpeed, method) => {
    var normalisedSpeed = map(carSpeed || 0, 0, MAX_SPEED, 0.00, 1);
    switch (method) {
        case "LINEAR":
            return normalisedSpeed;
        case "x^0.3":
        case "x^.3":
            return Math.pow(normalisedSpeed, 0.3);
        case "x^0.4":
        case "x^.4":
            return Math.pow(normalisedSpeed, 0.4);
        case "x^0.5":
        case "x^.5":
            return Math.pow(normalisedSpeed, 0.5);
        case "x^0.6":
        case "x^.6":
            return Math.pow(normalisedSpeed, 0.6);
        case "x^0.7":
        case "x^.7":
            return Math.pow(normalisedSpeed, 0.7);
        case "x^0.8":
        case "x^.8":
            return Math.pow(normalisedSpeed, 0.8);
        default:
            return normalisedSpeed;
    }
}