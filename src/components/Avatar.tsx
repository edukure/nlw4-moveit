import React from 'react';

type AvatarProps = {
    name: string;
    level: number;
    picture?: string;
};

const Avatar: React.FC<AvatarProps> = ({ name, level }) => {
    return (
        <div className="w-72 h-20 flex">
            <div className="w-20 h-20 rounded-full bg-gray-200">{/* picture placeholder*/}</div>
            <div className="flex flex-col justify-center ml-4">
                <span className="font-bold text-2xl">{name}</span>
                <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-200 mr-2 ">{/* level icon placeholder*/}</div>
                    <span className="text-gray-400">{`Level ${level}`}</span>
                </div>
            </div>
        </div>
    );
};

export default Avatar;
