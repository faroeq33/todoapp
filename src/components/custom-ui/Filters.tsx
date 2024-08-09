import {
  darkmodeBg,
  darkmodeText,
  gap,
  padding,
} from "../darkmode/colorStyles";

export type View = "all" | "active" | "completed";

type FiltersProps = {
  view: View;
  setView: (view: View) => void;
};

function Filters({ view, setView }: FiltersProps) {
  return (
    <div
      className={`${darkmodeBg} flex justify-center rounded-lg ${gap} ${padding} ${darkmodeText}`}
    >
      <div
        onClick={() => setView("all")}
        className={view === "all" ? "text-primary-bright-blue" : ""}
      >
        All
      </div>
      <div
        onClick={() => setView("active")}
        className={view === "active" ? "text-primary-bright-blue" : ""}
      >
        Active
      </div>
      <div
        onClick={() => setView("completed")}
        className={view === "completed" ? "text-primary-bright-blue" : ""}
      >
        completed
      </div>
    </div>
  );
}

export default Filters;
