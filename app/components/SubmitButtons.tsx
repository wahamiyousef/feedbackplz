"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className="w-fit"><Loader2 className="mr-2 w-4 h-4 animate-spin" />Saving..</Button>
      ) : (
        <Button type="submit" className="w-fit">Save</Button>
      )}
    </>
  );
}