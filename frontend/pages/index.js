import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Aenzbi</h1>
            <p>
                This is the home page of your Aenzbi application.
            </p>
            <Link href="/upload">
                <a>Upload a Video</a>
            </Link>
        </div>
    );
};

export default Home;
