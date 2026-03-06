import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
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
    why: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.why) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    toast({ title: "🎉 Request Submitted!", description: "Your free numerology report is on the way!" });
    onOpenChange(false);
    setForm({ name: "", phone: "", email: "", why: "", color: "#4B2E83" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
          <div className="space-y-1.5">
            <Label htmlFor="color">Select Your Favourite Color</Label>
            <div className="flex items-center gap-3">
              <input type="color" id="color" value={form.color} onChange={(e) => setForm({ ...form, color: e.target.value })} className="w-10 h-10 rounded-lg cursor-pointer border border-border bg-transparent" />
              <span className="text-sm text-muted-foreground">{form.color}</span>
            </div>
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

export default LeadPopup;
