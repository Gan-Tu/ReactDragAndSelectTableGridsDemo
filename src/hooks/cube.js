// Return the user id of a given username, or error if any.
import { useSelector } from "react-redux";

function useSelectedCount() {
  return useSelector((store) => store.CubeReducer.cubeIdToGroup.size);
}

function useGroupId(cubeId) {
  return useSelector((store) => store.CubeReducer.cubeIdToGroup.get(cubeId));
}

function useGridColClass(numCols) {
  switch (numCols % 11) {
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
    default:
      return "grid-cols-10";
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
      return "bg-sky-300";
    case 7:
      return "bg-yellow-200";
  }
}

export { useSelectedCount, useGroupId, useGridColClass, useColorClass };
