'use client';

import { NoteEditor } from '@/components/editor/note-editor';
import { useNoteStore } from '@/store/note-store';
import { useEffect } from 'react';

export default function NotePage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const setCurrentNote = useNoteStore(state => state.setCurrentNote);

  useEffect(() => {
    if (params.id === 'new') {
      setCurrentNote({ title: '', content: '' });
    } else {
      // TODO: Fetch note by ID
      // For now, just set a sample note
      setCurrentNote({
        id: params.id,
        title: 'Sample Note',
        content: 'This is a sample note content.'
      });
    }
  }, [params.id, setCurrentNote]);

  return (
    <div className="h-full">
      <NoteEditor />
    </div>
  );
}