class FlagView extends View{
    constructor(element){
        super(element);
    }

    _template(model){
        return `
            <p>Are you from ___________?</p>
            <img src="${model.flagList[0].flag}" alt="Randomly generated picture of a country's flag" id="img">
        `
    }
}