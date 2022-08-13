import { all } from "redux-saga/effects";
import { watchCubeApp } from "./redux/cube";

export default function* rootSagas() {
    yield all([watchCubeApp()]);
}


