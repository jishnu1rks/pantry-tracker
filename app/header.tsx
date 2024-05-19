"use client";

import ModeToggle from "./components/mode-toggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <h1>Pantry Tracker</h1>
      <ModeToggle />
    </header>
  );
}
