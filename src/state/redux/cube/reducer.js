const initialState = {
  cubeIdToGroup: new Map()
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CUBE_GROUP": {
      let newCubeIdToGroup = new Map(state.cubeIdToGroup);
      newCubeIdToGroup.set(action.cubeId, action.groupId);
      return { ...state, cubeIdToGroup: newCubeIdToGroup };
    }
    case "REMOVE_CUBE_GROUP": {
      let newCubeIdToGroup = new Map(state.cubeIdToGroup);
      newCubeIdToGroup.delete(action.cubeId);
      return { ...state, cubeIdToGroup: newCubeIdToGroup };
    }
    default:
      return { ...state };
  }
}
