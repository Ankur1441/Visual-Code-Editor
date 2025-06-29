import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

const SpriteContext = createContext();

export function useSpriteContext() {
  return useContext(SpriteContext);
}

export function SpriteProvider({ children }) {
  const [selectedSprite, setSelectedSprite] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const animationRef = useRef(null);
  const lastTimestamp = useRef(0);
  const [stripeType, setStripeType] = useState("Cat");
  const [heroMode, setHeroMode] = useState(false);
  const [sprites, setSprites] = useState([
    {
      id: 1,
      x: 50,
      y: 50,
      rotation: 0,
      blocks: [],
      name: "Sprite1",
      type: stripeType,
    },
  ]);
  useEffect(() => {
    if (isPlaying) {
      console.log("isPlaying");
      animationRef.current = requestAnimationFrame(executeAnimations);
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);
  const addSprite = () => {
    const newId = sprites.length
      ? Math.max(...sprites.map((s) => s.id)) + 1
      : 1;

    setSprites((prev) => [
      ...prev,
      {
        id: newId,
        x: 100,
        y: 100,
        rotation: 0,
        blocks: [],
        name: `Sprite${newId}`,
        type: stripeType,
      },
    ]);
  };

  const updateSprite = (id, data) => {
    setSprites((prev) =>
      prev.map((sprite) => (sprite.id === id ? { ...sprite, ...data } : sprite))
    );
  };
  const addBlockToSprite = (spriteId, block) => {
    setSprites((prev) =>
      prev.map((sprite) =>
        sprite.id === spriteId
          ? { ...sprite, blocks: [...sprite.blocks, block] }
          : sprite
      )
    );
  };

  const deleteBlockFromSprite = (spriteId, blockIndex) => {
    setSprites((prev) =>
      prev.map((sprite) =>
        sprite.id === spriteId
          ? {
              ...sprite,
              blocks: sprite.blocks.filter(
                (block, index) => index !== blockIndex
              ),
            }
          : sprite
      )
    );
  };

  const executeAnimations = (timestamp) => {
    if (!lastTimestamp.current) lastTimestamp.current = timestamp;
    setSprites((prev) => {
      let updated = [...prev];

      updated = updated.map((sprite) => {
        let newSprite = { ...sprite };

        sprite.blocks.forEach((block) => {
          switch (block.type) {
            case "move":
              const angleInRadians = (newSprite.rotation * Math.PI) / 180;
              console.log(
                block.params[0],
                Math.cos(angleInRadians),
                newSprite.x
              );
              newSprite.x += block.params[0] * Math.cos(angleInRadians);
              newSprite.y += block.params[0] * Math.sin(angleInRadians);
              break;
            case "turn":
              newSprite.rotation += block.params[0];
              break;
            case "goto":
              newSprite.x = block.params[0];
              newSprite.y = block.params[1];
              break;
          }
        });

        return newSprite;
      });
      if (heroMode) {
        for (let i = 0; i < updated.length; i++) {
          for (let j = i + 1; j < updated.length; j++) {
            const a = updated[i];
            const b = updated[j];
            console.log(a, b);
            if (Math.abs(a.x - b.x) < 50 && Math.abs(a.y - b.y) < 50) {
              console.log("Collision detected!");
              [a.name, b.name] = [b.name, a.name];
              [a.blocks, b.blocks] = [b.blocks, a.blocks];
            }
          }
        }
      }

      return updated;
    });

    lastTimestamp.current = timestamp;
    // animationRef.current = requestAnimationFrame(executeAnimations);
  };

  const blockAction = (blockIndex) => {
    setSprites((prev) =>
      prev.map((sprite) => {
        if (sprite.id !== selectedSprite) return sprite;

        const updatedSprite = { ...sprite };

        const block = updatedSprite.blocks[blockIndex];
        if (!block) return updatedSprite;

        switch (block.type) {
          case "move":
            const angleInRadians = (updatedSprite.rotation * Math.PI) / 180;
            updatedSprite.x += block.params[0] * Math.cos(angleInRadians);
            updatedSprite.y += block.params[0] * Math.sin(angleInRadians);
            break;
          case "turn":
            updatedSprite.rotation += block.params[0];
            break;
          case "goto":
            updatedSprite.x = block.params[0];
            updatedSprite.y = block.params[1];
            break;
        }

        return updatedSprite;
      })
    );
  };

  const value = {
    sprites,
    stripeType,
    selectedSprite,
    setSelectedSprite,
    addSprite,
    updateSprite,
    addBlockToSprite,
    isPlaying,
    setIsPlaying,
    blockAction,
    deleteBlockFromSprite,
    setStripeType,
    setSprites,
    heroMode,
    setHeroMode,
  };

  return (
    <SpriteContext.Provider value={value}>{children}</SpriteContext.Provider>
  );
}
