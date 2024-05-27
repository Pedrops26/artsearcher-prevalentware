import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const LinkButton = () => {
  return (
    <a href="/login" className={buttonVariants({ variant: "outline" })}>
      Enter
    </a>
  );
};

export default function Home() {
  return (
    <div
      className="bg-cover bg-center h-screen w-screen"
      style={{
        backgroundImage:
          "url(https://sothebys-com.brightspotcdn.com/dims4/default/06a9b0f/2147483647/strip/true/crop/1000x819+0+0/resize/684x560!/format/webp/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F0b%2Fe6%2F34e35a261f9cd1013a8625057cef%2Fproxy.jpg)",
      }}
    >
      <title>Rijks Museum</title>
      <div className="h-screen flex items-center justify-center">
        <div className="bg-slate-500 flex flex-col items-center p-8 rounded-lg text-center space-y-4 gap-4">
          <Label htmlFor="Welcome" className="text-6xl">
            Welcome to Rijks Museum
          </Label>
          <Label htmlFor="By" className="text-xl">
            By @Pedrops26
          </Label>
          <LinkButton />
        </div>
      </div>
    </div>
  );
}
