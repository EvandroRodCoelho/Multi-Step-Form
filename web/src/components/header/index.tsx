import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { AiOutlineDelete, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { RxExit } from "react-icons/rx";

import { Link, } from "react-router-dom";
import { useHeader } from "./useHeader";


 export function Header () {
    const {handleDelete,handleLogout} = useHeader();
    return(

        <header  className="w-full flex justify-between  bg-zinc-700 items-center py-4 px-3">
            <div />
            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                <button
                    role="menu"
                    className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
                    aria-label="Menu options"
                >
                <AiOutlineMenu />
                </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="min-w-[220px] mr-3 bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                    sideOffset={5}
                >
            
                <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-zinc-100 data-[highlighted]:text-zinc-800 cursor-pointer">
                        User Information
                        <Link to="/user/dashboard" className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-zinc-800 group-data-[disabled]:text-mauve8">
                            <AiOutlineUser  /> 
                        </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item onClick={handleDelete}  className="group text-[13px] leading-none text-red-500 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-red-400 data-[highlighted]:text-white cursor-pointer">
                                Delete account
                                <div className="ml-auto pl-[20px] text-red-500 group-data-[highlighted]:text-white group-data-[disabled]:text-white">
                                    <AiOutlineDelete  /> 
                                </div>       
                    </DropdownMenu.Item>
                    <DropdownMenu.Item onClick={handleLogout} className="group text-[13px] leading-none text-red-500 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-red-400 data-[highlighted]:text-white cursor-pointer">
                        Exit
                        <div className="ml-auto pl-[20px] text-red-500 group-data-[highlighted]:text-white group-data-[disabled]:text-white">
                            <RxExit  /> 
                        </div>
                    </DropdownMenu.Item>
                        <DropdownMenu.Arrow className="fill-white" />
                        </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                </DropdownMenu.Root>               
         </header>
    );
}