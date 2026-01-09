let outStr = '';

["Delicious ", "Plain ", "Tasty ", ""].forEach(prefix => {
    ["Black", "Blue", "Green", "Pink", "Red", "White", "Yellow"].forEach(color => {
        let imgName = '';
        if(prefix === "" || prefix === "Plain ") {
            imgName = "Plain_" + color + "_Aprijuice.png";
        } else {
            imgName = prefix.trim() + "_" + color + "_Aprijuice.png";
        }
        outStr += '\t"' + prefix + color + ' Aprijuice' + '": `<img alt="' + prefix + color + ' Aprijuice' + '" src="/imgs/aprijuices/' + imgName + '"><span class="item-tooltip">' + prefix + color + ' Aprijuice' + '</span>`,\n'
    });
});

console.log(outStr);