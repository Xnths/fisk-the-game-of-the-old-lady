class Flag{
    constructor(countryName){
        this._flag = _getImgURL(countryName + ".png");
        Object.freeze();
    }

    _getImgURL(fileName){
        return `./img/flags/${fileName}`;
    }

    get flag(){
        return this._flag;
    }
}