import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type RegistrationPayload = {
  fullName: string;
  email: string;
  role: string;
  message?: string;
};

export const JoinButton = ({ children = "Join Our Team", className = "" }: { children?: React.ReactNode; className?: string }) => {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<RegistrationPayload>({ fullName: "", email: "", role: "Player", message: "" });
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSuccess("Thanks! We'll be in touch soon.");
      setForm({ fullName: "", email: "", role: "Player", message: "" });
    } catch (err) {
      setError("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Button className={`btn-gaming ${className}`} onClick={() => setOpen(true)}>{children}</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Join HIGHEND</DialogTitle>
          </DialogHeader>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" placeholder="Player / Coach / Creator / Staff" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message (optional)</Label>
              <Input id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            {success && <div className="text-green-600 text-sm">{success}</div>}
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" variant="secondary" onClick={() => setOpen(false)} disabled={submitting}>Cancel</Button>
              <Button type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Submit"}</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default JoinButton;


