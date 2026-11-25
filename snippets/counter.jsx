export const ImportedCounter = ({ label = "Clicks", start = 0 }) => {
  const [count, setCount] = useState(start);
  return (
    <div className="not-prose flex items-center gap-3 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 my-4">
      <span className="text-sm text-zinc-600 dark:text-zinc-400">{label}:</span>
      <span className="text-lg font-semibold">{count}</span>
      <button
        className="ml-auto rounded-lg bg-primary px-3 py-1 text-sm text-white"
        onClick={() => setCount(count + 1)}
      >
        +1
      </button>
      <button
        className="rounded-lg border border-zinc-300 dark:border-zinc-700 px-3 py-1 text-sm"
        onClick={() => setCount(start)}
      >
        Reset
      </button>
    </div>
  );
};
