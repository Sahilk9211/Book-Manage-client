"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "@/services/auth.service";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import AuthCard from "@/components/auth/auth-card";
import AuthHeader from "@/components/auth/auth-header";
import AuthFooter from "@/components/auth/auth-footer";

export default function LoginPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await login(formData);

      console.log(response);

      router.push("/dashboard");
    } catch (error) {
      console.error(error.response?.data?.message);
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard>
      <AuthHeader
        title="Welcome Back"
        description="Sign in to continue managing your books."
      />

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label>Email</Label>

          <Input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label>Password</Label>

          <Input
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>

      <AuthFooter
        text="Don't have an account?"
        linkText="Create one"
        href="/signup"
      />
    </AuthCard>
  );
}
