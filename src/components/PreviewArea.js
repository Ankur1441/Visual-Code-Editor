import React from "react";
import CatSprite from "./CatSprite";
import DogSprite from "./DogSprite";
import { useSpriteContext } from "../context/spriteContext";
import { useDrop, useDrag } from "react-dnd";

function DraggableSprite({ sprite, isSelected, onSelect }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: `${sprite.type}Stripe`, // ✅ dynamic type
    item: { id: sprite.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={dragRef}
      onClick={() => onSelect(sprite.id)}
      className={`absolute transition-transform duration-100 ${
        isSelected ? "ring-2 ring-blue-500" : ""
      }`}
      style={{
        left: sprite.x,
        top: sprite.y,
        transform: `rotate(${sprite.rotation}deg)`,
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <div className="text-xs bg-white px-1 absolute -top-6 left-1/2 transform -translate-x-1/2">
        {sprite.name}
      </div>
      {sprite.type === "Dog" ? <DogSprite /> : <CatSprite />}
    </div>
  );
}

export default function PreviewArea() {
  const {
    sprites,
    selectedSprite,
    setSelectedSprite,
    addSprite,
    isPlaying,
    setIsPlaying,
    setStripeType,
    stripeType,
    setSprites,
    heroMode,
    setHeroMode,
  } = useSpriteContext();

  const [{ isOver }, dropRef] = useDrop({
    accept: ["CatStripe", "DogStripe"],
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const dropTarget = document.querySelector(".relative");
      const rect = dropTarget.getBoundingClientRect();

      const x = offset.x - rect.left;
      const y = offset.y - rect.top;

      setSelectedSprite(() => {
        const spriteIndex = sprites.findIndex((s) => s.id === item.id);
        if (spriteIndex !== -1) {
          const updated = [...sprites];
          updated[spriteIndex] = {
            ...updated[spriteIndex],
            x,
            y,
          };

          setSprites(updated);
        }
        return item.id;
      });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div className="flex flex-col h-full p-2" ref={dropRef}>
      <div className="flex justify-between mb-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setIsPlaying(!isPlaying)}
          style={{
            background:
              'url("data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNi42MyAxNy41Ij48ZGVmcz48c3R5bGU+LmNscy0xLC5jbHMtMntmaWxsOiM0Y2JmNTY7c3Ryb2tlOiM0NTk5M2Q7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uY2xzLTJ7c3Ryb2tlLXdpZHRoOjEuNXB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbi0tZ3JlZW4tZmxhZzwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNLjc1LDJBNi40NCw2LjQ0LDAsMCwxLDguNDQsMmgwYTYuNDQsNi40NCwwLDAsMCw3LjY5LDBWMTIuNGE2LjQ0LDYuNDQsMCwwLDEtNy42OSwwaDBhNi40NCw2LjQ0LDAsMCwwLTcuNjksMCIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjAuNzUiIHkxPSIxNi43NSIgeDI9IjAuNzUiIHkyPSIwLjc1Ii8+PC9zdmc+") no-repeat center center/contain',
          }}
        ></button>
        <div className="flex items-center gap-2">
          <select
            value={stripeType}
            onChange={(e) => setStripeType(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
          </select>
          <button
            onClick={addSprite}
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            Add Sprite
          </button>
        </div>
      </div>

      <div className="relative flex-1 bg-gray-100 rounded-lg border border-gray-300 overflow-hidden">
        {sprites.map((sprite) => (
          <DraggableSprite
            key={sprite.id}
            sprite={sprite}
            isSelected={selectedSprite === sprite.id}
            onSelect={setSelectedSprite}
          />
        ))}
      </div>

      <div className="mt-4">
        <div className="font-bold mb-2">Sprites:</div>
        <div className="flex gap-10 border border-gray-300 rounded p-2">
          <div className="flex flex-wrap gap-2">
            {sprites.map((sprite) => (
              <button
                key={sprite.id}
                className={`px-3 py-1 rounded ${
                  selectedSprite === sprite.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setSelectedSprite(sprite.id)}
              >
                {sprite.name}
              </button>
            ))}
          </div>
          <button
            onClick={() => setHeroMode(!heroMode)}
            className="px-3 py-1 rounded bg-blue-500 text-white"
          >
            {heroMode ? "Disable" : "Enable"} Hero Mode
          </button>
        </div>
      </div>
    </div>
  );
}
