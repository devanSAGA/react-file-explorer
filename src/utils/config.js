export const DEFAULT_FOLDER_CONFIG = [
  {
    title: "apps",
    type: "folder",
    isSelected: false,
    childNodes: []
  },
  {
    title: "pictures",
    type: "folder",
    isSelected: false,
    childNodes: []
  },
  {
    title: "videos",
    type: "folder",
    isSelected: false,
    childNodes: [
      {
        title: "movies",
        type: "folder",
        isSelected: false,
        childNodes: []
      }
    ]
  },
  {
    title: "docs",
    type: "folder",
    isSelected: false,
    childNodes: [
      {
        title: "work",
        type: "folder",
        isSelected: false,
        childNodes: [
          {
            title: "e.pdf",
            type: "file",
            isSelected: false,
            childNodes: []
          },
          {
            title: "f.ts",
            type: "file",
            isSelected: false,
            childNodes: []
          }
        ]
      },
      {
        title: "c.pdf",
        type: "file",
        isSelected: false,
        childNodes: []
      },
      {
        title: "d.docx",
        type: "file",
        isSelected: false,
        childNodes: []
      }
    ]
  },
  {
    title: "a.pdf",
    type: "file",
    isSelected: false,
    childNodes: []
  },
  {
    title: "b.jpg",
    type: "file",
    isSelected: false,
    childNodes: []
  }
];
