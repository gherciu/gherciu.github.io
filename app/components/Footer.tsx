import DevIcon from "./DevIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="container mb-10 mt-24 flex justify-between">
      <p className="text-sm">{year} Gheorghe Gherciu</p>
    </div>
  );
}
