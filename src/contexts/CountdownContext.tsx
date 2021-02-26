import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

type CountdownContextData = {
    minutes: number;
    seconds: number;
    isActive: boolean;
    hasFinished: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

export const CountdownContext = createContext({} as CountdownContextData)

type CountdownProviderProps = {
    children: ReactNode;
}

const DEFAULT_TOTAL_SECONDS = 0.1 * 60

export const CountdownProvider = ({children}: CountdownProviderProps) => {

    const {startNewChallenge} = useContext(ChallengesContext);

    const [totalSeconds, setTotalSeconds] = useState(DEFAULT_TOTAL_SECONDS);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (isActive) {
                if (totalSeconds == 0) {
                    setHasFinished(true);
                    setIsActive(false);
                    startNewChallenge();
                    return;
                }
                setTotalSeconds(totalSeconds - 1);
            }
        }, 1000);

        return () => {
            clearTimeout(timeOut);
        };
    }, [totalSeconds, isActive, setHasFinished]);

    const startCountdown = () => {
        setIsActive(true);
        setHasFinished(false);
    }

    const resetCountdown = () => {
        setIsActive(false);
        setTotalSeconds(DEFAULT_TOTAL_SECONDS);
        setHasFinished(false);
    }

    return(
        <CountdownContext.Provider value={{minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown}}>
            {children}
        </CountdownContext.Provider>
    );
}