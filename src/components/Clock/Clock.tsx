import { useState } from 'react';

import DoubleDigits from './DoubleDigits';

type ClockProps = {
    startFrom?: {
        minutes: number;
        seconds: number;
    };
    className?: string;
    onFinish?(): void;
};

const Clock: React.FC<ClockProps> = ({ startFrom, className }) => {
    const { minutes: startMinutes, seconds: startSeconds } = startFrom;

    const [minutes, setMinutes] = useState(startMinutes);
    const [seconds, setSeconds] = useState(startSeconds);

    return (
        <div className={`flex w-full ${className}`}>
            <DoubleDigits>{minutes}</DoubleDigits>
            <span className="h-full flex justify-center items-center font-semibold text-9xl">:</span>
            <DoubleDigits>{seconds}</DoubleDigits>
        </div>
    );
};

export default Clock;
