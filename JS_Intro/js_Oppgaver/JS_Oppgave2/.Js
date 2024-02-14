 function checkPalindrome() {
    var number = document.getElementById("inputNumber").value;
    var reversedNumber = number.split('').reverse().join('');

    if (number === reversedNumber) {
        document.getElementById("result").innerHTML = number + " is a palindrome!";
    } else {
        document.getElementById("result").innerHTML = number + " is not a palindrome!";
    }
}
