import React from 'react';
import Accordian from './component/Accordian'
const items = [
    { title: 'What is react', content: 'JS Framework' },
    { title: 'Why use react', content: 'JS Framework' }
]


const App = () => {
    return (
        <div><Accordian items={items} /></div>
    )
}
export default App;