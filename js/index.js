// Iteration 1: Names and Input
let hacker1 = 'Vanderlei'
    console.log(`The drivers name is ${hacker1}`);
let hacker2 = 'Marcos'
    console.log(`The navigators name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {  
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else (`Wow, you both have equally long names, ${hacker1.length} characters!`);
// Iteration 3: Loops
let tempName = " ";
for(let i = 0; i < hacker1.length; i++) {
    tempName += hacker1[i].toUpperCase() + " ";
}
    console.log(tempName);

let = navigatorsName = ' ';
for(let i=hacker2.length - 1 ; i >= 0; i--) {
    navigatorsName += hacker2[i];
}
console.log(navigatorsName);

if (hacker1 < hacker2){
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else
    console.log("What?! You both have the same name?");

    // Bonus Time

    let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum sollicitudin nibh, dictum ullamcorper ante tempor eu. Ut nec consequat elit, vitae commodo libero. Cras varius viverra nisi id ultricies. Suspendisse sagittis nulla at molestie euismod. Nam auctor velit et risus dapibus, id luctus orci ullamcorper. Quisque eu odio pulvinar, porta ligula eget, malesuada enim. Nam ante dolor, dictum at interdum et, fringilla fermentum ligula. Sed ornare ipsum vitae arcu bibendum, non porta ipsum fringilla. Suspendisse nec nisl sit amet ante tincidunt venenatis. Nullam eu egestas massa. Ut interdum massa augue, at dignissim lacus maximus suscipit. Nulla congue mi vel volutpat posuere. Aliquam erat volutpat. Praesent eget rhoncus risus. Mauris porttitor quis ipsum eget accumsan. Sed justo metus, volutpat et ullamcorper sit amet, consequat et nunc.

    Donec lectus metus, pellentesque sit amet porttitor nec, porta eu lorem. Vestibulum ut metus id mauris lacinia fermentum. Nulla ut libero vitae turpis lobortis rhoncus et ac ex. Donec faucibus, ex ut eleifend suscipit, nunc ex aliquam tortor, ut convallis sapien felis vel purus. Sed et malesuada arcu, et pharetra est. Sed semper ut purus et consectetur. Morbi eu viverra magna.
    
    Praesent suscipit a magna id condimentum. Mauris tincidunt malesuada purus ut aliquet. Sed maximus pharetra ultricies. Aliquam porta felis a lorem laoreet scelerisque. Suspendisse ultricies ligula id sodales fermentum. Fusce pellentesque tristique cursus. Aliquam at lacus quis tortor venenatis laoreet in a est. Integer et cursus est. Integer nec convallis odio. Vivamus finibus augue sed purus vestibulum, nec semper sem finibus. Vestibulum consequat sapien odio, vitae convallis purus luctus sit amet. Suspendisse eget tempus erat, sed molestie velit.`;

    let counterwords = 0;
    for(let i = 0; i < text.length; i++) {
        if (text[i] === " " || text [i] === "\n") {
            counterwords++;
        }
    }  
        console.log (counterwords);