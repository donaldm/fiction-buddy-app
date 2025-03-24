import { useEffect, useRef } from 'react';

type ContextMenuProps = {
  x: number;
  y: number;
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function ContextMenu({ x, y, visible, onClose, children }: ContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div
      ref={menuRef}
      style={{ top: y, left: x }}
      className="absolute z-50 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-md w-48"
    >
      {children}
    </div>
  );
}
