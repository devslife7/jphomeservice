import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
  Button,
} from "jphs";
import { Menu } from "lucide-react";

const links = ["Home", "Services", "Projects", "FAQ", "Contact"];

// Rendered open (defaultOpen) so the panel is visible in the static card.
export function MobileNav() {
  return (
    <Sheet defaultOpen>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open menu">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>JP Home Services</SheetTitle>
          <SheetDescription>Virginia · Washington DC · Maryland</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="hover:bg-accent rounded-md px-3 py-2 text-sm font-medium"
            >
              {l}
            </a>
          ))}
        </nav>
        <SheetFooter>
          <Button className="w-full">Get a Free Estimate</Button>
          <SheetClose asChild>
            <Button variant="ghost" className="w-full">
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
