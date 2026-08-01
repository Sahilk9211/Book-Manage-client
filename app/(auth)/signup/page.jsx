"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { signup } from "@/services/auth.service";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import AuthCard from "@/components/auth/auth-card";
import AuthHeader from "@/components/auth/auth-header";
import AuthFooter from "@/components/auth/auth-footer";

export default function SignupPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
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
    debugger;
    e.preventDefault();

    try {
      setLoading(true);

      const response = await signup(formData);

      console.log(response);

      router.push("/dashboard");
    } catch (error) {
      console.error(error.response?.data?.message);

      alert(error.response?.data?.message || "Signup Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard>
      <AuthHeader
        title="Create Account"
        description="Start building your personal reading library."
      />

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label>Full Name</Label>

          <Input
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

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
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Creating..." : "Create Account"}
        </Button>
      </form>

      <AuthFooter
        text="Already have an account?"
        linkText="Login"
        href="/login"
      />
    </AuthCard>
  );
}
