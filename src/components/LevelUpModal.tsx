import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

const LevelUpModal = () => {
    const { level, closeLevelUpModal } = useContext(ChallengesContext);
    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-gray-50 bg-opacity-80">
            <div className="relative max-w-md py-8 px-8 rounded-lg bg-white shadow-xl text-center">
                <header className="w-72 font-semibold text-9xl text-indigo-500 mb-5 bg-level-up bg-no-repeat bg-cover">
                    {level}
                </header>
                <p className="font-semibold text-3xl text-gray-700">Parabains</p>
                <p className="text-xl text-gray-600">Você upou de level!</p>
                <button type="button" className="absolute right-0 top-0 hover:text-red-300" onClick={closeLevelUpModal}>
                    <svg
                        className="fill-current"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M27 14.41L25.59 13L20 18.59L14.41 13L13 14.41L18.59 20L13 25.59L14.41 27L20 21.41L25.59 27L27 25.59L21.41 20L27 14.41Z" />
                    </svg>
                </button>
                {/* <button
                    type="button"
                    className="h-14 w-72 mt-8 flex items-center justify-center rounded-lg text-white bg-blue-500 hover:bg-blue-700">
                    Compartilhar no twitter
                    <img src="/icons/twitter.svg" alt="twitter" className="w-5 h-5 ml-2" />
                </button> */}
            </div>
        </div>
    );
};

export default LevelUpModal;
