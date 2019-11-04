export const createNewFolder = newFolder => ({
  type: "CREATE_FOLDER",
  newFolder
});

export const createNewFile = newFile => ({
  type: "CREATE_FILE",
  newFile
});

export const deleteFolder = folderPath => ({
  type: "DELETE_FOLDER",
  folderPath
});

export const deleteFile = filePath => ({
  type: "DELETE_FILE",
  filePath
});
