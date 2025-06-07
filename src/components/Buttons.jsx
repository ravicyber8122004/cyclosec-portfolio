export function PrimaryButton(props) {
  return (
    <button
      className={`border border-PrimaryButtonBackground rounded-full px-6 py-2 font-medium bg-PrimaryButtonBackground text-neutral-950 ${props.className}`}
    >
      {props.name}
    </button>
  );
}

export function SecondaryButton(props) {
  return (
    <button
      className={`border border-white rounded-full px-6 py-2 text-white bg-transparen font-medium hover:cursor-pointer ${props.className}`}
    >
      {props.name}
    </button>
  );
}
