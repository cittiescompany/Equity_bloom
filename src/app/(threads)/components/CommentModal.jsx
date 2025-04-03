'use client'
import React, { useState, useRef } from 'react';
import { Modal, Button, Input, ModalHeader, ModalBody, ModalFooter, ModalContent } from '@nextui-org/react';
import EmojiPicker from 'emoji-picker-react';
import { useNoticationStore } from '@/store/Global';
import { useAuth } from '@/hooks/use-auth';

const CommentModal = ({ isOpen, onClose }) => {
   const { user } = useAuth();
  const [comment, setComment] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const textareaRef = useRef(null);
  const {notifications,addNotification} =  useNoticationStore()

  // Handle emoji selection
  const handleEmojiClick = (emojiObject) => {
    const emoji = emojiObject.emoji;
    const textarea = textareaRef.current;

    // Get the current cursor position
    const cursorPosition = textarea.selectionStart;

    // Insert the emoji at the cursor position
    const newComment =
      comment.substring(0, cursorPosition) + emoji + comment.substring(cursorPosition);

    // Update the comment state
    setComment(newComment);

    // Move the cursor to the position after the inserted emoji
    setTimeout(() => {
      textarea.selectionStart = cursorPosition + emoji.length;
      textarea.selectionEnd = cursorPosition + emoji.length;
    }, 0);
  };

  const handleAddNotification=() => {
    // console.log('Comment:', comment);
    // - 1000 * 60 * 10
    addNotification({ id: crypto.randomUUID(), text: `${user?.lastName} commented on your post`, type: "comment", time: new Date(Date.now()  - 1000 * 60 * 0.5), count: 646 },)
    // console.log(notifications);
    
    onClose();

  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      aria-labelledby="comment-modal"
     size='lg'
    >
    <ModalContent>
    <ModalHeader>
        <h2 className="text-gray-400 font-medium">Add a Comment</h2>
      </ModalHeader>
      <ModalBody>
        <div>
          <textarea
            ref={textareaRef}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:font-normal"
            rows="4"
            placeholder="Write your comment..."
          />
        </div>
      </ModalBody>
      <ModalFooter>
      <button
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="p-2 hover:bg-blue-100 rounded-full"
          >
            {/* Heroicon: Emoji Icon (FaceSmileIcon) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
          </button>
          {showEmojiPicker && (
            <div className="absolute bottom-16 right-0 z-[9999]">
              <EmojiPicker
                onEmojiClick={handleEmojiClick}
                width="100%"
                height="350px"
              />
            </div>
          )}
        <Button color='primary' auto onPress={handleAddNotification} className='rounded-full px-8'>
          Post
        </Button>
      </ModalFooter>
    </ModalContent>
    </Modal>
  );
};

export default CommentModal;