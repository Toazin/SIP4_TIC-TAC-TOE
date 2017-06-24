/*
 * ui object encloses all UI related methods and attributes
 */
var ui = {};


ui.switchViewTo = function(turn) {

};

/*
 * places X or O in the specifed place in the board
 * @param i [Number] : row number (0-indexed)
 * @param j [Number] : column number (0-indexed)
 * @param symbol [String]: X or O
 */
ui.insertAt = function(indx, symbol) {
    var scope = angular.element(document.getElementById('controller')).scope()//.controller.testingPrint();
    scope.moveAI(scope.boardSc[indx]);
}
