'use client';

import React from 'react';
import { Save } from 'lucide-react';
import { useNoteStore } from '@/store/note-store';

export function NoteEditor() {
  const { 
    currentNote, 
    updateTitle, 
    updateContent, 
    saveNote 
  } = useNoteStore();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateContent(e.target.value);
  };

  const handleSave = async () => {
    await saveNote();
  };

  return (
    <div className="flex flex-col h-full p-4">
      {/* Title input */}
      <div className="mb-4">
        <input
          type="text"
          value={currentNote?.title || ''}
          onChange={handleTitleChange}
          placeholder="Note title..."
          className="w-full px-4 py-2 text-xl font-semibold bg-transparent border-none outline-none"
        />
      </div>

      {/* Toolbar */}
      <div className="flex items-center space-x-2 p-2 border-y border-neutral-200 dark:border-neutral-800">
        <button
          onClick={handleSave}
          className="flex items-center space-x-2 px-3 py-1 rounded bg-neutral-900 text-white dark:bg-white dark:text-black"
        >
          <Save className="w-4 h-4" />
          <span className="text-sm">Save</span>
        </button>
      </div>

      {/* Content editor */}
      <textarea
        value={currentNote?.content || ''}
        onChange={handleContentChange}
        placeholder="Start writing..."
        className="flex-1 p-4 bg-transparent resize-none outline-none font-[family-name:var(--font-geist-mono)]"
      />
    </div>
  );
}