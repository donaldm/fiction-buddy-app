import { type Task } from "wasp/entities";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { TiDelete } from "react-icons/ti";
import { cn } from "../client/cn";

import ContextMenu from "./components/ContextMenu";

export default function TestAppPage() {
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
  });

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ visible: true, x: e.pageX, y: e.pageY });
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setContextMenu({ ...contextMenu, visible: false });
  };

  return (
    <div className="flex min-h-screen" onContextMenu={handleContextMenu}>
      {/* Side Nav */}
      <div className="w-64 bg-gray:200 bg-gray-50 text-black dark:bg-gray-800 dark:text-white">
        <div className="px-4 py-6">
          <h2 className="text-xl font-semibold">My App</h2>
        </div>
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="pl-4 block w-full dark:text-white hover:bg-blue-200 dark:hover:bg-blue-800"
            >
              Characters
            </a>
          </li>
          {/* Add more nav items as needed */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 dark:bg-gray-750">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
            Hello World
          </h2>
        </div>
      </div>

      {/* Context Menu */}
      <ContextMenu
        visible={contextMenu.visible}
        x={contextMenu.x}
        y={contextMenu.y}
        onClose={() => setContextMenu({ ...contextMenu, visible: false })}
      >
        <button
          onClick={toggleDarkMode}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          Toggle Dark Mode
        </button>
      </ContextMenu>
    </div>
  );
}
