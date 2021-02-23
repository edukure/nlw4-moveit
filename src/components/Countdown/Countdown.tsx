import { useState, useEffect } from 'react';

import DoubleDigits from './DoubleDigits';
import Button from '../Button';

type CountdownProps = {
    startFrom?: {
        minutes: number;
        seconds: number;
    };
    className?: string;
    onFinish?(): void;
};

const Countdown: React.FC<CountdownProps> = ({ startFrom, className }) => {
    const { minutes: startMinutes, seconds: startSeconds } = startFrom;

    const [totalSeconds, setTotalSeconds] = useState(startMinutes * 60 + startSeconds);
    const [active, setActive] = useState(false);
    const [finished, setFinished] = useState(false);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (active) {
                if (totalSeconds == 0) {
                    setFinished(true);
                    return;
                }
                setTotalSeconds(totalSeconds - 1);
            }
        }, 1000);

        return () => {
            clearTimeout(timeOut);
        };
    }, [totalSeconds, active, setFinished]);

    const toggleCountdown = () => {
        setActive(!active);
        setFinished(false);
    };

    return (
        <div className="flex flex-col justify-between">
            <div className={`flex w-full h-36 mb-12 font-semibold text-9xl font-digit ${className}`}>
                <DoubleDigits>{minutes}</DoubleDigits>:<DoubleDigits>{seconds}</DoubleDigits>
            </div>
            {finished ? (
                <>
                    {/* Finished Task */}
                    <div className="w-full h-20 rounded-md bg-white text-gray-600 flex justify-center items-center font-semibold text-xl border-b-4 border-green-400">
                        Ciclo encerado
                    </div>
                </>
            ) : active ? (
                <>
                    {/* Start Button */}
                    <button
                        onClick={toggleCountdown}
                        className="w-full h-20 rounded-md bg-white text-gray-900 hover:bg-pink-700 hover:text-white  flex justify-center items-center font-semibold text-xl">
                        Pausar ciclo
                    </button>
                </>
            ) : (
                <>
                    {/* Pause Button */}
                    <button
                        onClick={toggleCountdown}
                        className="w-full h-20 rounded-md bg-indigo-500 hover:bg-indigo-700 flex justify-center items-center text-white font-semibold text-xl">
                        Iniciar Ciclo
                    </button>
                </>
            )}
        </div>
    );
};

export default Countdown;
