// (5 kyu) Extract the domain name from a URL
/* Instructions
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/

// Solution
function domainName(url) {
    
    let domain = ''

    /* for "http/s + www" */
    if (url.includes("http") && url.includes("www")) {
        url = url.split('/')
        url = url[2].split('.')
        domain += url[1]
    }

    /* for "http/s" only */
    else if (url.includes("http")) {
        url = url.split('/')
        url = url[2].split('.')
        domain += url[0]
    }

    /* for "www" */
    else if (url.includes('www')) {
        url = url.split('.')
        domain += url[1]
    }

    /* for urls that have neither https nor www */
    else {
        url = url.split('.')
        domain += url[0]
    }

    return domain
}

// Better Solution
function domainName(url) {
    url = url.replace("https://", "")
    url = url.replace("http://", "")
    url = url.replace("www.", "")
    return url.split('.')[0]
}

// Explanation
// Turn all domain precursors into empty string
// Then, split the url by '.', which will separate the domain from the TLD (.com, .net, etc.)
// Return the first index of that split, which will be the domain (e.g. Google, Icann, etc.)
