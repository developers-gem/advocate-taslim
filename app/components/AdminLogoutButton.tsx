"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function AdminLogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      });

      router.push("/admin-login");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button
  onClick={handleLogout}
  className="w-full px-4 py-3 rounded-lg hover:bg-red-500 transition-all duration-200 text-white flex items-center gap-3"
>
  <LogOut size={18} />
  <span>Logout</span>
</button>
  );
}