function ready(fn) {
    if (
        document.readyState === "complete" ||
        (document.readyState !== "loading" && !document.documentElement.doScroll)
    ) {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

function addEvent(querySelector, eventName, fn){
    var elements = document.querySelectorAll(querySelector);

    elements.forEach(element => {
        element.addEventListener(eventName, (event) => {
            fn(event, element);
        });
    });
}
