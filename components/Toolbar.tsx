import { Editor } from "@tiptap/react";
import classNames from "classnames";
import { RiBold, RiListOrdered, RiListUnordered } from "react-icons/ri";

type ToolbarProps = {
  editor: Editor;
};

export const Toolbar = ({ editor }: ToolbarProps) => {
  return (
    <div className="flex flex-row">
      <div className="flex">
        <div
          className={classNames(
            "flex justify-center items-center w-24 h-24 rounded-sm cursor-pointer",
            editor.isActive("bold") && "text-white bg-slate-900",
          )}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <RiBold />
        </div>
        <div
          className={classNames(
            "flex justify-center items-center w-24 h-24 rounded-sm cursor-pointer",
            editor.isActive("bulletList") && "text-white bg-slate-900",
          )}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <RiListUnordered />
        </div>
        <div
          className={classNames(
            "flex justify-center items-center w-24 h-24 rounded-sm cursor-pointer",
            editor.isActive("orderedList") && "text-white bg-slate-900",
          )}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <RiListOrdered />
        </div>
      </div>
    </div>
  );
};
