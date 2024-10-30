// index.js
function getRandomName() {
    const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
    return names[Math.floor(Math.random() * names.length)];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate(start, end) {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date;
}

module.exports = {
    getRandomName,
    getRandomNumber,
    getRandomDate
};