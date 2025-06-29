import React from "react";
import Icon from "./Icon";
import { useSpriteContext } from "../context/spriteContext";
import DraggableBlock from "./DraggableBlock";
export default function Sidebar() {

  // const handleAddBlock = (type) => {
  //   const defaultParams = {
  //     move: [10],
  //     turn: [15],
  //     goto: [0, 0],
  //     say: ["Hello!", 2],
  //     think: ["Hmm...", 2],
  //     repeat: [10],
  //   };

  //   addBlockToSprite(selectedSprite, {
  //     type,
  //     params: defaultParams[type] || [],
  //   });
  // };

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-300 bg-gray-500">

      <div className="font-bold"> {"Events"} </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When this sprite clicked"}
      </div>

      <div className="font-bold mt-4"> {"Motion"} </div>
      <DraggableBlock
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        type="move"
      >
        Move 10 steps
      </DraggableBlock>
      <DraggableBlock
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        type="turn"
      >
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </DraggableBlock>
      <DraggableBlock
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        type="goto"
      >
        {"Go to x: __ y: __"}
      </DraggableBlock>
      <DraggableBlock
        className="flex flex-row flex-wrap bg-green-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        type="repeat"
      >
        {"Repeat animation"}
      </DraggableBlock>

      <div className="font-bold mt-4"> {"Looks"} </div>
      <DraggableBlock
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        type="say"
      >
        {"Say ____ for ____ seconds"}
      </DraggableBlock>
      <DraggableBlock
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        type="think"
      >
        {"Think ____ for ____ seconds"}
      </DraggableBlock>
    </div>
  );
}
