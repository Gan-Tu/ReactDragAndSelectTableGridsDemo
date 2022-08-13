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

import { useState } from "react";
import { useDispatch } from "react-redux";
import Selecto from "react-selecto";
import Cube from "./components/Cube";
import { useGridColClass } from "./hooks/cube";

function App() {
  const dispatch = useDispatch();
  const [numRows, setNumRows] = useState(4);
  const [numCols, setNumCols] = useState(4);
  const [curGroupId, setCurGroupId] = useState(1);
  const gridColClass = useGridColClass(numCols);

  const cubeIds = [];
  for (let i = 0; i < numRows; ++i) {
    const row = [];
    for (let j = 0; j < numCols; ++j) {
      row.push(`cube-row-${i}-col-${j}`);
    }
    cubeIds.push(row);
  }

  return (
    <div className="app">
      <div className="container">
        <div className="logo" id="logo">
          <img
            alt="logo"
            src="https://daybrush.com/selecto/images/256x256.png"
          />
        </div>
        <h1 className="pt-2">Drag to Draw ViSE Layouts</h1>
        <Selecto
          dragContainer={".elements"}
          selectableTargets={[".selecto-area .cube"]}
          hitRate={5}
          selectByClick={true}
          continueSelect={false}
          selectFromInside={true}
          onSelect={(e) => {
            e.added.forEach((el) => {
              dispatch({
                type: "SET_CUBE_GROUP",
                cubeId: el.id,
                groupId: curGroupId
              });
            });
            e.removed.forEach((el) => {
              dispatch({
                type: "REMOVE_CUBE_GROUP",
                cubeId: el.id,
                groupId: curGroupId
              });
            });
          }}
        />
        <div className="elements selecto-area" id="selecto1">
          {cubeIds.map((row, rowIndex) => {
            return (
              <div
                className={`grid gap-3 ${gridColClass}`}
                key={`row-${rowIndex}`}
              >
                {row.map((id) => (
                  <Cube key={id} id={id} />
                ))}
              </div>
            );
          })}
        </div>
        <div className="empty elements"></div>
      </div>
    </div>
  );
}

export default App;
