import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="mesh-gradient flex min-h-screen flex-col items-center justify-center gap-8 bg-background">
      <h1 className="text-display text-center text-foreground">
        Hello CBC
      </h1>
      <Button className="h-11 rounded-full px-8 text-sm shadow-lift">
        Join the club
      </Button>
    </main>
  );
}
