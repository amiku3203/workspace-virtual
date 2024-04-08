"use client";

import { CreateOrganization } from "@clerk/nextjs";
import { Plus } from "lucide-react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Hint } from "@/components/hint";

export const NewButton =()=>{
     return (
          <Dialog>
            <DialogTrigger>
                <div className="aspect-square">
                   <Hint label="Create organization"
                   side="right"
                   align="start"
                   sideOffset={18}
                   >
                   <button className="bg-white/75 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
                        <Plus  className="text-white"></Plus>
                    </button>
                   </Hint>
                   
                </div>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
                <CreateOrganization/>
            </DialogContent>    
          </Dialog>
         
     )
}