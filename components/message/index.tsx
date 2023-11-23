'use client'

import { SiPerl } from 'react-icons/si'
import { HiOutlineUser } from 'react-icons/hi'
import cs from 'clsx'
import Markdown from '../markdown'

export interface MessageProps {
  message: ChatMessage
}

const Message = (props: MessageProps) => {
  const { role, content } = props.message
  const isUser = role === 'user'

  return (
    <div
      className={`group w-full text-gray-800 dark:text-gray-100 border-b border-black/10 bg-white`}
    >
      <div className="text-sm gap-4 md:gap-6 flex lg:px-4 w-full p-4">
        <div
          className={cs(
            `relative h-7 w-7 rounded-sm text-white flex items-center justify-center text-opacity-100r`,
            isUser ? 'bg-blue-gray-500' : 'bg-black'
          )}
        >
          {isUser ? <HiOutlineUser className="h-5 w-5" /> : <SiPerl className="h-5 w-5" />}
        </div>
        <div className="relative flex-1 min-h-20 markdown break-words overflow-hidden">
          <Markdown content={content} />
        </div>
      </div>
    </div>
  )
}

export default Message
