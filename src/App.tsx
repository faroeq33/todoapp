import BackGroundImage from "./components/custom-ui/BackGroundImage";
import { ThemeProvider } from "./components/darkmode/ThemeProvider";
import Nav from "./components/custom-ui/Nav";
import TodoSection from "./components/custom-ui/TodoSection";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <BackGroundImage />
        <div className="negativemargin" style={{ marginTop: -150 }}>
          <Nav />
          <div className="m-4">
            <main className="flex gap-4">
              <TodoSection className="w-full todo-section" />
            </main>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
