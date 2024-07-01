import React from 'react';

function App(){
    var [a,b] = useState(69);
    return(
        <div className='w-full h-screen bg-red text-white'>
            <h1>{a}</h1>
            <button onClick={() =>b(a+1)} className='px-3 py-1 bg-green-500 rounded-md'>Click me</button>
        </div>
    )
}

export default App