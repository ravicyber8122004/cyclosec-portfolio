import { useNavigate } from "react-router-dom";

export function PrimaryButton(props) {
  const navigate = useNavigate();
  return (
    <button
      className={`border border-PrimaryTextColour rounded-full px-6 py-2 font-medium bg-PrimaryTextColour text-neutral-950 ${props.className}`}
      onClick={() => navigate(props.Route || "/")}
    >
      {props.name}
    </button>
  );
}

export function SecondaryButton(props) {
  const navigate = useNavigate();
  return (
    <button
      className={`border border-white rounded-full px-6 py-2 text-white bg-transparen font-medium hover:cursor-pointer ${props.className}`}
      onClick={() => navigate(props.Route || "/")}
    >
      {props.name}
    </button>
  );
}
