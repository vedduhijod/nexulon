import { Button } from "@/components/ui/button";
import { Mic, Paperclip, Send } from "lucide-react";
import React from "react";
import AiMultiModel from "./AiMultiModel";


function ChatInputBox() {
  return (
    <div className="relative min-h-screen">
      {/* Page Content */}
      <AiMultiModel />
      {/* Fixed Chat Input */}
      <div className="fixed bottom-0 left-0 w-full flex justify-center px-4 pb-4">
        <div className="w-full border rounded-xl shadow-md max-w-2xl p-4">
          <input
            type="text"
            placeholder="Ask me anything..."
            className="outline-none border-0"
          />
          <div className="mt-3 flex justify-between items-center">
            <Button className={""} variant={"ghost"} size={"icon"}>
              <Paperclip className="h-5 w-5" />
            </Button>
            <div className="flex gap-5 ">
              <Button className={""} variant={"ghost"} size={"icon"}>
                <Mic />
              </Button>
              <Button className={"bg-pink-600"} size={"icon"}>
                <Send />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInputBox;
