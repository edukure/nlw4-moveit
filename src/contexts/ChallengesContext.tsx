import { createContext, ReactNode, useContext, useState } from 'react';

import challenges from '../../challenges.json';

type ChallengesProviderProps = {
    children?: ReactNode;
};

type Challenge = {
    type: 'body' | 'eye';
    description: string;
    amount: number;
};

type ChallengesContextData = {
    level: number;
    levelUp: () => void;
    currentExp: number;
    maxExp: number;
    challengesCompleted: number;
    startNewChallenge: () => void;
    activeChallenge: Challenge;
    challengeFailed: () => void;
    challengeSucceded: () => void;
};

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
    const [level, setLevel] = useState(1);
    const [currentExp, setCurrentExp] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const maxExp = Math.pow((level + 1) * 4, 2);

    const levelUp = () => {
        setLevel(level + 1);
    };

    const startNewChallenge = () => {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge);
    };

    const challengeFailed = () => {
        setActiveChallenge(null);
    };

    const challengeSucceded = () => {
        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;

        if (currentExp + amount >= maxExp) {
            levelUp();
            setCurrentExp(currentExp + amount - maxExp);
        }
        else {
            setCurrentExp(currentExp + amount)
        }
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1)
    };

    return (
        <ChallengesContext.Provider
            value={{
                level,
                levelUp,
                currentExp,
                maxExp,
                challengesCompleted,
                startNewChallenge,
                activeChallenge,
                challengeFailed,
                challengeSucceded
            }}>
            {children}
        </ChallengesContext.Provider>
    );
};
