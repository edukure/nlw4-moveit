import React from 'react';

type AvatarProps = {
    name: string;
    level: number;
    picture?: string;
    className?: string;
};

const Avatar: React.FC<AvatarProps> = ({ name, level, className }) => {
    return (
        <div className={`w-72 h-20 flex ${className}`}>
            <div className="w-20 h-20 rounded-full bg-gray-200">{/* picture placeholder*/}</div>
            <div className="flex flex-col justify-center ml-4">
                <span className="font-bold text-2xl">{name}</span>
                <div className="flex items-center">
                    <div className="w-4 h-4 mr-1 ">
                        <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.5 8.722v6.55H3.503v-6.55h-2.8l6.3-8.014L13.3 8.722h-2.8z"
                                fill="#4CD62B"
                            />
                            <path
                                d="M13.3 9.45a.688.688 0 01-.542-.267L7 1.863l-5.758 7.32a.682.682 0 01-.985.103.748.748 0 01-.1-1.024l6.3-8.008a.706.706 0 011.084 0l6.3 8.008c.246.31.2.77-.099 1.024a.68.68 0 01-.441.164z"
                                fill="#4CD62B"
                            />
                            <path
                                d="M3.5 16a.714.714 0 01-.7-.728v-6.55c0-.403.313-.728.7-.728.387 0 .7.325.7.728v6.55a.714.714 0 01-.7.728z"
                                fill="#4CD62B"
                            />
                            <path
                                d="M10.499 16H3.5a.714.714 0 01-.7-.728c0-.403.313-.728.7-.728H10.5c.387 0 .7.325.7.728a.714.714 0 01-.7.728z"
                                fill="#4CD62B"
                            />
                            <path
                                d="M10.5 16a.714.714 0 01-.7-.728v-6.55c0-.403.312-.728.7-.728.386 0 .7.325.7.728v6.55a.714.714 0 01-.7.728zM3.5 9.45H.7a.714.714 0 01-.7-.728c0-.403.313-.728.7-.728h2.8c.388 0 .7.325.7.728a.714.714 0 01-.7.728z"
                                fill="#4CD62B"
                            />
                            <path
                                d="M13.3 9.45h-2.8a.714.714 0 01-.7-.728c0-.403.312-.728.7-.728h2.8c.387 0 .7.325.7.728a.714.714 0 01-.7.728z"
                                fill="#4CD62B"
                            />
                        </svg>
                    </div>
                    <span className="text-gray-400">{`Level ${level}`}</span>
                </div>
            </div>
        </div>
    );
};

export default Avatar;
