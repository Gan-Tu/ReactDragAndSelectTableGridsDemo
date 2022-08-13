// MIT License
//
// Copyright (c) 2022 Gan Tu
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

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
    default:
      return "bg-yellow-200";
  }
}

export { useSelectedCount, useGroupId, useGridColClass, useColorClass };
