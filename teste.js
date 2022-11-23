 
// Javascript program to find sum
// of multiples of a number
// up to N efficiently
 
// Function for calculating sum
// of multiples of a upto N
function calculate_sum(a, N)
{
     
    // Number of multiples
    m = N / a;
 
    // Sum of first m
    // natural numbers
    sum = m * (m + 1) / 2;
 
    // Sum of multiples
    ans = a * sum;
 
    return ans;
}
 
// Driver code
let a = 7;
let N = 49;
 
console.log("Sum of multiples of "+ a +
               " up to " + N + " = " +
               calculate_sum(a, N));
 
// This code is contributed by mohan1240760
 