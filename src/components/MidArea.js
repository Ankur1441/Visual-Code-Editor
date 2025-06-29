import React from "react";
import Block from "./Block";
import { useSpriteContext } from "../context/spriteContext";
import { useDrop } from "react-dnd";
export default function MidArea() {
  const {
    sprites,
    selectedSprite,
    updateSprite,
    blockAction,
    addBlockToSprite,
    deleteBlockFromSprite,
  } = useSpriteContext();

  const sprite = sprites.find((s) => s.id === selectedSprite);
  const [{ isOver }, dropRef] = useDrop({
    accept: "BLOCK",
    drop: (item) => {
      const defaultParams = {
        move: [10],
        turn: [15],
        goto: [0, 0],
        say: ["Hello!", 2],
        think: ["Hmm...", 2],
        repeat: [10],
      };

      addBlockToSprite(selectedSprite, {
        type: item.type,
        params: defaultParams[item.type] || [],
      });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
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

  const handleParamChange = (blockIndex, paramIndex, value) => {
    if (!sprite) return;

    const updatedBlocks = [...sprite.blocks];
    updatedBlocks[blockIndex].params[paramIndex] = value;

    updateSprite(selectedSprite, { blocks: updatedBlocks });
  };
  const onDelete = (index) => {
    console.log("onDelete", selectedSprite, index);
    deleteBlockFromSprite(selectedSprite, index);
  };
  return (
    <div
      className="flex-1 h-full overflow-auto p-4 bg-black-50 dark:bg-gray-800 border-2 border-dashed border-gray-500"
      ref={dropRef}
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage: `
      radial-gradient(circle at 10px 10px, 
        rgba(80, 80, 80, 0.3) 1px, 
        transparent 2px
      ),
      radial-gradient(circle at 30px 30px, 
        rgba(100, 100, 100, 0.2) 1px, 
        transparent 3px
      )
    `,
        backgroundSize: "40px 40px, 60px 60px",
      }}
    >
      <div className="mb-4">
        {/* <div className="font-bold mb-2">Add Blocks:</div>
        <div className="flex flex-wrap gap-2">
          <button
            className="bg-blue-500 text-white px-2 py-1 text-sm"
            onClick={() => handleAddBlock("move")}
          >
            Move
          </button>
          <button
            className="bg-blue-500 text-white px-2 py-1 text-sm"
            onClick={() => handleAddBlock("turn")}
          >
            Turn
          </button>
          <button
            className="bg-blue-500 text-white px-2 py-1 text-sm"
            onClick={() => handleAddBlock("goto")}
          >
            Go to
          </button>
          <button
            className="bg-purple-500 text-white px-2 py-1 text-sm"
            onClick={() => handleAddBlock("say")}
          >
            Say
          </button>
          <button
            className="bg-purple-500 text-white px-2 py-1 text-sm"
            onClick={() => handleAddBlock("think")}
          >
            Think
          </button>
          <button
            className="bg-green-500 text-white px-2 py-1 text-sm"
            onClick={() => handleAddBlock("repeat")}
          >
            Repeat
          </button>
        </div> */}

        <div
          className="font-bold mb-2"
          style={{ background: "white", padding: "5px" }}
        >
          Script:
        </div>
      </div>
      {sprite &&
        sprite.blocks.map((block, index) => (
          <div className="flex items-center mb-2" key={index}>
            <Block
              blockAction={() => blockAction(index)}
              key={index}
              type={block.type}
              params={block.params}
              onParamChange={(paramIndex, value) =>
                handleParamChange(index, paramIndex, value)
              }
            />
            <button
              className="bg-red-500 text-white px-2 py-1 ml-2 text-xs"
              onClick={() => onDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}
