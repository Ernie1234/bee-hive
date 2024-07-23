"use client";

import { cn } from "@/lib/utils";

export default function EmailBtn() {
  return (
    <div className="flex flex-col sm:flex-row w-full justify-center items-center mt-8 gap-4">
      <div
        onClick={() => {}}
        className={cn(
          "bg-red-600 hover:bg-red-700 transition-all duration-500 bg-none px-8 py-2 rounded-full cursor-pointer max-w-min"
        )}
      >
        Decline
      </div>
      <div
        className={cn(
          "bg-green-600 hover:bg-green-700 transition-all duration-500 bg-none px-8 py-2 rounded-full cursor-pointer max-w-min"
        )}
      >
        Accept
      </div>
    </div>
  );
}
