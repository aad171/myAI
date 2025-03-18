import { Button } from "@/components/ui/button";
import { EraserIcon } from "lucide-react";
import Image from "next/image";
import { CHAT_HEADER, CLEAR_BUTTON_TEXT } from "@/configuration/ui";
import { AI_NAME } from "@/configuration/identity";

export const AILogo = () => (
  <div className="w-12 h-12 relative">
    <Image src="/ai-logo.png" alt={AI_NAME} width={48} height={48} />
    <div className="w-2 h-2 rounded-full bg-green-500 absolute -bottom-0.5 -right-0.5"></div>
  </div>
);

export default function ChatHeader({
  clearMessages,
}: {
  clearMessages: () => void;
}) {
  return (
    <div className="z-10 flex justify-center items-center fixed top-0 w-full p-5 bg-[#C89C3F] shadow-[0_10px_15px_-3px_rgba(255,255,255,0.5)] rounded-b-2xl">
      <div className="flex w-full max-w-5xl mx-auto items-center">
        {/* Empty spacer to balance button on the right */}
        <div className="flex-0 w-[100px]"></div>

        {/* Centered Logo and Text */}
        <div className="flex-1 flex justify-center items-center gap-3">
          <AILogo />
          <div className="flex flex-col items-start">
            <p className="text-2xl font-bold text-white">{AI_NAME}</p>
            <p className="text-sm text-white/90">{CHAT_HEADER}</p>
          </div>
        </div>

        {/* Clear Button */}
        <div className="flex-0 w-[100px] flex justify-end items-center">
          <Button
            onClick={clearMessages}
            className="gap-2 shadow-sm bg-white text-black hover:bg-gray-200"
            variant="outline"
            size="sm"
          >
            <EraserIcon className="w-4 h-4" />
            <span>{CLEAR_BUTTON_TEXT}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
