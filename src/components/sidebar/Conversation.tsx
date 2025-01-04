import React from 'react'
import useConversation from '../../zustand/useConversation';

interface ConversationProps {
    conversation: any;
    lastIdx: boolean;
    emoji: string;
  }
  
const Conversation: React.FC<ConversationProps> = ({ conversation, lastIdx, emoji }) => {
    const {selectedConversation, setSelectedConversation} = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;
    return (
        <>
            <button className={`flex gap-2 items-center hover:bg-[#186b8c] rounded p-2 py-1 cursor-pointer ${isSelected ? 'bg-sky-500' : ''} `} onClick={() => setSelectedConversation(conversation)}>
                <div className="avatar online"> {/* the status of the user will be dynamic (online or offline) */}
                    <div className="w-12 rounded-full">
                        <img src={conversation.profilePic} alt='pehoto'/>
                    </div>
                </div>
                <div className='flex flex-col flex-1 '>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                        <span className='text-xl'>{emoji}</span>
                    </div>
                </div>
            </button>
            <div className='divider my-0 py-0 h-1'>
            </div>
            {!lastIdx && <div className='divider my-0 py-0 h-1' />}
        </>

    )
}

export default Conversation