import { Label } from "@/components/ui/label";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import AuthCard from "@/components/auth/auth-card";

import AuthHeader from "@/components/auth/auth-header";

import AuthFooter from "@/components/auth/auth-footer";

export default function SignupPage() {
  return (
    <AuthCard>
      <AuthHeader
        title="Create Account"
        description="Start building your personal reading library."
      />

      <form className="space-y-5">
        <div className="space-y-2">
          <Label>Full Name</Label>

          <Input placeholder="John Doe" />
        </div>

        <div className="space-y-2">
          <Label>Email</Label>

          <Input type="email" placeholder="john@example.com" />
        </div>

        <div className="space-y-2">
          <Label>Password</Label>

          <Input type="password" placeholder="••••••••" />
        </div>

        <Button className="w-full">Create Account</Button>
      </form>

      <AuthFooter
        text="Already have an account?"
        linkText="Login"
        href="/login"
      />
    </AuthCard>
  );
}
