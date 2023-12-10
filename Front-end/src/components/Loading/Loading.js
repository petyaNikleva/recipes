import './Loading.css';


const Loading = () => {
    return (
        <>
            <div className="loader-container">
                <div className="loader">
                    <div className="inner one" />
                    <div className="inner two" />
                    <div className="inner three" />
                </div>
            </div>
            <div className="white-color text-wait">Моля, изчакайте. Вкусните рецeптите се зареждат.</div>
        </>
    );
}

export default Loading;

