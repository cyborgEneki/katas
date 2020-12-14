// Write a

// function that when given a URL as a string, parses out just the domain name and returns it as a string.For example:

//     domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url) {
    let stringStrippedOfPrefix, i, indexOfPeriod, domainNameArray = [];

    stringStrippedOfPrefix = url.replace(/\b(www.|https:\/\/www.|http:\/\/www.|http:\/\/|https:\/\/)/, '')

    for (i = 0; stringStrippedOfPrefix[i] != '.'; i++) {
        domainNameArray.push(stringStrippedOfPrefix[i])
    }

    return domainNameArray.join('')
}