import { type Task } from "wasp/entities";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { TiDelete } from "react-icons/ti";
import { cn } from "../client/cn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown, faUserAstronaut, faMountainSun } from '@fortawesome/free-solid-svg-icons';

import ContextMenu from "./components/ContextMenu";

export default function TestAppPage() {
  const [characterContextMenu, setCharacterContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
  });

  const handleCharacterContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setCharacterContextMenu({ visible: true, x: e.pageX, y: e.pageY });
  };

  const addCharacter = () => {
    setCharacterContextMenu({ ...characterContextMenu, visible: false });
  };

  return (
    <div className="flex min-h-screen">
      {/* Side Nav */}
      <div className="w-64 bg-gray:200 bg-gray-50 text-black dark:bg-gray-800 dark:text-white">
        <div className="px-4 py-6">
          <h2 className="text-xl font-semibold">Project</h2>
        </div>
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="pl-4 block w-full dark:text-white hover:bg-blue-200 dark:hover:bg-blue-800"
              onContextMenu={handleCharacterContextMenu}
            >
            <FontAwesomeIcon icon={faAngleRight}/> <FontAwesomeIcon icon={faUserAstronaut} className="w-4 h-4 px-2"/> Characters
            </a>
          </li>
          <li>
            <a
              href="#"
              className="pl-4 block w-full dark:text-white hover:bg-blue-200 dark:hover:bg-blue-800"
            >
            <FontAwesomeIcon icon={faAngleRight}/> <FontAwesomeIcon icon={faMountainSun} className="w-4 h-4 px-2"/> Scenes
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

      {/* Character Context Menu */}
      <ContextMenu
        visible={characterContextMenu.visible}
        x={characterContextMenu.x}
        y={characterContextMenu.y}
        onClose={() => setCharacterContextMenu({ ...characterContextMenu, visible: false })}
      >
        <button
          onClick={addCharacter}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          Add Character
        </button>
      </ContextMenu>
    </div>
  );
}
