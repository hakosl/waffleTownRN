let curScene = 'loading';
let sceneHasChanged = true;
const allScenes = {
  loading: 'LOADING',
  waffles: 'WAFFLES',
  newWaffle: 'NEW_WAFFLE',
  takePicture: 'TAKE_PICTURE',
};

export function getAllScenes() {
  return allScenes;
};

export function getCurScene() {
  return curScene;
}

export function sceneShouldChange() {
  if(sceneShouldChange) {
    sceneHasChanged = false;
    return true;
  } else {
    return true;
  }
}

export function setScene(sceneName) {
  switch (sceneName) {
    case 'loading':
      curScene = 'LOADING';
      break;
    case 'waffles':
      curScene = 'WAFFLES';
      break;
    case 'newWaffle':
      curScene = 'NEW_WAFFLE';
      break;
    case 'takePicture':
      curScene = 'TAKE_PICTURE';
      break;
    default:
      curScene = 'NEW_WAFFLE';
      break;
  }

  sceneHasChanged = true;
}
