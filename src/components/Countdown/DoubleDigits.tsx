type DoubleDigitsProps = {
    children: number
};
const DoubleDigits: React.FC<DoubleDigitsProps> = ({ children }) => {
    const number = children.toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping:false});
    const [first, second] = number.split("");

    return <div className="w-full h-full rounded-md overflow-hidden flex">
        <div className="w-1/2 bg-white flex justify-center items-center">{first}</div>
        <div className="w-1 bg-transparent-200"/>
        <div className="w-1/2 bg-white flex justify-center items-center">{second}</div>
    </div>
};

export default DoubleDigits;
