import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Zap } from "lucide-react";

interface ZapierWebhookProps {
  className?: string;
}

const ZapierWebhook = ({ className }: ZapierWebhookProps) => {
  const [webhookUrl, setWebhookUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleTrigger = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please enter your Zapier webhook URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Triggering Zapier webhook:", webhookUrl);

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          triggered_from: window.location.origin,
          source: "BioIntel",
        }),
      });

      toast({
        title: "Request Sent",
        description:
          "The request was sent to Zapier. Check your Zap's history to confirm it was triggered.",
      });
    } catch (error) {
      console.error("Error triggering webhook:", error);
      toast({
        title: "Error",
        description:
          "Failed to trigger the Zapier webhook. Please check the URL and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={className}>
      <div className="bg-muted/50 border border-border rounded p-6">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="h-5 w-5 text-accent" />
          <h3 className="font-bold text-foreground uppercase tracking-wide text-sm">
            Zapier Integration
          </h3>
        </div>
        <p className="text-muted-foreground text-sm mb-4">
          Enter your Zapier webhook URL to trigger automations from this site.
        </p>
        <form onSubmit={handleTrigger} className="flex gap-2">
          <Input
            type="url"
            placeholder="https://hooks.zapier.com/hooks/catch/..."
            value={webhookUrl}
            onChange={(e) => setWebhookUrl(e.target.value)}
            className="flex-1 bg-background border-border"
          />
          <Button type="submit" disabled={isLoading} className="uppercase tracking-wide text-xs">
            {isLoading ? "Sending..." : "Trigger"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ZapierWebhook;
