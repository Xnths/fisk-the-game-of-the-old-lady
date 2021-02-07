class TTTController{
    //TTT stands for tic-tac-toe
    constructor(){
        let $ = document.querySelector.bind(document);

        this._gridSpace = document.querySelectorAll('.grid-space')
        this._gridArray = new Array(9);

        this._turn = "x";
        this._turnX = $("#x");
        this._turnO = $("#o");
        
        this._btnCorrect = $("#correct");
        this._btnWrong = $("#wrong");

        this._attempts = 0;

        this._imgList = $("#country-display");
        
        this._flagView = new FlagView(this._imgList);
    }

    attemptToDraw(position){
        this._gridSpace.forEach(space => space.disabled = true);
        this._flagView.update("");

        this._gridSpace[position].textContent = this._turn;
        
        if(this._turn == "x"){
            this._turn = "o";
        } else{
            this._turn = "x";
        }
    }

    drawOnGrid(position){
        

        this._gridArray[position] = this._turn;
        console.log(this._gridArray[position]);
        
        
    }
}