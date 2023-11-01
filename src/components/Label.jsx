export function Label(props) {
  return (
    <button
      disabled
      className="rounded-lg bg-byu  text-white w-auto px-5 py-2 mt-10"
    >
      {props.children}
    </button>
  );
}
