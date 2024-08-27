export function WhiteLabel(props) {
  return (
    <div class="h-24 border border-black bg-white flex justify-center items-center">
      <span className="[&>*]:m-0 [&>*]:p-0 text-black text-center">
        {props.children}
      </span>
    </div>
  );
}

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
