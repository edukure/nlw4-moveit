import React, { useContext } from 'react';
import Image from 'next/image';
import { ChallengesContext } from '../contexts/ChallengesContext';

const Avatar = () => {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={`w-72 h-20 flex`}>
            <Image
                className="w-20 h-20 rounded-full overflow-hidden"
                src="https://github.com/edukure.png"
                layout="fixed"
                width="80"
                height="80"
            />
            <div className="flex flex-col justify-center ml-4">
                <span className="font-bold text-2xl">Eduardo</span>
                <div className="flex items-center">
                    <Image src="/icons/level.svg" height="16" width="16" />
                    <span className="ml-1.5 text-gray-400">{`Level ${level}`}</span>
                </div>
            </div>
        </div>
    );
};

export default Avatar;
