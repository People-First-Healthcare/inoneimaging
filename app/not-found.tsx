import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[calc(100vh-380px)] flex flex-col justify-center items-center">
      <h2 className="text-9xl">404</h2>
      <p className="text-2xl">Page Not Found</p>
      <div className="p-10 text-center">
        <p>{`The page you're looking for isn't available.`}</p>
        <p>Try with another page or use the go home button below</p>
      </div>
      <Link href="/">
        <Button>Go Home</Button>
      </Link>
    </div>
  );
}
