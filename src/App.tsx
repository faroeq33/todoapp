import { ThemeProvider } from "./components/darkmode/ThemeProvider";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="color-container dark:bg-gray-800">
          <Nav />
          <main className="flex items-center justify-center h-screen p-3">
            <div className="cardwrapper max-w-[600px]">
              <h1 className="text-4xl font-custom">Todoapp</h1>
            </div>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
