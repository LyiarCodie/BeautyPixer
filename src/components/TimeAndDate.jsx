import { useEffect, useState } from 'preact/hooks'
import dayjs from 'dayjs'

import './TimeAndDate.css'

export const TimeAndDate = () => {
    return (
        <div className='timeAndDate'>
            <Time />
            <Date />
        </div>
    )
}

const Time = () => {
    const [currentTime, setCurrentTime] = useState(dayjs().format("h:m:s A"));

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(dayjs().format("h:mm A"));
        }, 800)
    }, [])

    return (
        <h1>
            {currentTime}
        </h1>
    )
}

const Date = () => {
    const [currentDate, setCurrentDate] = useState( dayjs().format("MMM D, YYYY") );

    useEffect(() => {
        setInterval(() => {
            setCurrentDate(dayjs().format("MMM D, YYYY"));
        }, 800)
    }, [])

    return (
        <h2>{currentDate}</h2>
    )
}