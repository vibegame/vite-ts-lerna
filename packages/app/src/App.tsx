import { useCount } from "@core/hooks";
import { Button } from "@core/ui";

function App() {
  const { count, increment } = useCount();

  return (
    <>
      <Button onClick={increment}>Increment</Button>

      <p className="text-red-500">Count: {count}</p>
    </>
  );
}

export default App;
