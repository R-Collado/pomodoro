import { useState } from 'react';
import './scss/main.scss';

import { Home } from './components/home/home';
import { PrimaryNav } from './components/navigation/primary-nav/primary-nav';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <header>
                <PrimaryNav />
            </header>
            <main>
                <Home />
            </main>
        </>
    );
}

export default App;
