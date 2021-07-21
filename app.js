function addNumber(num1, num2, prefix, showResult) {
    if (showResult === void 0) { showResult = true; }
    if (showResult)
        console.log(prefix + " \"" + num1 + "\" and \"" + num2 + "\" and Result is -> " + (prefix + "->") + " " + (+num1 + num2));
    return num1 + num2;
}
var result = addNumber(2, 5, "Summing");
console.log(result);
var person = {
    name: "Bhupen",
    hobbies: ["songs", "playing"],
    role: [2, "author"]
};
person.role.push(5);
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
var admin = "admin", readOnly = "Read Only", restricted = "Restricted user";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READONLY"] = 1] = "READONLY";
    Role[Role["RESTRICTED"] = 2] = "RESTRICTED";
})(Role || (Role = {}));
var data = {
    name: "Bhupen",
    hobbies: ["songs", "playing"],
    role: Role.ADMIN
};
if (data.role === Role.ADMIN)
    console.log("this is admin");
function combine(num1, num2, resultConv) {
    console.log("Combine function started");
    if (resultConv === "as-num") {
        console.log("adding numbers");
    }
    else if (resultConv === "as-string") {
        console.log("adding Strings");
    }
    else {
        console.log("No Decision");
    }
    return +num1 + +num2;
}
var combineRslt = combine("2", "5", "as-string");
console.log(combineRslt);
