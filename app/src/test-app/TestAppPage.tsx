import { type Task } from 'wasp/entities';
import { useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { TiDelete } from 'react-icons/ti';
import { cn } from '../client/cn';

export default function TestAppPage() {
  return (
    <div className="flex min-h-screen">
      {/* Side Nav */}
      <div className="w-64 bg-gray:200 bg-gray-50 text-black dark:bg-gray-800 dark:text-white">
        <div className="px-4 py-6">
          <h2 className="text-xl font-semibold">My App</h2>
        </div>
        <ul className="space-y-4 px-4">
          <li>
            <a href="#" className="test-gray-800 dark:text-gray-300 hover:text-white">
              Characters
            </a>
          </li>
          {/* Add more nav items as needed */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 dark:bg-gray-750">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Hello World</h2>
        </div>
      </div>
    </div>
  );
}
