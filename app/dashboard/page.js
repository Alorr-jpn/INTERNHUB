"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiHome, FiUser, FiSettings, FiLogOut, FiMessageCircle } from "react-icons/fi";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: "Feed", icon: <FiHome />, href: "/dashboard" },
    { name: "Profile", icon: <FiUser />, href: "/dashboard/profile" },
    { name: "Settings", icon: <FiSettings />, href: "/dashboard/settings" },
    { name: "Chat", icon: <FiMessageCircle />, href: "/dashboard/chat" },
    { name: "Logout", icon: <FiLogOut />, href: "/logout" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top bar */}
      <header className="flex items-center bg-white shadow px-4 py-3">
        <button
          className="text-2xl mr-4 md:hidden"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <FiMenu />
        </button>
        <h1 className="text-xl font-bold">Dashboard</h1>
      </header>

      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:shadow-none`}
      >
        <div className="flex items-center justify-between px-4 py-3 md:hidden">
          <span className="text-lg font-bold">Menu</span>
          <button
            className="text-2xl"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <FiX />
          </button>
        </div>
        <ul className="mt-8 space-y-2 px-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center px-3 py-2 rounded hover:bg-blue-100 text-gray-700 transition"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="text-xl mr-3">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-6 md:ml-64">
        <h2 className="text-2xl font-semibold mb-4">Welcome to your dashboard!</h2>
        <p>This is your feed. Select an option from the sidebar to navigate.</p>
      </main>
    </div>
  );
}