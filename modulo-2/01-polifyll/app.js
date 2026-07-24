Array.prototype.includes = undefined;
if (!Array.prototype.includes) {
    Array.prototype.includes = function (elemento) {
        for (const item of this) {
            if (elemento === item) {
                return true
            }
        }
        return false
    }
}

console.log([1, 2, 3].includes(2));  // esperás true
console.log([1, 2, 3].includes(9));  // esperás false