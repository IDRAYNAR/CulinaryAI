'use client'

import React, { useContext } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemSuffix,
  IconButton
} from '@material-tailwind/react'

import cs from 'clsx'

import ChatContext from '@/contexts/chatContext'

const Sidebar = () => {
  const {
    currentChat,
    chatList,
    DefaultPersonas,
    onDeleteChat,
    onChangeChat,
    onCreateChat,
    onOpenPersonaPanel
  } = useContext(ChatContext)
  return (
    <>
      <Card className="h-full flex-1 items-start rounded-none shadow-xl  border-r  border-gray-300 shadow-blue-gray-900">
        <List className="w-full overflow-auto gap-3">
          <ListItem
            className="border border-dashed border-black rounded-sm py-2 items-center hover:bg-white active:bg-white hover:border-gray-500"
            onClick={() => {
              onCreateChat?.(DefaultPersonas[0])
            }}
          >
            <Typography className="text-center flex-1 text-sm  text-black">New Chat</Typography>
          </ListItem>
          <hr />

          {chatList.map((chat) => (
            <ListItem
              key={chat.id}
              className={cs(
                '!overscroll-none group py-2  bg-gray-100  hover:text-black border-2 border-gray-100 hover:border-black',
                currentChat?.id === chat.id && ' bg-blue-gray-400 text-white'
              )}
              onClick={() => onChangeChat?.(chat)}
            >
              {chat.persona?.name || ''}

              <ListItemSuffix>
                <IconButton
                  variant="text"
                  className={cs(
                    'w-6 h-6 text-blue-gray-500 group-hover:text-blue-gray-500',
                    currentChat?.id === chat.id && 'text-white'
                  )}
                  onMouseDownCapture={(e) => e.stopPropagation()}
                  onClickCapture={(e) => {
                    e.stopPropagation()
                    onDeleteChat?.(chat)
                  }}
                >
                  <AiOutlineCloseCircle className="h-4 w-4" />
                </IconButton>
              </ListItemSuffix>
            </ListItem>
          ))}
        </List>
        <List className="w-full mt-auto">
          <hr />
          <ListItem
            className="border border-black rounded-sm py-2 items-center hover:bg-white hover:border-gray-500 "
            onClick={() => onOpenPersonaPanel?.('chat')}
          >
            <Typography className="text-center flex-1 text-sm  text-black">
              Chefs List
            </Typography>
          </ListItem>
        </List>
      </Card>
    </>
  )
}

export default Sidebar
