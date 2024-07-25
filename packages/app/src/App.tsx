import { useCount } from "@core/hooks";
import { Button } from "@core/ui";
import { Router } from "@sdk/router";

const router = new Router();

router.addRoute({ path: "/home" });
router.addRoute({ path: "/about" });

function App() {
  const { count, increment, decrement } = useCount();

  return (
    <div className="flex flex-col items-center justify-center gap-2 w-screen h-screen">
      <div className="flex gap-2">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        <Button
          onClick={() => {
            alert(JSON.stringify(router.getRoutes()));
          }}
        >
          Log routes
        </Button>
      </div>

      <div className="bg-slate-800 inline-block rounded-lg p-2">
        Count: {count}
      </div>
    </div>
  );
}

export default App;
