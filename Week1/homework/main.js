let decimalPoint, enter, entered, operatorSign, rootNpower_Sign, flo, firstI, first, second, secondI, answer, theanswer, result;
let opsCheck, dotCounter;
let removeFirstZero;

function dot(b) {
    if (decimalPoint == "") {
        enter = entered = b;
        first+= enter;
        entered+= enter;
        decimalPoint = ".";
        dotCounter = 0;
        return first;
        } else {
        return first;
    }
}

function c(c) {
    document.getElementById("display1").innerHTML = decimalPoint = operatorSign = rootNpower_Sign = entered = math = first = firstI = second = secondI = answer = theanswer = flo = M = "";
    return "";
}

c();

function maths(a) {
    math = a;
    try {
        if (operatorSign == "+") {
            firstI = first - second;
            mathematics();
            first = second + "+" + result;
        } else if (operatorSign == "-") {
            firstI = second - first;
            mathematics();
            first = second + "-" + "(" + result + ")";
        } else if (operatorSign == "*") {
            firstI = first / second;
            mathematics();
            first = second + "*" + result;
        } else if (operatorSign == "/") {
            firstI = second / first;
            mathematics();
            first = second + "/" + result;
        } else {
            firstI = first;
            mathematics();
            first = result;
        }
        return first;
    } catch (first ) {
        first = second + operatorSign;
        return first;
    }
}

function digit(b) {
    opsCheck = 0;
    dotCounter++;
    if (first == Infinity || first == NaN) {
        first = 0;
    }
    peSign = "pes";
    entered = b;
    if (rootNpower_Sign != "") {
        first = (first === "0" && entered !== ".") ? entered: first + entered;
        return secondI + firstI + rootNpower_Sign + first;
    } else {
        first = (first === "0" && entered !== ".") ? entered: first + entered;
        theanswer = eval(first) + "";
        if (theanswer.length > 14) {
            theanswer = Math.abs((theanswer*1).toPrecision(14));
        }
          document.getElementById("display1").innerHTML = first;
        return theanswer;
    }
}

function operators(b) {
    peSign = "";
    if (opsCheck == 0) {
    opsCheck = 1;
    document.getElementById("display1").innerHTML = first;
    try {
        if (rootNpower_Sign == "^") {
            if (operatorSign == "+") {
                answer = result + second;
            } else if (operatorSign == "-") {
                answer = second - result;
            } else if (operatorSign == "*") {
                answer = result * second;
            } else if (operatorSign == "/") {
                answer = second / result;
            } else {
                answer = result;
            }
        } else if (rootNpower_Sign == "√") {
            if (operatorSign == "+") {
                answer = second + result;
            } else if (operatorSign == "-") {
                answer = second - result;
            } else if (operatorSign == "*") {
                answer = result * second;
            } else if (operatorSign == "/") {
                answer = second / result;
            } else {
                answer = result;
            }
        } else if (a == "%") {
            answer = second % first;
        } else {
            operatorSign = b;
            first += operatorSign;
            decimalPoint = "";
        }
        rootNpower_Sign = "";
        operatorSign = b;
        firstI = "";
        second = answer;
        first = answer + operatorSign;
        decimalPoint = "";
        
document.getElementById("display1").innerHTML = first;
    return eval(second);
    } catch(x) {
        if (first != "<span class='red'>Press ON to start</span>") {
            operatorSign = b;
            second = eval(first);
            first += operatorSign;
            decimalPoint = "";
        } else {
            first = "<span class='red'>Press ON to start</span>" ;
        }
        document.getElementById("display1").innerHTML = first;
        return (second == undefined ) ? 0 : eval(second);
        }
    } else {
        operatorSign = b;
        first += "";
        first = first.substr(0, first.length - 1);
        first = first + operatorSign;
        document.getElementById("display1").innerHTML = first;
        return (second == undefined ) ? 0 : eval(second);
    }
}

function equal() {
    document.getElementById("display1").innerHTML = first;
    try {
        if (rootNpower_Sign == "^") {
            if (operatorSign == "+") {
                first = result + second;
            } else if (operatorSign == "-") {
                first = second - result;
            } else if (operatorSign == "*") {
                answer = result * second;
                first = answer;
            } else if (operatorSign == "/") {
                first = second / result;
            } else {
                first = result;
            }
        } else if (rootNpower_Sign == "√") {
            if (operatorSign == "+") {
                first = result + second;
            } else if (operatorSign == "-") {
                first = second - result;
            } else if (operatorSign == "*") {
                first = result * second;
            } else if (operatorSign == "/") {
                first = second / result;
            } else {
                first = result;
            }
        } else if (operatorSign == "%") {
            answer = second % first;
        } else {
            if (first == "") {
                first = first ;
            } else {
                try{
                    first = eval(first) + "";
                    if (first.length > 14)  {
                        first = Math.abs((first*1).toPrecision(14));
                    }
                } catch (first) {
                    first = "<small><small>Incorrect input. Click C to clear</small></small>";
                    return first;
                    first = "";
                }
            }
        }
        rootNpower_Sign = operatorSign = answer = firstI = second = "";
        flo = first;
        flo = Math.floor(flo);
        decimalPoint = (flo == first) ? "": ".";
        return first;
    } catch(operatorSign) {
        operatorSign = "";
        first = eval(first) + "";
        if (first.length > 14) {
            first = Math.abs((first*1).toPrecision(14));
        }
        flo = first;
        flo = Math.floor(flo);
        decimalPoint = (flo == first) ? "": ".";
        return first;
    }
}