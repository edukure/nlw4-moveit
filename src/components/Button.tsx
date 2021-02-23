type ButtonProps = {
    children: any;
    color: string;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({ color, className, children }) => {
    return (
        <button
            className={`w-full h-20 btn rounded-md bg-${color}-500 hover:bg-${color}-700 ${className} flex justify-center items-center text-white font-semibold text-xl`}>
            {children}
        </button>
    );
};

export default Button;
