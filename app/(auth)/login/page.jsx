import Link from "next/link";

import { Label } from "@/components/ui/label";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import AuthCard from "@/components/auth/auth-card";

import AuthHeader from "@/components/auth/auth-header";

import AuthFooter from "@/components/auth/auth-footer";

export default function LoginPage() {
  return (
    <AuthCard>
      <AuthHeader
        title="Welcome Back"
        description="Sign in to continue managing your books."
      />

      <form className="space-y-5">
        <div className="space-y-2">
          <Label>Email</Label>

          <Input type="email" placeholder="john@example.com" />
        </div>

        <div className="space-y-2">
          <Label>Password</Label>

          <Input type="password" placeholder="••••••••" />
        </div>

        <Button className="w-full">Login</Button>
      </form>

      <AuthFooter
        text="Don't have an account?"
        linkText="Create one"
        href="/signup"
      />
    </AuthCard>
  );
}
