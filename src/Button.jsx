function printHello() {
    console.log("Hello");
}
function Hello() {
    console.log("bey");
}


export default function Button() {
    return (
        <div>
            <button onClick={printHello}>click me!</button>
            <p onMouseOver={Hello}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum laudantium accusantium officia doloribus, sint odio error non obcaecati quod! Beatae, excepturi laudantium!</p>
        </div>
    )
}
