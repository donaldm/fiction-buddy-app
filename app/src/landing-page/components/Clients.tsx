export default function TestAppPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Side Nav */}
      <div className="w-64 bg-gray-200 text-black dark:bg-gray-950 dark:text-gray-200">
        <div className="px-4 py-6">
          <h2 className="text-xl font-semibold">My App</h2>
        </div>
        <ul className="space-y-4 px-4">
          <li>
            <a href="#" className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white">
              Characters
            </a>
          </li>
          {/* Add more nav items as needed */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Hello World</h2>
        </div>
      </div>
    </div>
  );
}
