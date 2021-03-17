import 'babel-polyfill'
import { isValidUrl } from "../client/js/urlChecker"


describe("Testing the urlCehcker", () => {

    test("Testing the isValidUrl() function  to be defined", () => {
        // Define the input for the function, if any, in the form of variables/array
        expect(isValidUrl).toBeDefined();
    })

    test("Testing the isValidUrl() function  https should be true", () => {
        // Define the input for the function, if any, in the form of variables/array
        var url = 'https://review.udacity.com/'
        expect(isValidUrl(url)).toBeTruthy();
    })

    test("Testing the isValidUrl() function ftp should be true", () => {
        // Define the input for the function, if any, in the form of variables/array
        var url = 'ftp://review.udacity.com/'
        expect(isValidUrl(url)).toBeTruthy()
    }),

    test("Testing the isValidUrl() function should be false", () => {
        // Define the input for the function, if any, in the form of variables/array
        var url = 'ht://review.udacity.com/'
        expect(isValidUrl(url)).toBeFalsy();
    }),

    test("Testing the isValidUrl() function should be false", () => {
        // Define the input for the function, if any, in the form of variables/array
        var url = 'hi.s.s'
        expect(isValidUrl(url)).toBeFalsy();
    })

});