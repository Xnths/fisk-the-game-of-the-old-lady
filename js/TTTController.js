class TTTController{
    //TTT stands for tic-tac-toe
    constructor(){
        let $ = document.querySelector.bind(document);

        this._grid0 = $('#zero');
        this._grid1 = $('#one');
        this._grid2 = $('#two');
        this._grid3 = $('#three');
        this._grid4 = $('#four');
        this._grid5 = $('#five');
        this._grid6 = $('#six');
        this._grid7 = $('#seven');
        this._grid8 = $('#eight');

        this._turnX = $("#x");
        this._turnO = $("#o");

        this._btnCorrect = $("#correct");
        this._btnWrong = $("#wrong");
    }
}