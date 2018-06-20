var person = (function () {
    function person() {
    }
    person.display = function (x, y) {
        console.log(y + " age is " + x);
    };
    return person;
})();
person.display(24, "pavan");
