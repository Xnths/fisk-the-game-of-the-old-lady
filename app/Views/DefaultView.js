class DefaultView extends View{
    constructor(element){
        super(element);
    }

    _template(model){
        return `
            <p>Click on grid...</p>
        `
    }
}