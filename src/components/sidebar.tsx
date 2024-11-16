import { Book, Calendar, Search, Settings, Plus } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className = "" }: SidebarProps) {
  return (
    <div className={`flex flex-col p-4 ${className}`}>
      {/* Search Bar */}
      <div className="flex items-center space-x-2 px-3 py-2 mb-4 rounded-lg bg-neutral-100 dark:bg-neutral-900">
        <Search className="w-4 h-4 text-neutral-500" />
        <input
          type="text"
          placeholder="Search notes..."
          className="bg-transparent w-full outline-none text-sm"
        />
      </div>

      {/* Quick Actions */}
      <div className="flex items-center space-x-2 mb-6">
        <button className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-black">
          <Plus className="w-4 h-4" />
          <span className="text-sm">New Note</span>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-1">
        <Link
          href="/daily"
          className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900"
        >
          <Calendar className="w-4 h-4" />
          <span>Daily Notes</span>
        </Link>
        <Link
          href="/notes"
          className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900"
        >
          <Book className="w-4 h-4" />
          <span>All Notes</span>
        </Link>
      </nav>

      {/* Settings at bottom */}
      <div className="mt-auto">
        <Link
          href="/settings"
          className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900"
        >
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
}