import { useState } from 'react';
import './scss/main.scss';

import { Hero } from './components/hero/hero';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <header>
                <Hero />
            </header>
        </>
    );
}

export default App;
