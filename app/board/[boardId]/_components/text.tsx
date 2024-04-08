import { cn, colorToCss } from "@/lib/utils";
import { Kalam } from "next/font/google";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { TextLayer } from "@/types/canva";
import { useMutation } from "@/liveblocks.config";

const font= Kalam({
     subsets:["latin"],
     weight:["400"],
})

const calculateFontSize= (width:number, height:number )=>{
     const maxFontSize=96;
     const scaleFactor=0.5;
     const fontSizeBaseOnHeight= height*scaleFactor;
     const fontSizeBasedOnWidth= width*scaleFactor;
   return  Math.min(fontSizeBaseOnHeight,fontSizeBasedOnWidth,maxFontSize);
}

interface TextProps{
     id:string;
     layer:TextLayer;
     onPointerDown: (e:React.PointerEvent, id:string)=>void;
     selectionColor?:string;
}

export const Text =({
id,
layer,
onPointerDown,
selectionColor,
}:TextProps)=>{
  const {x,y,width,height,fill,value } = layer;

const updateValue= useMutation((
    {storage}, 
    newValue:string
)=>{
      const livelayers= storage.get("layers" )
      livelayers.get(id)?.set("value",newValue);
},[])


const handleContentChange=(e:ContentEditableEvent)=>{
updateValue(e.target.value);
}
  return (
    <foreignObject 
    x={x}
    y={y}
    width={width}
    height={height}
    onPointerDown={(e)=>onPointerDown(e,id)}
    style={{
        outline:selectionColor?`1px solid ${selectionColor}`:"none"
      ,
      fontSize:calculateFontSize(width,height)
    }}
    >
        <ContentEditable html={value ||"Text"}
         onChange={handleContentChange}
          className={
             cn("h-full w-full flex items-center justify-center text-center drop-shadow-md outline-none",
                font.className
             )
          }
          style={{color:fill? colorToCss(fill) :"#000"
          }}
        />
    </foreignObject>
  )
}