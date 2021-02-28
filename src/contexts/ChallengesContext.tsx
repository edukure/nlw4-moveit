import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from "js-cookie";

import challenges from '../../challenges.json';
import LevelUpModal from '../components/LevelUpModal';

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
    closeLevelUpModal: () => void;
};

type User = {
    level: number;
    currentExp: number;
    challengesCompleted: number;
};

type ChallengesProviderProps = {
    children?: ReactNode;
    user: User;
};

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider = ({ children, user}: ChallengesProviderProps) => {
    const [level, setLevel] = useState(user.level ?? 1);
    const [currentExp, setCurrentExp] = useState(user.currentExp ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(user.challengesCompleted ?? 0);
    const [activeChallenge, setActiveChallenge] = useState(null);
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

    const maxExp = Math.pow((level + 1) * 4, 2);

    useEffect(() => {
        Cookies.set("level", String(level));
        Cookies.set("currentExp", String(currentExp));
        Cookies.set("challengesCompleted", String(challengesCompleted));
    }, [level, currentExp, challengesCompleted]);

    useEffect(() => {
        Notification.requestPermission();
    }, []);

    const levelUp = () => {
        setLevel(level + 1);
        setIsLevelUpModalOpen(true);
    };

    const startNewChallenge = () => {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play();

        if (Notification.permission === 'granted') {
            new Notification('Novo desafio 🎉', {
                body: `Valendo ${challenge.amount}`,
            });
        }
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
        } else {
            setCurrentExp(currentExp + amount);
        }
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    };

    const closeLevelUpModal = () => {
        setIsLevelUpModalOpen(false);
    }

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
                challengeSucceded,
                closeLevelUpModal
            }}>
            {children}

            { isLevelUpModalOpen && <LevelUpModal />}
        </ChallengesContext.Provider>
    );
};
