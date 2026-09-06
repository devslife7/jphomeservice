import { Button } from "jphs";
import { Phone, ArrowRight, Hammer } from "lucide-react";

export function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Get a Free Estimate</Button>
      <Button variant="secondary">View Services</Button>
      <Button variant="outline">Our Projects</Button>
      <Button variant="ghost">Learn More</Button>
      <Button variant="destructive">Cancel Request</Button>
      <Button variant="link">Read our reviews</Button>
    </div>
  );
}

export function Sizes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Schedule a Visit</Button>
      <Button size="icon" aria-label="Call">
        <Phone />
      </Button>
    </div>
  );
}

export function WithIcons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>
        <Phone /> Call Now
      </Button>
      <Button variant="outline">
        <Hammer /> Book a Repair
      </Button>
      <Button variant="secondary">
        Get Started <ArrowRight />
      </Button>
    </div>
  );
}

export function Disabled() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button disabled>Submitting…</Button>
      <Button variant="outline" disabled>
        Unavailable
      </Button>
    </div>
  );
}
