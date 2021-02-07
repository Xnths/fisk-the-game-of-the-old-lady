class View{
    constructor(element){
        this._element = element;
    }

    _template(model){
        throw new Error("Template has not been defined.");
    }

    update(model){
        this._element.innerHTML = this._template(model);
    }
}