import Image from "next/image";

export default function Header() {
  return (
    <div className="container my-5">
      <div className="flex items-center">
        <Image
          height={40}
          width={40}
          src="/images/logo.png"
          alt="Gheorghe Gherciu Logo"
        />
        <h1 className="ml-[2px] text-2xl font-bold">
          <span className="hidden">G</span>heorghe Gherciu
        </h1>
      </div>
    </div>
  );
}
