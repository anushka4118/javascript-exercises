const removeFromArray = function(array, ...args) {
    let newArray = [];
    for (var i=0; i < array.length; i++) {
        var candidate = array[i];

        var hasFailedTest = false

        for (var j=0; j < args.length; j++) {
            var filterElement = args[j];

            if (candidate === filterElement) {
                hasFailedTest = true;

                break;
            }
        }

        if (!hasFailedTest) {
            newArray.push(candidate);
        }
    }

    return newArray;
}

module.exports = removeFromArray
