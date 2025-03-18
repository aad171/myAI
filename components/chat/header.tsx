import Image from "next/image";
import { AI_NAME } from "@/configuration/identity";

export const AILogo = () => (
  <div className="w-16 h-16 relative"> {/* Bigger logo */}
    <Image src="/ai-logo.png" alt={AI_NAME} width={64} height={64} />
  </div>
);

export default function ChatHeader({
  children, // Render chat messages below the header
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Fixed Header */}
      <div className="z-10 flex justify-center items-center fixed top-0 w-full p-5 bg-[#C89C3F] shadow-[0_10px_15px_-3px_rgba(255,255,255,0.5)] rounded-b-2xl">
        <div className="flex w-full max-w-5xl mx-auto items-center">
          {/* Spacer for layout balance */}
          <div className="flex-0 w-[100px]"></div>

          {/* Center: Logo and AI Name */}
          <div className="flex-1 flex justify-center items-center gap-4">
            <AILogo />
            <p className="text-3xl font-bold text-white">{AI_NAME}</p>
          </div>

          {/* Right Spacer to maintain symmetry */}
          <div className="flex-0 w-[100px]"></div>
        </div>
      </div>

      {/* Chat Messages Area with top padding to prevent overlap */}
      <div className="pt-36 max-w-5xl mx-auto">
      </div>
    </>
  );
}
