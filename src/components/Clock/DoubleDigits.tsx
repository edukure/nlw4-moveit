type DoubleDigitsProps = {
    children: number
};
const DoubleDigits: React.FC<DoubleDigitsProps> = ({ children }) => {
    const number = children.toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping:false});
    const [first, second] = number.split("");

    return <div className="w-full h-36 rounded-md overflow-hidden flex">
        <div className="w-1/2 h-full bg-white flex justify-center items-center font-semibold text-9xl">{first}</div>
        <div className="w-1 h-full bg-transparent-200"/>
        <div className="w-1/2 h-full bg-white flex justify-center items-center font-semibold text-9xl">{second}</div>
    </div>
};

export default DoubleDigits;
