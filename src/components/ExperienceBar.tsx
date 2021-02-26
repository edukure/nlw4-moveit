import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

const ExperienceBar = () => {
    const { currentExp, maxExp } = useContext(ChallengesContext);

    const percentage = Math.floor((currentExp / maxExp) * 100);

    return (
        <div className="flex items-center justify-center min-w-full">
            <span className="text-right px-3">0 xp</span>
            <div className="flex flex-grow max-w-screen-md h-2 relative">
                <div className="w-full h-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400" style={{ width: `${percentage}%` }} />
                    <span
                        className="text-gray-500 absolute transform -translate-x-1/2 top-2"
                        style={{ left: `${percentage}%` }}>
                        {`${currentExp} xp`}
                    </span>
                </div>
            </div>
            <span className=" text-left px-3">{`${maxExp} xp`}</span>
        </div>
    );
};

export default ExperienceBar;
