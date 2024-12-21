import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MdViewerProps {
  content: string;
}

export default function MdViewer({ content }: MdViewerProps) {
  // console.log(content)

  return (
    <div className="min-h-screen bg-white text-black">
      <ReactMarkdown
        components={{
          h1: ({ ...props }) => (
            <h1 className="my-[0.83em] text-2xl font-bold" {...props} />
          ),
          h2: ({ ...props }) => (
            <h2 className="my-[0.83em] text-xl font-bold" {...props} />
          ),
          h3: ({ ...props }) => (
            <h3 className="my-[0.83em] text-lg font-bold" {...props} />
          ),
          h4: ({ ...props }) => (
            <h4 className="my-[0.83em] text-base font-bold" {...props} />
          ),
          h5: ({ ...props }) => (
            <h5 className="my-[0.67em] text-sm font-bold" {...props} />
          ),
          h6: ({ ...props }) => (
            <h6 className="my-[0.67em] text-xs font-bold" {...props} />
          ),
          p: ({ ...props }) => <p className="my-[1em] text-base" {...props} />,
          ol: ({ ...props }) => (
            <ol className="list-inside list-decimal" {...props} />
          ),
          ul: ({ ...props }) => (
            <ul className="list-item list-disc" {...props} />
          ),
          blockquote: ({ ...props }) => (
            <blockquote
              className="border-l-4 border-gray-500 pl-4 italic"
              {...props}
            />
          ),
          a: ({ ...props }) => (
            <a className="text-blue-500 hover:underline" {...props} />
          ),
        }}
        remarkPlugins={[remarkGfm]}
        className="mb-8"
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
