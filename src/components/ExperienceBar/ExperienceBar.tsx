
type ExperiencebarProps = {
    currentExp: number;
    maxExp: number;
}

const ExperienceBar: React.FC<ExperiencebarProps> = ({currentExp, maxExp}) => {
    const percentage = Math.floor(currentExp/maxExp*100);

    return (<div className="flex items-center justify-center min-w-full">
        <span className="text-right px-2">0 xp</span>
        <div className="flex flex-grow max-w-screen-md h-1 bg-gray-200 rounded-full overflow-hidden ">
            <div className="h-full bg-green-400" style={{width: `${percentage}%`}}>
                
            </div>
        </div>
        <span className=" text-left px-2">{maxExp} xp</span>
    </div>);
};

export default ExperienceBar;
