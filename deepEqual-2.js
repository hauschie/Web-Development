'use strict';
// Don't add or change anything above this comment.

/*
* Don't change the declaration of this function.
*/
function deepEqual(val1, val2) {
    /*
    This function takes two values as parameters and returns true if they fulfill the rules
    of deep equality and false if they do not.
    */
    function arrayEquality(array1, array2) {
        /*
        This function takes two arrays as parameters and returns true if they fulfill the rules
        of deep equality and false if they do not.
        */
        let reducedVal1 = array1.reduce(
            ( previousValue, currentValue ) => previousValue + currentValue,
            0
          );
        let reducedVal2 = array2.reduce(
            ( previousValue, currentValue ) => previousValue + currentValue,
            0
          );

        if (reducedVal1 === reducedVal2) {
            return true;
        } else {
            return false;
        }
    }

    function objectEquality(obj1, obj2) {
        /*
        This function takes two objects as parameters and returns true if they fulfill the rules
        of deep equality and false if they do not.
        */
        let lengthVal1 = Object.keys(obj1).length
        let lengthVal2 = Object.keys(obj2).length
        //tests that the length of the objects are the same
        if (lengthVal1 !== lengthVal2) {
            return false;
        }
        let object1 = Object.keys(obj1)
        for (let item of object1) {
            let prop1 = obj1[item];
            let prop2 = obj2[item];
            //if they are both objects, they are recursively tested using the same function
            if (typeof prop1 === 'object' && typeof prop2 === 'object' && !deepEqual(prop1, prop2)) {
                return false;
            // if they are not objects
            } else if (typeof prop1 !== 'object' && typeof prop2 !== 'object') {
                if (prop1 !== prop2) {
                    return false;
                }
            }
        }
        return true
    }

    // tests if any of the parameters are null
    if (val1 === null || val2 === null) {
        if (val1 === null && val2 === null) {
            return true;
        } else {
            return false;
        }
    
    // ensures that the variable types are the same for both parameters
    } else if (typeof val1 !== typeof val2) {
        return false;  

    // tests if the parameters are objects
    } else if (typeof val1 === 'object' && typeof val2 === 'object') {

        //tests if the objects are arrays. If they both are, the arrayEquality function is used.
        if (Array.isArray(val1) === true && Array.isArray(val2) === true) {
            if (arrayEquality(val1, val2) === true) {
                return true
            } else {
                return false
            }
        
        // If only one of the values is an array object
        } else if (Array.isArray(val1) === true || Array.isArray(val2) === true) {
            return false;
        
        //if the parameters are objects but not arrays. The objectEquality function is used.
        } else {
            if (objectEquality(val1, val2) === true) {
                return true;
            } else {
                return false;
            }
        }
    
    // if the values are not objects and equal
    } else if (val1 === val2) {
        return true;

    //if the values are not objects and not equal
    } else {
        return false;
    }
}

// Don't add or change anything below this comment.
module.exports = deepEqual;