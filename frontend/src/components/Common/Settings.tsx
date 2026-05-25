import { Settings } from "lucide-react"

import { Button } from "@/components/ui/button"

export const SidebarSettings = () => {
  return (
    <Button
      variant="ghost"
      className="border-none bg-none flex-1 justify-start gap-2 "
    >
      <Settings className="h-4 w-4 text-muted-foreground" />

      <span>Settings</span>
    </Button>
  )
}