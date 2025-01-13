
const RandomNumber = () => {
    const number = Math.floor(Math.random() * 100);
    return <p>{number}</p>;
}

export default RandomNumber;