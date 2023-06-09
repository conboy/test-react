function BtnES6() {
    const exFunction = () => {
        console.log("ES6 button pressed")
    }

    return (
        <div>
            <button onClick={exFunction}>ES6 Button</button>
        </div>
    );
}

export default BtnES6;