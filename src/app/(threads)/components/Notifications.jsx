'use client'
import { useEffect, useState } from 'react';
import { FaHeart, FaComment, FaUserPlus, FaCommentMedical } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@nextui-org/react";
import CommentModal from "./CommentModal";
import { useNoticationStore } from "@/store/Global";
import { useDeleteMutation, useGetNotification } from "@/api/notification";
import { GiBanknote } from 'react-icons/gi';
import { BsFillHouseFill } from 'react-icons/bs';
import moment from 'moment/moment';
import socket from '@/lib/socket';
import { 
  FiBell,
} from 'react-icons/fi';
import { MdCancel } from 'react-icons/md';
import { notifier } from '@/lib/utils';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';


export default function Notifications() {
  const [isModalOpen, setIsModalOpen] = useState(false);
// const {notifications} =  useNoticationStore()
const [notifications, setNotifications] = useState([]);
const {data, isFetching}=useGetNotification()
const {mutateAsync}=useDeleteMutation()

  // const getIcon = (type) => {
  //   if (type === "like") return <FaHeart className="text-red-500" />;
  //   if (type === "comment") return <FaComment className="text-blue-500" />;
  //   if (type === "follow") return <FaUserPlus className="text-green-500" />;
  // };

  console.log('notification',data?.data?.notifications)

  useEffect(() => {
        setNotifications(data?.data?.notifications);
        socket.on("newNotification", (notification) => {
          setNotifications((prev) => [notification, ...prev]);
        });

    return () => {
      socket.off("newNotification");
    };
  }, [data]);

  const handleDelete = async(id) => {
try {
await mutateAsync(id);
  notifier({
        message:
          'Delete successfully!',
        type: "success",
      });
} catch (error) {
  notifier({
        message:
          error.response?.data?.message ?? error.response?.data ?? "Error deleting notfication!",
        type: "error",
      });
}
  }

  return (
    <div className="p-4">
      <div className="flex items-center gap-4 justify-between">
      <h2 className="text-lg font-semibold mb-3">Notifications</h2>
<Button  onPress={() => setIsModalOpen(true)} className="p-2 hover:bg-blue-100 bg-transparent rounded-full" ><FaCommentMedical size={20} className="text-gray-500" /></Button>
      </div>
<div className="h-[80vh] overflow-auto">

{isFetching?'': <div className='mt-4'>
  {notifications?.length>0 ? <AnimatePresence>
    {notifications?.map((notif) => (
        <motion.div  layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }} key={notif._id} className="flex relative group space-x-3 border-b pb-3 mb-3">
            <div onClick={()=>handleDelete(notif._id)} className="absolute right-1 text-red-500 cursor-pointer hidden group-hover:block">
                      <MdCancel size={16} />
                        </div>
          <div className={`flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full ${
                      notif.type === "new-investment" ? "bg-blue-100 text-blue-600" : "bg-yellow-100 text-yellow-600"
                    }`}>
                      {notif.type === "new-investment"? <GiBanknote size="18" /> : <BsFillHouseFill size="18" />}
                    </div>

          {/* Notification Text */}
          <div className="flex-1">
            <p className="text-gray-900 line-clamp-1">{notif.title}</p>
            <span className="text-sm text-gray-500 line-clamp-4">
            {notif.message} by {notif.sender.firstName} {notif.sender.lastName}
            </span>
            <div className='flex items-center justify-end'>
            <span className="text-xs text-gray-500">{moment(notif.createdAt).fromNow()}</span>
            </div>
          </div>
        </motion.div>
      ))}
  </AnimatePresence> :(
        // Empty state
        <div className="p-12 text-center">
          <div className="mx-auto text-gray-400 flex items-center justify-center">
            <FiBell size={30} />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">No notifications</h3>
          <p className="mt-2 text-gray-500 text-sm">We&apos;ll notify you when something new arrives.</p>
        </div>
      )}

      {/* Show More Button */}
      {/* <button className="w-full text-blue-500 hover:underline text-sm mt-2">
        Show more
      </button> */}
</div> }
</div>

<CommentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
