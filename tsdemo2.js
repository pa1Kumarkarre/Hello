var bird = (function () {
    function bird() {
    }
    bird.display = function (x, y) {
        console.log(y + " has " + x + " wings");
    };
    return bird;
})();
bird.display(2, "pigeon");
