import BackGroundImage from "./components/custom-ui/BackGroundImage";
import Nav from "./components/custom-ui/Nav";
import TodoSection from "./components/custom-ui/TodoSection";
import ThemeProviderWrapper from "./components/darkmode/ThemeProviderWrapper";

function App() {
  return (
    <>
      <ThemeProviderWrapper>
        <BackGroundImage />
        <div className="negativemargin" style={{ marginTop: -150 }}>
          <Nav />
          <div className="m-4">
            <main className="flex gap-4">
              <TodoSection className="w-full todo-section" />
            </main>
          </div>
        </div>
      </ThemeProviderWrapper>
    </>
  );
}

export default App;
