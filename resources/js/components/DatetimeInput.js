import React from 'react' 

import { Position} from '@blueprintjs/core'
import { DateInput } from '@blueprintjs/datetime'  

export class DatetimeInput extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            closeOnSelection: true,
            date: null,
            disabled: false,
            fill: false,
            format: FORMATS[0],
            reverseMonthAndYearMenus: false,
            shortcuts: false,
            timePrecision: undefined,
        }
    } 

    handleDateChange = (date) => this.setState({ date });

    render() {
        const { date, format, ...spreadProps } = this.state;

        return (
            <DateInput
                {...spreadProps}
                {...format}
                defaultValue={new Date()}
                onChange={this.handleDateChange}
                popoverProps={{ position: Position.BOTTOM }}
            />
        ) 
    }
        
    
}

const FORMATS = [
    {
        formatDate: date => (date == null ? "" : date.toLocaleDateString()),
        parseDate: str => new Date(Date.parse(str)),
        placeholder: "JS Date",
    },
    momentFormatter("MM/DD/YYYY"),
    momentFormatter("YYYY-MM-DD"),
    momentFormatter("YYYY-MM-DD HH:mm:ss"),
];

function momentFormatter(format) {
    return {
        formatDate: date => moment(date).format(format),
        parseDate: str => moment(str, format).toDate(),
        placeholder: `${format} (moment)`,
    };
}