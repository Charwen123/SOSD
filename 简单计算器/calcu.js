function cal(num) {
    document.getElementById("result").value += num;

}

function equal() {
    var result = document.getElementById("result").value;
    var res = eval(result);
    document.getElementById("result").value = +res;
}

function clear() {
    // location.reload();
    document.getElementById("result").value = '0';
    document.getElementById("result").focus;
}

function back() {
    var result = document.getElementById("result");
    result.value = result.value.substring(0, result.value.length - 1);
}