// Return the user id of a given username, or error if any.
import { useSelector } from "react-redux";

function useGroupId(cubeId) {
  return useSelector((store) => store.CubeReducer.cubeIdToGroup.get(cubeId));
}

function useGridColClass(numCols) {
  switch (numCols) {
    case 1:
      return "grid-cols-1";
    case 2:
      return "grid-cols-2";
    case 3:
      return "grid-cols-3";
    case 4:
      return "grid-cols-4";
    case 5:
      return "grid-cols-5";
    case 6:
      return "grid-cols-6";
    case 7:
      return "grid-cols-7";
    case 8:
      return "grid-cols-8";
    case 9:
      return "grid-cols-9";
    case 10:
      return "grid-cols-10";
    default:
      return "";
  }
}

function useColorClass(groupId) {
  switch (groupId % 8) {
    case 0:
      return "bg-rose-400";
    case 1:
      return "bg-[#4af]";
    case 2:
      return "bg-emerald-400";
    case 3:
      return "bg-red-400";
    case 4:
      return "bg-lime-400";
    case 5:
      return "bg-indigo-400";
    case 6:
      return "bg-sky-400";
    case 7:
      return "bg-cyan-400";
    default:
      return "bg-orange-400";
  }
}

export { useGroupId, useGridColClass, useColorClass };
