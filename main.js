const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

let playing = true;

class Field {
    constructor(field){
        this._field = field;
    }

    get field(){
        return this._field;
    }

    print() {
        for(let i = 0; i < this._field.length; i++) {
            let fieldRow = this._field[i];
            console.log(fieldRow.join(""))
        }
    }

    static generateField(x, y, percentage){
        let field = [];
        let holeCount = Math.floor(percentage * x * y);
        console.log(holeCount);
        const charArray = [hole, fieldCharacter];
        for(let i = 0; i < x; i++){
            let row = [];
            for(let j = 0; j < y; j++){
                let randomInt = Math.floor(Math.random()* (x*y));
                if( randomInt % 3 === 0){
                    if(holeCount > 0){
                        holeCount -= 0;
                        row.push(hole);
                        continue;
                    }else{
                        row.push(fieldCharacter)
                        continue;
                    }
                }
                row.push(fieldCharacter)
                }
            field.push(row);
            }
        field[Math.floor(Math.random() * x)][Math.floor(Math.random() * y)] = hat;
        field[0][0] = pathCharacter;
        return field;
    }
}

let xDim = prompt("Choose number of rows!");
xDim = parseInt(xDim)

let yDim = prompt("Choose number of columns!");
yDim = parseInt(yDim)


let percentage = prompt("Choose a percentage of holes!")
percentage = parseFloat(percentage)


myField = new Field(Field.generateField(xDim, yDim, percentage))

x = 0;
y = 0;

while(playing){
    console.log(myField.print());
    const direction = prompt('Choose a direction: (l)eft, (r)ight, (u)p, (d)own');
    if(direction !== 'l' && direction !== 'r' && direction != 'u' && direction != 'd'){
        console.log("Please choose a valid direction!");
        continue;
    }

    if(direction === 'l'){
        y-=1;
        if(x < 0){
            console.log("Game Over! [Left Boundary of Board]");
            playing = false;
        }else if(x >= 0){
            if(myField.field[x][y] === hat){
                console.log("You found your hat! You Win!")
                playing = false;
            }else if(myField.field[x][y] === hole){
                console.log("Game over! You fell in a hole!")
                playing = false;
            }else{
                myField.field[x][y] = '*';
                continue;
            }
        }
    }

    if(direction === 'r'){
        y+=1;
        if(x > myField.field.length){
            console.log("Game Over! [Left Boundary of Board]");
            playing = false;
        }else{
            if(myField.field[x][y] === hat){
                console.log("You found your hat! You Win!")
                playing = false;
            }else if(myField.field[x][y] === hole){
                console.log("Game over! You fell in a hole!")
                playing = false;
            }else{
                myField.field[x][y] = '*';
                continue;
            }
        }  
    }
    if(direction === 'u'){
        x-=1;
        if(x < 0){
            console.log("Game Over! [Left Boundary of Board]");
            playing = false;
        }else{
            if(myField.field[x][y] === hat){
                console.log("You found your hat! You Win!")
                playing = false;
            }else if(myField.field[x][y] === hole){
                console.log("Game over! You fell in a hole!")
                playing = false;
            }else{
                myField.field[x][y] = '*';
                continue;
            }
        }  
    }
    if(direction === 'd'){
        x+=1;
        if(x > myField.field[0].length){
            console.log("Game Over! [Left Boundary of Board]");
            playing = false;
        }else{
            if(myField.field[x][y] === hat){
                console.log("You found your hat! You Win!")
                playing = false;
            }else if(myField.field[x][y] === hole){
                console.log("Game over! You fell in a hole!")
                playing = false;
            }else{
                myField.field[x][y] = '*';
                continue;
            }
        }  
    }
}