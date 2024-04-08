import {Hint} from "@/components/hint"
import { Avatar ,
    AvatarFallback,
    AvatarImage

} from "@/components/ui/avatar"
 

interface UserAvtarProps{
     src?:string;
     name?:string;
     fallback?:string;
     boardColor?:string;
}

export const UserAvatar=({
  src,
  name,
  fallback,
  boardColor

}:UserAvtarProps)=>{ 
  return <Hint label={name || "Teammate"} side="bottom" sideOffset={80}>
    <Avatar className="h-8 w-8 border-2" style={{borderColor:boardColor}} >
          <AvatarImage  src={src} />
        <AvatarFallback className="text-xs font-semibold">
            {fallback}

        </AvatarFallback>
    </Avatar>

  </Hint>
}