class getThaiDate {
    constructor(date, month, year) {
        this.date = date;
        this.month = month;
        this.year = year;
    }

    getShortDate() {
        return `${this.date}/${this.month}/${this.year}`;
    }
    getLongDate() {
        const m = [
            "มกราคม",
            "กุมภาพันธ์",
            "มีนาคม",
            "เมษายน",
            "พฤษภาคม",
            "มิถุนายน",
            "กรกฎาคม",
            "สิงหาคม",
            "กันยายน",
            "ตุลาคม",
            "พฤศจิกายน",
            "ธันวาคม",
        ];
        return `${this.date}/${m[this.month - 1]}/${this.year}`;
    }

    isLeapYear(){
        let y = this.year
        if((y%400 == 0) || ((y&4 == 0 ) && (y%100 != 0))){
            return true
        }
        return false
    }
}

export { getThaiDate }