// (7 kyu) Remove anchor from URL
/* Complete the function/method so that it returns the url with anything after the anchor (#) removed.
Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

// Solution
function removeUrlAnchor(url){
    return url.split('#')[0]
}

// Explanation
// We can split the URL into two array elements, splitting it at the # symbol. Then by taking the first element (index 0) we return everything before the anchor.
