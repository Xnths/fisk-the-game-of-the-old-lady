class FlagView{
    constructor(element){
        this._element = element;
    }

    _template(model, turnCounter){
        return `
            <p>Are you from ___________?</p>
            <img src="${model.flagList[turnCounter].flag}" alt="Randomly generated picture of a country's flag" id="img">
        `
    }

    update(model, turnCounter){
        this._element.innerHTML = this._template(model, turnCounter);
    }
}