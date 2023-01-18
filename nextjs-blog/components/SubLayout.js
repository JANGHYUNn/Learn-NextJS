import Link from "next/link";

export default function SubLayout({ children }) {
  return (
    <div className={"container"}>
      <h1>
        <Link href="/">Home 로</Link>
      </h1>
      {children}
    </div>
  );
}
