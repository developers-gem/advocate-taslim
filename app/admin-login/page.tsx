"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
User,
Lock,
Eye,
EyeOff,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] =
  useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(
        "/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      if (!res.ok) {
        throw new Error();
      }

      router.push("/admin");
      router.refresh();
    } catch {
      alert("Invalid Login");
    } finally {
      setLoading(false);
    }
  };

  return (
<div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-width-7xl max-w-md bg-white rounded-2xl shadow-2xl p-8">

        {/* Logo */}
        <div className="text-center mb-8">
          <img
            src="/images/icon.png"
            alt="Advocate Taslim"
            className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-[#223a8c]"
          />

          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            Admin Login
          </h1>

          <p className="text-gray-500 mt-2">
            Advocate Taslim CMS
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Username */}
          <div className="relative">
            <User
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              className="w-full border border-gray-300 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-[#223a8c]"
            />
          </div>

          {/* Password */}
        <div>
  <label className="block text-sm font-medium mb-2 text-gray-700">
    Password
  </label>

  <div className="relative">
    <Lock
      size={18}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    />

    <input
      type={showPassword ? "text" : "password"}
      placeholder="Enter password"
      value={password}
      onChange={(e) =>
        setPassword(e.target.value)
      }
      className="w-full border border-gray-300 rounded-xl py-3 pl-11 pr-12 focus:outline-none focus:ring-2 focus:ring-[#223a8c]"
    />

    <button
      type="button"
      onClick={() =>
        setShowPassword(!showPassword)
      }
      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
    >
      {showPassword ? (
        <EyeOff size={18} />
      ) : (
        <Eye size={18} />
      )}
    </button>
  </div>
</div>

          <button
  type="submit"
  disabled={loading}
  className="w-full bg-[#223a8c] hover:bg-[#1a2f75] text-white py-3.5 rounded-xl font-semibold transition-all duration-200"
>
  {loading ? "Signing In..." : "Sign In"}
</button>
        </form>

      </div>

    </div>
  );
}