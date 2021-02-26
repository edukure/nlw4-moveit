import { AppProps } from 'next/app';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
    return (
        <ChallengesProvider>
            <Component {...pageProps} />
        </ChallengesProvider>
    );
}

export default App;
