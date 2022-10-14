const command = process.env.COMMAND

if (command === "weather") {
    require ('./weather.js');
}else if (command === "address") {
    require ('./address.js');
}else if (command === "quoteday") {
    require ('./quoteday.js');
}else {
    console.log("perdu!;)");
}