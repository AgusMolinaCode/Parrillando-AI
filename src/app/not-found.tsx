import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <div>
        <h1 className="text-[8rem]">
          {" "}
          <span className="text-5xl">Error</span> 404
        </h1>
        <h2>Pagina no encontrada</h2>
      </div>
      <Link href="/">Return Home</Link>
    </div>
  );
}
