import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MdViewerProps {
    content: string
}

export default function MdViewer({content}: MdViewerProps) {
    // console.log(content)

    return (
        <div className="bg-white min-h-screen text-black">
            <ReactMarkdown
                components={{
                    h1: ({ ...props}) => <h1 className="text-2xl font-bold my-[0.83em]" {...props} />,
                    h2: ({ ...props}) => <h2 className="text-xl font-bold my-[0.83em]" {...props} />,
                    h3: ({ ...props}) => <h3 className="text-lg font-bold my-[0.83em]" {...props} />,
                    h4: ({ ...props}) => <h4 className="text-base font-bold my-[0.83em]" {...props} />,
                    h5: ({ ...props}) => <h5 className="text-sm font-bold my-[0.67em]" {...props} />,
                    h6: ({ ...props}) => <h6 className="text-xs font-bold my-[0.67em]" {...props} />,
                    p: ({ ...props}) => <p className="text-base my-[1em]" {...props} />,
                    ol: ({ ...props}) => <ol className="list-decimal list-inside" {...props} />,
                    ul: ({ ...props}) => <ul className="list-disc list-item" {...props} />,
                    blockquote: ({ ...props }) => (
                        <blockquote className="border-l-4 border-gray-500 pl-4 italic" {...props} />
                    ),
                    a: ({  ...props }) => (
                        <a className="text-blue-500 hover:underline" {...props} />
                    )
                }}
                remarkPlugins={[remarkGfm]}
                className="mb-8"
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}
