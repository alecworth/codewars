var greet = function(name) {
    let newName = name[0].toUpperCase() + name.toLowerCase().slice(1)
    return `Hello ${newName}!`
};