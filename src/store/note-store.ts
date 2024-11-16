import { create } from 'zustand';

export interface Note {
  id?: string;
  title: string;
  content: string;
}

interface NoteStore {
  currentNote: Note | null;
  setCurrentNote: (note: Note | null) => void;
  updateTitle: (title: string) => void;
  updateContent: (content: string) => void;
  saveNote: () => Promise<void>;
}

export const useNoteStore = create<NoteStore>((set, get) => ({
  currentNote: null,
  
  setCurrentNote: (note) => {
    set({ currentNote: note });
  },
  
  updateTitle: (title) => {
    set((state) => ({
      currentNote: state.currentNote 
        ? { ...state.currentNote, title }
        : { title, content: '' }
    }));
  },
  
  updateContent: (content) => {
    set((state) => ({
      currentNote: state.currentNote 
        ? { ...state.currentNote, content }
        : { title: '', content }
    }));
  },
  
  saveNote: async () => {
    const { currentNote } = get();
    if (!currentNote) return;
    
    // TODO: Implement API call to save note
    console.log('Saving note:', currentNote);
    
    // For now, just simulate an API call
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}));