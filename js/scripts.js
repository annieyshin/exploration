$(function () {
  function factorial (number) {
    var toMultiply = [];
    if (number === 0) {
      return 1;
    } else {
      for(i=1;i<=number;i++) {
        toMultiply.push(i);
      }
      return toMultiply.reduce(function (x, y) {
        return x * y;
      });
    }
  }

  $("#factorial").submit(function(event) {
    alert(factorial(parseInt($("#toFactorial").val())));
  });

  function isPalindrome(string) {
    string.toLowerCase();
    var toCompare = string.split("");
    toCompare = toCompare.reverse().join("");
    if(toCompare === string) {
      alert("it's a palindrome. yay.")
    } else {
      alert("it's not quite a palindrome. oh no.")
    }
  }

  $("#palindrome").submit(function(event) {
    isPalindrome($("#isPalindrome").val())

  });
});
