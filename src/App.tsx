import BackGroundImage from "./components/custom-ui/BackGroundImage";
import { ThemeProvider } from "./components/darkmode/ThemeProvider";
import Nav from "./components/custom-ui/Nav";
import TodoSection from "./components/custom-ui/TodoSection";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className=" color-container dark:bg-gray-800">
          <BackGroundImage />
          <div className="negativemargin" style={{ marginTop: -150 }}>
            <Nav />
            <main className="flex p-4">
              <TodoSection />
            </main>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
