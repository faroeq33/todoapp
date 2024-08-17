import BackGroundImage from "./components/custom-ui/header/BackGroundImage";
import Nav from "./components/custom-ui/partials/Nav";
import TodoSection from "./components/custom-ui/partials/TodoSection";
import ThemeProviderWrapper from "@/components/features/darkmode/theme-context/ThemeContextWrapper";
// import { TodoProvider } from "./components/features/todo/todostore/TodoContext";

function App() {
  return (
    <>
      <ThemeProviderWrapper>
        <BackGroundImage />
        <div className="max-w-3xl mx-auto" style={{ marginTop: -150 }}>
          <Nav />
          <div className="m-4">
            <main className="flex">
              {/* <TodoProvider> */}
              <TodoSection className="w-full todo-section" />
              {/* </TodoProvider> */}
            </main>
          </div>
        </div>
      </ThemeProviderWrapper>
    </>
  );
}

export default App;
