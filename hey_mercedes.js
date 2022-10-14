if (process.env.COMMAND === "weather") {
    console.log('40° today');
}else if (process.env.COMMAND === "address") {
    console.log('25 rue Camille Gili 66300 Thuir');
}else if (process.env.COMMAND === "quoteday") {
    console.log("You see in this world there's two kinds of people, my friend. Those with loaded guns, and those who dig. You dig.");
}else {
    console.log("perdu!;)");
}
