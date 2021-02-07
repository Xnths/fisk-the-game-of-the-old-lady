class FlagView extends View{
    constructor(element){
        super(element);
    }

    _template(model){
        return `
            <p>Where is the flag from?</p>
            <img src="img/logo.png" alt="Randomly generated picture of a country's flag" id="img">
        `
    }
}