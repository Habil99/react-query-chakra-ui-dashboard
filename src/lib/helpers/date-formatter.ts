import moment from "moment";

class DateFormatter {
    private static readonly DATE_FORMAT = "DD MMMM, YYYY";

    static format(date: string): string {
        return moment(date).format(this.DATE_FORMAT);
    }
}

export default DateFormatter;