var tictaccontroller = function($scope) {

    $scope.globals = {};

    $scope.board = [
        [ { value: '-', id:0 }, { value: '-', id:1 }, { value: '-', id:2 } ],
        [ { value: '-', id:3 }, { value: '-', id:4 }, { value: '-', id:5 } ],
        [ { value: '-', id:6 }, { value: '-', id:7 }, { value: '-', id:8 } ]
    ];

    $scope.boardSc = [ $scope.board[0][0], $scope.board[0][1], $scope.board[0][2],
                       $scope.board[1][0], $scope.board[1][1], $scope.board[1][2],
                       $scope.board[2][0], $scope.board[2][1], $scope.board[2][2],];

    $scope.reset = function() {
        $scope.currentPlayer = 'X';
        $scope.winner = false;
        $scope.cat = false;
    };

    $scope.startGame = function(){
        var aiPlayer = new AI();
        console.log(aiPlayer);
        $scope.globals.game = new Game(aiPlayer);
        aiPlayer.plays($scope.globals.game);
        $scope.globals.game.start();
        $scope.reset();
    }

    $scope.isTaken = function(cell) {
        return cell.value !== '-';
    };


    $scope.moveAI = function(cell) {
        $scope.currentPlayer = $scope.globals.game.currentState.turn === 'X' ? 'O' : 'X';
        var indx = cell.id;
        cell.value = $scope.currentPlayer;
    }

    $scope.move = function(cell) {

        if ( $scope.globals.game.status === "running" ) {
            $scope.currentPlayer = $scope.globals.game.currentState.turn === 'X' ? 'O' : 'X';
            var indx = cell.id;
            var next = new State($scope.globals.game.currentState);
            next.board[indx] = "X";
            cell.value = $scope.currentPlayer;
            next.advanceTurn();
            $scope.globals.game.advanceTo(next);
        }
    };

    $scope.startGame();

};
