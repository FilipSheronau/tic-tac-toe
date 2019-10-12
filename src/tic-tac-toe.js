class TicTacToe {
    constructor() {        
        this.state = new State();
        this.carrent = this.state.carrent;
        this.field = this.state.field;
        this.winner = null;
        this.end = false;        
    }

    getCurrentPlayerSymbol() {        
        return this.carrent;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] == null) {
            let r = 0,
                c = 0,
                d1 = 0,
                d2 = 0;
            this.field[rowIndex][columnIndex] = this.carrent;            
            for(let row = 0;row < this.field.length;row++) {
                for(let col = 0;col < this.field.length;col++) {
                    if (this.field[row][col] == this.carrent) {
                        r++;
                    }
                    if (this.field[col][row] == this.carrent) {
                        c++;
                    }
                    if (this.field[col][col] == this.carrent) {
                        d1++
                    }
                    if (this.field[(this.field.length-1)-col][col] == this.carrent) {
                        d2++
                    }
                }
                if (r == 3 || c == 3 || d1 == 3 || d2 == 3) {
                    this.winner = this.carrent;                   
                    break;
                }
                r = 0;
                c = 0;
                d1 = 0;
                d2 = 0;
            }
            if (this.carrent == 'x') {
                this.carrent = 'o';
            }
            else {            
                this.carrent = 'x';
            }
        }
        else {
            return false;
        }        
    }

    isFinished() {
        return this.winner != null||this.isDraw()?true:false;
    }

    getWinner() {        
        return this.winner;        
    }

    noMoreTurns() {
        let flag = 0;
        for(let row = 0;row < this.field.length;row++) {
            for(let col = 0;col < this.field.length;col++) {
                if (this.field[row][col] == null) {
                    flag = 1;
                }
            }
        }        
        return flag != 1?true:false;        
    }

    isDraw() {
        return this.noMoreTurns() && this.winner == null?true:false;        
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

class State {
    constructor(){
        this.field = [
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ];
        this.carrent = 'x';
    }
}

module.exports = TicTacToe;
