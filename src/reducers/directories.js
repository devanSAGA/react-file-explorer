import { DEFAULT_FOLDER_CONFIG } from "../utils/config";

const defaultDirectoriesState = DEFAULT_FOLDER_CONFIG;

export default (state = defaultDirectoriesState, action) => {
  let newState = {};
  let foldersList = [];
  let parentFolderRef = null;

  switch (action.type) {
    case "CREATE_FOLDER":
      newState = JSON.parse(JSON.stringify(state));
      const newFolderTitle = action.newFolder.title;
      foldersList = action.newFolder.url.split("/");
      console.log(foldersList, action.newFolder.url);
      if (foldersList.length === 2) {
        newState.childNodes[newFolderTitle] = action.newFolder;
      } else {
        let parentFolderRef = newState;
        for (let i = 1; i < foldersList.length - 1; i++) {
          parentFolderRef = parentFolderRef.childNodes[foldersList[i]];
        }
        parentFolderRef.childNodes[newFolderTitle] = action.newFolder;
      }
      return newState;
    case "CREATE_FILE":
      newState = JSON.parse(JSON.stringify(state));
      const newFileTitle = action.newFile.title;
      foldersList = action.newFile.url.split("/");
      if (foldersList.length === 2) {
        newState.childNodes[newFileTitle] = action.newFile;
      } else {
        let parentFolderRef = newState;
        for (let i = 1; i < foldersList.length - 1; i++) {
          parentFolderRef = parentFolderRef.childNodes[foldersList[i]];
        }
        parentFolderRef.childNodes[newFileTitle] = action.newFile;
      }
      return newState;
    case "DELETE_FOLDER":
      newState = JSON.parse(JSON.stringify(state));
      foldersList = action.folderPath.split("/");
      parentFolderRef = newState;
      for (let i = 1; i < foldersList.length - 1; i++) {
        parentFolderRef = parentFolderRef.childNodes[foldersList[i]];
      }
      delete parentFolderRef.childNodes[foldersList[foldersList.length - 1]];
      return newState;
    case "DELETE_FILE":
      console.log(action.filePath);
      newState = JSON.parse(JSON.stringify(state));
      foldersList = action.filePath.split("/");
      parentFolderRef = newState;
      for (let i = 1; i < foldersList.length - 1; i++) {
        parentFolderRef = parentFolderRef.childNodes[foldersList[i]];
      }
      delete parentFolderRef.childNodes[foldersList[foldersList.length - 1]];
      return newState;
    default:
      return state;
  }
};
