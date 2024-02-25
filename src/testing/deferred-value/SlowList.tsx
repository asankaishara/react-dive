export default function SlowList( {text} : {text: string} ) {
    const items = [];
    for(let i =0; i < 250; i++) {
        items.push(<SlowItem key={i} text={text} />)
    }
    return <ul className='items'>{items}</ul>
}


const SlowItem = ({text} : {text: string}) => {
    const startTime = performance.now();
    while (performance.now() - startTime < 1) {
        // do nothing
    }
    return <li className='item'>Text #{text + 1}</li>
};