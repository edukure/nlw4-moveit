import { useState, useEffect } from 'react';
import Image from 'next/image';

import DoubleDigits from './DoubleDigits';

type CountdownProps = {
    startFrom?: {
        minutes: number;
        seconds: number;
    };
    className?: string;
};

const Countdown = ({ startFrom, className }: CountdownProps) => {
    const { minutes: startMinutes, seconds: startSeconds } = startFrom;

    const [totalSeconds, setTotalSeconds] = useState(startMinutes * 60 + startSeconds);
    const [isActive, setActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (isActive) {
                if (totalSeconds == 0) {
                    setHasFinished(true);
                    return;
                }
                setTotalSeconds(totalSeconds - 1);
            }
        }, 1000);

        return () => {
            clearTimeout(timeOut);
        };
    }, [totalSeconds, isActive, setHasFinished]);

    const toggleCountdown = () => {
        setActive(!isActive);
        setHasFinished(false);
    };

    return (
        <div className="flex flex-col justify-between">
            <div className={`flex w-full h-36 mb-12 font-semibold text-9xl font-digit ${className}`}>
                <DoubleDigits>{minutes}</DoubleDigits>:<DoubleDigits>{seconds}</DoubleDigits>
            </div>
            {hasFinished ? (
                <>
                    {/* Finished Task */}
                    <div className="w-full h-20 rounded-md bg-white text-gray-600 flex justify-center items-center font-semibold text-xl border-b-4 border-green-400">
                        Ciclo encerado
                    </div>
                </>
            ) : isActive ? (
                <>
                    {/* Pause Button */}
                    <button
                        onClick={toggleCountdown}
                        className="w-full h-20 rounded-md bg-white text-gray-900 transition hover:bg-pink-700 hover:text-white  flex justify-center items-center font-semibold text-xl">
                        <span className="">Abandonar ciclo</span>
                        <svg className="fill-current"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M27 14.41L25.59 13L20 18.59L14.41 13L13 14.41L18.59 20L13 25.59L14.41 27L20 21.41L25.59 27L27 25.59L21.41 20L27 14.41Z"
                                
                            />
                        </svg>
                    </button>
                </>
            ) : (
                <>
                    {/* Start Button */}
                    <button
                        onClick={toggleCountdown}
                        className="w-full h-20 rounded-md bg-indigo-500 transition hover:bg-indigo-700  flex justify-center items-center text-white font-semibold text-xl">
                        <span>Iniciar Ciclo</span>
                        <img
                            className="w-3 ml-3 fill-current text-red-400"
                            src="/icons/triangle-arrow-right.svg"
                        />
                    </button>
                </>
            )}
        </div>
    );
};

export default Countdown;
