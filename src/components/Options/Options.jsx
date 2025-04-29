import css from "./Options.module.css";

export default function Options({ onUpdate, visibleReset, onReset }) {
  return (
    <div className={css.options}>
      <button className={css.option} onClick={() => onUpdate("good")}>
        Good
      </button>
      <button className={css.option} onClick={() => onUpdate("neutral")}>
        Neutral
      </button>
      <button className={css.option} onClick={() => onUpdate("bad")}>
        Bad
      </button>
      {visibleReset && (
        <button className={css.reset} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
