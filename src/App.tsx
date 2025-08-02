import './App.css'
import {Button} from "./renderer/src/components/ui/button.tsx";

function App() {
    function handleOnClick() {
        console.log("App clicked!")
    }

    return (
        <>
            <h1 className="text-3xl font-bold text-emerald-600">It works! 🎉</h1>
            <Button onClick={handleOnClick}>Hello World</Button>
        </>
    );
}

export default App;