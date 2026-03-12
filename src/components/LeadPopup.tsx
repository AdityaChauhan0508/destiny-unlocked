import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Sparkles, Loader2, Share2, MessageCircle, Facebook, Twitter, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WHY_OPTIONS = [
  "I want clarity about my career",
  "I am confused about my life direction",
  "I want to improve my relationship",
  "I want financial growth insight",
  "I want to check my name vibration score",
  "I want my life path number analysis",
  "Just curious about my numerology",
];

interface LeadPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadPopup = ({ open, onOpenChange }: LeadPopupProps) => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    why: "",
  });
  const [insightLoading, setInsightLoading] = useState(false);
  const [insight, setInsight] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.dob || !form.why) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }

    try {
      // Submit to Pabbly webhook
      const response = await fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZmMDYzNzA0M2M1MjZiNTUzMzUxMzQi_pc", {
        method: "POST",
        body: JSON.stringify({
          ...form,
          source: "Lead Popup",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error("Failed to submit");

      toast({ title: "🎉 Request Submitted!", description: "Generating your personalized insight..." });

      // Generate AI insight
      setInsightLoading(true);
      try {
        const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
        const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
        const aiRes = await fetch(`${SUPABASE_URL}/functions/v1/numerology-insight`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${SUPABASE_KEY}`,
          },
          body: JSON.stringify({
            fullName: form.name,
            dob: form.dob,
            reason: form.why,
          }),
        });

        if (aiRes.ok) {
          const data = await aiRes.json();
          setInsight(data.insight);
        } else {
          setInsight(null);
          toast({
            title: "Insight generation delayed",
            description: "Your insight is being prepared. Please check back shortly.",
          });
        }
      } catch {
        setInsight(null);
      } finally {
        setInsightLoading(false);
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission failed",
        description: "Please try again later or contact support.",
        variant: "destructive",
      });
    }
  };

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) {
      setInsight(null);
      setInsightLoading(false);
      setForm({ name: "", phone: "", email: "", dob: "", why: "" });
    }
    onOpenChange(isOpen);
  };

  // Insight result view
  if (insight) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-lg border-primary/30 bg-card max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-center gradient-text font-serif flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              Your Personalized Insight
            </DialogTitle>
          </DialogHeader>
          <div className="prose prose-invert prose-sm max-w-none mt-2 text-foreground/90 leading-relaxed animate-fade-in">
            <div dangerouslySetInnerHTML={{ __html: formatMarkdown(insight) }} />
          </div>
          <Button
            onClick={() => handleClose(false)}
            className="w-full mt-4 glow-button bg-primary hover:bg-accent text-primary-foreground font-semibold"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    );
  }

  // Loading view
  if (insightLoading) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md border-primary/30 bg-card">
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <Loader2 className="w-10 h-10 text-accent animate-spin" />
            <p className="text-foreground/80 text-lg font-serif animate-pulse">
              Generating your insight...
            </p>
            <p className="text-muted-foreground text-sm text-center">
              Our AI is crafting personalized numerology guidance just for you
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // Form view
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md border-primary/30 bg-card">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-center gradient-text font-serif">
            Get Your Free Numerology Report
          </DialogTitle>
          <p className="text-center text-muted-foreground text-sm mt-1">
            Fill in your details and unlock powerful insights
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-muted border-border" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone No.</Label>
            <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="bg-muted border-border" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-muted border-border" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input id="dob" type="date" value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })} className="bg-muted border-border" />
          </div>
          <div className="space-y-1.5">
            <Label>Why do you need this report?</Label>
            <Select value={form.why} onValueChange={(v) => setForm({ ...form, why: v })}>
              <SelectTrigger className="bg-muted border-border">
                <SelectValue placeholder="Select a reason" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                {WHY_OPTIONS.map((opt) => (
                  <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full glow-button bg-primary hover:bg-accent text-primary-foreground font-semibold text-base py-5">
            <Sparkles className="w-4 h-4 mr-2" />
            Get My Free Numerology Report
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// Simple markdown to HTML converter
function formatMarkdown(md: string): string {
  return md
    .replace(/### (.*)/g, '<h3 class="text-accent font-serif text-lg font-semibold mt-4 mb-2">$1</h3>')
    .replace(/## (.*)/g, '<h2 class="text-accent font-serif text-xl font-bold mt-5 mb-2">$1</h2>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
    .replace(/^\- (.*)/gm, '<li class="ml-4 list-disc text-foreground/80">$1</li>')
    .replace(/^\d+\. (.*)/gm, '<li class="ml-4 list-decimal text-foreground/80">$1</li>')
    .replace(/\n\n/g, '<br/><br/>')
    .replace(/\n/g, '<br/>');
}

export default LeadPopup;
