import Placeholder from "@tiptap/extension-placeholder";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Typography from "@tiptap/extension-typography";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Toolbar } from "./Toolbar";

export type EditorProps = {
  value?: string;
  placeholder?: string;
};

export const Editor = ({ value, placeholder }: EditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Typography,
      TaskList,
      TaskItem,
      Placeholder.configure({
        placeholder,
      }),
    ],
    content: value,
  });

  if (editor == null) return null;
  return (
    <div className="relative w-full border-2">
      <div className="sticky top-0 bg-white">
        <Toolbar editor={editor} />
      </div>
      <div className="border-2 border-black">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
