class Flag{
    constructor(countryName){
        let fileName = countryName.toLowerCase();
        this._flag = this._getImgURL(fileName + ".png");
        Object.freeze();
    }

    _getImgURL(fileName){
        return `./img/flags/${fileName}`;
    }

    get flag(){
        return this._flag;
    }
}