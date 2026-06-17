"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface Props {
  content: string;
  onChange: (value: string) => void;
}

export default function TiptapEditor({
  content,
  onChange,
}: Props) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className="border rounded-lg overflow-hidden">
      
      <div className="flex flex-wrap gap-2 p-3 border-b bg-gray-50">

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleBold().run()
          }
          className="px-3 py-1 border rounded"
        >
          Bold
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleItalic().run()
          }
          className="px-3 py-1 border rounded"
        >
          Italic
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleBulletList().run()
          }
          className="px-3 py-1 border rounded"
        >
          List
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({
              level: 2,
            }).run()
          }
          className="px-3 py-1 border rounded"
        >
          H2
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({
              level: 3,
            }).run()
          }
          className="px-3 py-1 border rounded"
        >
          H3
        </button>

      </div>

      <EditorContent
        editor={editor}
        className="min-h-[400px] p-4"
      />

    </div>
  );
}