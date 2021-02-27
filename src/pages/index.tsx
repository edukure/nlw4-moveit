import { GetServerSideProps } from 'next';

import Avatar from '../components/Avatar';
import Countdown from '../components/Countdown';
import CompletedChallenges from '../components/CompletedChallenges';
import ExperienceBar from '../components/ExperienceBar';
import ChallengeCard from '../components/ChallengeCard';

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

type User = {
    level: number;
    currentExp: number;
    challengesCompleted: number;
};

type HomeProps = {
    user: User;
};

export default function Home({ user }: HomeProps) {
    return (
        <ChallengesProvider user={user}>
            <div className="min-h-screen w-full flex flex-col items-center bg-gray-100 py-10">
                <ExperienceBar />

                <CountdownProvider>
                    <div className="mt-32 object-center lg:grid lg:grid-cols-2 lg:gap-6">
                        <div className="w-panel h-panel flex flex-col justify-between mb-12 lg:mb-0">
                            <Avatar />
                            <CompletedChallenges />
                            <Countdown />
                        </div>

                        <ChallengeCard />
                    </div>
                </CountdownProvider>
            </div>
        </ChallengesProvider>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { level, currentExp, challengesCompleted } = context.req.cookies;

    return {
        props: {
            user: {
                level: Number(level),
                currentExp:  Number(currentExp),
                challengesCompleted:  Number(challengesCompleted),
            },
        },
    };
};
