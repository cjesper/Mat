/* Functions for frontend logic */


/* Get the date... */
var getDate = function () {
    const monthArray = ["January", "February", "March", "April", "May", "June", "July",
                        "August", "September", "October", "November", "December"];
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth();
    return "" + monthArray[month] + " " + day;
} 

export default getDate;
