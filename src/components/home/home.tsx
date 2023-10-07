import { Hero } from '../hero/hero';
import { Tips } from '../tips/tips';

export const Home = () => {
    return (
        <div className="container" data-type="wide">
            <Hero />
            <Tips />
        </div>
    );
};
