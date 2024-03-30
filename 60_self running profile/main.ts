//making a profile that response the user name and age
let userProfile = (function() {
    let name = "Haider";
    let age = 17;
    return {
        displayInfo : function() {
            console.log(`Name : ${name}, Age : ${17}`);
        }
    };

})();
//asking about the user
userProfile.displayInfo();