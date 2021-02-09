class TTTController{
    //TTT stands for tic-tac-toe
    constructor(){
        let $ = document.querySelector.bind(document);

        this._gridSpace = document.querySelectorAll('.grid-space')
        this._gameStatus = new Array(9);

        this._turnCounter = 0;
        this._turn = "x";
        this._turnX = $("#x");
        this._turnO = $("#o");
        
        this._btnCorrect = $("#correct");
        this._btnWrong = $("#wrong");
        
        this._countryDisplay = $("#country-display");
        this._flagView = new FlagView(this._countryDisplay);
        this._defaultView = new DefaultView(this._countryDisplay);
        this._defaultView.update();
        this._flagList = this._initializeFlags();

        this._draws = 0;
        this._answerValidationOn = false;
        this._correct = false;
        this._position = 0;
    }

    _initializeFlags(){
        let argentina = new Flag("argentina");
        let australia = new Flag("australia");
        let brazil = new Flag("brazil");
        let canada = new Flag("canada");
        let france = new Flag("france");
        let germany = new Flag("germany");
        let italy = new Flag("italy");
        let japan = new Flag("Japan");
        let spain = new Flag("usa");
        return new FlagList(
            argentina,
            australia,
            brazil,
            canada,
            france,
            germany,
            italy,
            japan,
            spain
        );
    }

    attemptToDraw(position){
        this._position = position;
        this._answerValidationOn = true;

        this._gridSpace.forEach(space => space.disabled = true);
        this._gridSpace[position].style.background = "var(--red)";

        if(this._turnCounter > 8){
            this._flagList.suffle();
            this._turnCounter = 0;
        } else{
            this._turnCounter++;
        }
        this._flagView.update(this._flagList, this._turnCounter);
    }

    _checkForWinner(){
        if(this._testRows() || this._testColumn() || this._testDiagonal()){
            alert(`${this._turn} wins!`);
            location.reload();
        }
    }

    _testDiagonal(){
        return false;
    }

    _testColumn(){
        let testColumn = [false, false, false];
        let index = 0;

        for(let i=0; i < this._gameStatus.length; i += 3){
            testColumn[index] = this._gameStatus[i] == this._turn;
            index++;
        }
        return !testColumn.includes(false);
    }

    _testRows(){
        let testFirstRow = !this._gameStatus.slice(0,3).map(n => n == this._turn).includes(false);
        let testSecondRow = !this._gameStatus.slice(3,6).map(n => n == this._turn).includes(false);
        let testThirdRow = !this._gameStatus.slice(6,9).map(n => n == this._turn).includes(false);

        return [testFirstRow, testSecondRow, testThirdRow].includes(true);
    }

    correct(){
        if(this._answerValidationOn == true){
            this._drawOnGrid(this._position);
            this._gameStatus[this._position] = this._turn;
            console.log(this._gameStatus);

            if(this._draws > 4){
                this._checkForWinner();
            }

            this._releaseGrid();
        }
    }

    wrong(){
        if(this._answerValidationOn == true){
            this._releaseGrid();
        }
    }

    _releaseGrid(){
        this._defaultView.update();

        this._gridSpace.forEach(space => space.disabled = false);

        this._answerValidationOn = false;
        this._gridSpace[this._position].style.background = "none";

        if(this._turn == "x"){
            this._turn = "o";

            this._turnX.style.background = "none";
            this._turnO.style.background = "var(--red)";

            this._turnX.style.borderBottom = "none";
            this._turnO.style.borderBottom = "var(--turn-border)";
        } else{
            this._turn = "x";

            this._turnX.style.background = "var(--red)";
            this._turnO.style.background = "none";

            this._turnX.style.borderBottom = "var(--turn-border)";
            this._turnO.style.borderBottom = "none";
        }
    }

    _drawOnGrid(position){
        this._gridSpace[position].textContent = this._turn;
        this._gameStatus[position] = this._turn;
        
        this._draws++;
    }
}