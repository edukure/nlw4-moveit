import Image from "next/image"

const ChallengeCard: React.FC = () => {
    const exp = 300;
    const title = 'exercicio';
    const description = 'asd;lkas;dlkas;das';
    const type = "body"
    const hasActiveChallenge = false;

    return (
        <div className="w-panel h-panel mb-12 lg:mb-0 bg-white rounded-lg px-16 py-8">
            <div className="w-full h-full flex flex-col justify-between items-center text-center">
                {hasActiveChallenge ? (
                    <>
                        {/* Show current challenge info */}
                        <h1 className="font-semibold text-xl text-indigo-500">{`Ganhe ${exp} exp`}</h1>
                        {/* spacer */}
                        <div className="w-full h-0.5 bg-gray-300" />
                        {/* Activity info */}
                        <body className="flex flex-col justify-between items-center">
                            <Image src={`/icons/${type}.svg`} height="112" width="112" />
                            <h1 className="mb-4 mt-4 font-semibold text-3xl leading-tight">{title}</h1>
                            <h2 className="text-gray-500 leading-tight ">{description}</h2>
                        </body>
                        {/* Buttons */}
                        <footer className="w-full grid grid-cols-2 gap-2">
                            <button className="w-full h-12 rounded-md bg-green-500 text-white flex justify-center items-center font-semibold text-xl ">
                                Completei
                            </button>
                            <button className="w-full h-12 rounded-md bg-red-500 text-white flex justify-center items-center font-semibold text-xl ">
                                Falhei
                            </button>
                        </footer>{' '}
                    </>
                ) : (
                    <div className="h-full w-full flex flex-col justify-center items-center">
                        <h1 className="mb-16 font-medium text-2xl text-gray-600">
                            Termine um ciclo para receber um novo desafio
                        </h1>
                        <Image src="/icons/level-up.svg" height="80" width="80"/>
                        <h2 className="mt-4 text-gray-400">Ganhe exp por cada desafio completado</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChallengeCard;
