function BtnES6() {
    const exFunction = () => {
        console.log("ES6 button pressed")
    }

    return (
        <button onClick={exFunction}>ES6 Button</button>
    );
}

export default BtnES6;