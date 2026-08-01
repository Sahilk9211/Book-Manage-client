"use client";
import Navbar from "@/components/common/navbar";
import Container from "@/components/common/container";

import { useEffect, useState } from "react";
import { getMe } from "@/services/auth.service";

export default function DashboardLayout({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getMe();

        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Navbar userData={user} />

      <main className="min-h-[calc(100vh-64px)] bg-background py-8">
        <Container>{children}</Container>
      </main>
    </>
  );
}
