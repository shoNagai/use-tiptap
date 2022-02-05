import { Editor } from "@tiptap/react";
import {
  RiBold,
  RiCodeSSlashLine,
  RiH5,
  RiH6,
  RiItalic,
  RiListOrdered,
  RiListUnordered,
  RiParagraph,
  RiStrikethrough,
} from "react-icons/ri";

type ToolbarProps = {
  editor: Editor;
};

export const Toolbar = ({ editor }: ToolbarProps) => {
  return (
    <div className="flex flex-row">
      <div className="flex">
        <div
          className="flex justify-center items-center w-24 h-24 rounded-sm cursor-pointer"
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <RiBold />
        </div>
        <div
          className="flex justify-center items-center w-24 h-24 rounded-sm cursor-pointer"
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <RiItalic />
        </div>
        <div
          className="flex justify-center items-center w-24 h-24 rounded-sm cursor-pointer"
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <RiStrikethrough />
        </div>
        <div
          className="flex justify-center items-center w-24 h-24 rounded-sm cursor-pointer"
          onClick={() => editor.chain().focus().toggleCode().run()}
        >
          <RiCodeSSlashLine />
        </div>
        <div
          className="flex justify-center items-center w-24 h-24 rounded-sm cursor-pointer"
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        >
          <RiH5 />
        </div>
        <div
          className="flex justify-center items-center w-24 h-24 rounded-sm cursor-pointer"
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        >
          <RiH6 />
        </div>
        <div
          className="flex justify-center items-center w-24 h-24 rounded-sm cursor-pointer"
          onClick={() => editor.chain().focus().setParagraph().run()}
        >
          <RiParagraph />
        </div>
        <div
          className="flex justify-center items-center w-24 h-24 rounded-sm cursor-pointer"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <RiListOrdered />
        </div>
        <div
          className="flex justify-center items-center w-24 h-24 rounded-sm cursor-pointer"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <RiListUnordered />
        </div>
      </div>
    </div>
  );
};
