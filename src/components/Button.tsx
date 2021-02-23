type ButtonProps = {
    children: any;
    color: string;
    className?: string;
    onClick?(): void;
};

const Button: React.FC<ButtonProps> = ({ color, className, onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full h-20 btn rounded-md bg-${color}-500 hover:bg-${color}-700 ${className} flex justify-center items-center text-white font-semibold text-xl`}>
            {children}
        </button>
    );
};

export default Button;
