import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
  Button,
} from "jphs";
import { Wrench } from "lucide-react";

export function ServiceCard() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Kitchen Remodeling</CardTitle>
        <CardDescription>
          Cabinets, countertops, and full layout updates done by your local crew.
        </CardDescription>
        <CardAction>
          <span className="bg-primary/10 text-primary flex size-9 items-center justify-center rounded-full">
            <Wrench className="size-4" />
          </span>
        </CardAction>
      </CardHeader>
      <CardContent className="text-muted-foreground text-sm">
        Free in-home estimates, honest pricing, and a typical turnaround of 2–3 weeks
        across Virginia, DC, and Maryland.
      </CardContent>
      <CardFooter>
        <Button className="w-full">Get a Free Estimate</Button>
      </CardFooter>
    </Card>
  );
}

export function Simple() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Same-week scheduling</CardTitle>
        <CardDescription>
          Most repair jobs are booked within five business days.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export function Stat() {
  return (
    <Card className="w-64">
      <CardContent>
        <p className="text-primary text-3xl font-semibold">500+</p>
        <p className="text-muted-foreground text-sm">Projects completed since 2015</p>
      </CardContent>
    </Card>
  );
}
