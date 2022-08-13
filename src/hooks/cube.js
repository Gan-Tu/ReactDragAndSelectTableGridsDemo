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

export { useGroupId, useGridColClass };
