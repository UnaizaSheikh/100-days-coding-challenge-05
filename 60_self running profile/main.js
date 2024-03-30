//making a profile that response the user name and age
var userProfile = (function () {
    var name = "Haider";
    var age = 17;
    return {
        displayInfo: function () {
            console.log("Name : ".concat(name, ", Age : ").concat(17));
        }
    };
})();
//asking about the user
userProfile.displayInfo();
