import Image from "next/image";
import { Widget } from "./components/Widget";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-6">
      {/* Centered Widget Preview */}
      <div className="w-full max-w-md">
        <Widget />
      </div>
    </div>
  );
}
