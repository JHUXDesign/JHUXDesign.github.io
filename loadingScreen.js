document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        setTimeout(function () {
            document.getElementById("loader").style.display = "none";
        }, 1500);
    }
};
