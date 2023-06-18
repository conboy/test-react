export default function MapList(props) {
    const healthyDessertList = props.data.filter(dessert => dessert.calories < 500);

    const sortedDessertList = healthyDessertList.sort((a, b) => a.calories - b.calories);
    
    const dessertList = sortedDessertList.map(dessert => {
        const dessertText = `${dessert.name} - ${dessert.calories} cal`
        return <li key={dessert.name}>{dessertText}</li>
    });

    return (
        <ul>{dessertList}</ul>
    );
}