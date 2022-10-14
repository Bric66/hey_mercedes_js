const command = process.env.COMMAND

if (command === "weather") {
    require ('./weather.js');
}else if (command === "address") {
    console.log('25 rue Camille Gili 66300 Thuir');
}else if (command === "quoteday") {
    require ('./quoteday.js');
}else {
    console.log("perdu!;)");
}