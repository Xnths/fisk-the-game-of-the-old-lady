class FlagList{
    constructor(...flag){
        this._flagList = [];
        this._flagList.push(...flag);
        this._flagList = this.suffle();
    }

    suffle(){
        //Fisher-Yates Suffle algorithm
        let i = this._flagList.length, bluffer, j;
        let suffledList = [].concat(this._flagList);

        while(0 !== i){
            j = Math.floor(Math.random() * i);
            i--;

            bluffer = suffledList[i];
            suffledList[i] = suffledList[j];
            suffledList[j] = bluffer;
        }
        return suffledList;
    }

    get flagList(){
        return [].concat(this._flagList);
    }
}