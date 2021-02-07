class FlagList{
    constructor(){
        this._flagList = [];
    }

    add(flag){
        this._flagList.push(flag);
    }

    get flagList(){
        return [].concat(this._flagList);
    }
}