/**
 * Utility functions for common tasks and functionalities.
 *
 * This file contains a collection of reusable utility functions to assist with various
 * tasks and operations in the application.
 *
 * @module utils
 * @dateCreated January 15, 2024
 */




/**
 * Retrieve a DOM element using its identifier (ID or class).
 * 
 * @param {string} identifier - The ID or class of the DOM element to retrieve.
 * @returns {HTMLElement|null} - The DOM element with the specified identifier, or null if not found.
 */
function getQuery(identifier) {
    return document.querySelector(identifier);
}



/**
 * Checks the validity of an HTML element and throws an error if the element is falsy.
 *
 * @param {HTMLElement} element - The HTML element to validate.
 * @param {string} errorMsg - The error message to be thrown if the element is not valid.
 * @returns {boolean} Returns true if the element is valid (truthy), otherwise returns false.
 *
 * @example
 * // Check if 'myElement' is a valid element or returns a false value.
 * const isValid = isElementValid(myElement, "Invalid element: 'myElement' is not found.");
 *
 * if (isValid) {
 *   // Proceed with further operations using 'myElement'.
 *   console.log("Element is valid:", myElement);
 * } else {
 *   console.error("Error occurred during validation.");
 * }
 */
function isElementValid(element, errorMsg) {
    if (!element) {
        console.log(errorMsg);
        return false
    } 
    return true;
}



export {isElementValid, getQuery}