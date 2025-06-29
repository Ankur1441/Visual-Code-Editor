import React, { useState } from "react";
import Icon from "./Icon";
export default function Block({
  index,
  type,
  params,
  onParamChange,
  blockAction,
}) {
  const renderInputs = () => {
    switch (type) {
      case "move":
        return (
          <input
            type="number"
            className="w-12 ml-1 px-1 text-black"
            value={params[0]}
            a
            onChange={(e) => onParamChange(0, parseInt(e.target.value) || 0)}
          />
        );
      case "turn":
        return (
          <input
            type="number"
            className="w-12 ml-1 px-1 text-black"
            value={params[0]}
            onChange={(e) => onParamChange(0, parseInt(e.target.value) || 0)}
          />
        );
      case "goto":
        return (
          <>
            <input
              type="number"
              className="w-12 ml-1 px-1 text-black"
              value={params[0]}
              onChange={(e) => onParamChange(0, parseInt(e.target.value) || 0)}
            />
            <input
              type="number"
              className="w-12 ml-1 px-1 text-black"
              value={params[1]}
              onChange={(e) => onParamChange(1, parseInt(e.target.value) || 0)}
            />
          </>
        );
      case "say":
      case "think":
        return (
          <>
            <input
              type="text"
              className="w-20 ml-1 px-1 text-black"
              value={params[0]}
              onChange={(e) => onParamChange(0, e.target.value)}
            />
            <input
              type="number"
              className="w-12 ml-1 px-1 text-black"
              value={params[1]}
              onChange={(e) => onParamChange(1, parseInt(e.target.value) || 0)}
            />
          </>
        );
      default:
        return null;
    }
  };

  const getLabel = () => {
    switch (type) {
      case "move":
        return "Move";
      case "turn":
        return "Turn";
      case "goto":
        return "Go to";
      case "say":
        return "Say";
      case "think":
        return "Think";
      case "repeat":
        return "Repeat";
      default:
        return type;
    }
  };

  return (
    <div
      className="flex items-center bg-blue-500 text-white px-2 py-1 my-1 text-sm w-full cursor-pointer"
      onClick={blockAction}
    >
      <div className="flex items-center">
        <span>{getLabel()}</span>
        {renderInputs()}
        {type === "turn" && (
          <Icon name="redo" size={15} className="text-white ml-1" />
        )}
      </div>
    </div>
  );
}
