import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

const CompletedChallenges = () => {
    const { challengesCompleted } = useContext(ChallengesContext);
    return (
        <div className="w-full h-11 flex flex-col justify-between">
            <div className="flex justify-between font-medium text-gray-700 ">
                <span className="text-lg font-medium">Desafios completos</span>
                <span className="text-2xl font-medium">{challengesCompleted}</span>
            </div>
            <div className="w-full h-0.5 bg-gray-300 rounded-full" />
        </div>
    );
};

export default CompletedChallenges;
