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
        
        this._imgList = $("#country-display");
        this._flagView = new FlagView(this._imgList);
        this._flagList = this._initializeFlags();

        this._draws = 0;
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
        this._gridSpace.forEach(space => space.disabled = true);
        this._flagView.update(this._flagList);

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
        
        this._draws++;
    }
}