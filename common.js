let counter = 0

function inc() {
    counter++
}

function get() {
    return counter;
}

module.exports = { inc, get }