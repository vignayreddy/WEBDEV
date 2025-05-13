
function printHello()
{
    console.log("Hello!");
}
function printBye()
{
    console.log("Bye..");
}
function dblClick1()
{
    console.log("Bye..1");
}
export default function Button()
{
    return (<>
        <button onClick={printHello}>Click me!</button>
        <p onMouseOver={printBye}>This parah is for event demo</p>
        <button onDoubleClick={dblClick1}>Click me twice!</button>
     
        </>)
};