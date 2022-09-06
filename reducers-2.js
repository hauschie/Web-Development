'use strict';
// Don't add or change anything above this comment.


function reducer1(previousValue, currentValue) {
    /*
    - If this function is passed to reduce, any non-numeric values in the array will 
        be skipped and the sum of only the numeric values in the array will be returned.
    - If all the values in the array are non-numeric, then the value 0 will be returned.
    */
    if (typeof previousValue !== 'number' && typeof currentValue !== 'number') {
        return 0;
    } else if (typeof previousValue !== 'number') {
        return currentValue;
    } else if (typeof currentValue !== 'number') {
        return previousValue;
    } else {
        return previousValue + currentValue;
    }
};


function reducer2(previousValue, currentValue) {
    /*
    - If this function is passed to reduce and the array contains any non-numeric values, 
        this function will throw the exception TypeError.
    - Otherwise, the sum of all the values in the array will be returned.
    - To throw the exception TypeError with the message 'My error message'  you can use the 
        statement throw new TypeError('My error message'). 
    */
    if (typeof previousValue !== 'number' || typeof currentValue !== 'number') {
        throw new TypeError('My error message');
    } else {
        return previousValue + currentValue;
    }
};

// Don't add or change anything below this comment.
module.exports = { reducer1, reducer2 };