export const DEFAULT_FOLDER_CONFIG = [
  {
    title: "apps",
    type: "folder",
    url: "/apps",
    childNodes: []
  },
  {
    title: "pictures",
    type: "folder",
    url: "/pictures",
    childNodes: []
  },
  {
    title: "videos",
    type: "folder",
    url: "/videos",
    childNodes: [
      {
        title: "movies",
        type: "folder",
        url: "/videos/movies",
        childNodes: []
      }
    ]
  },
  {
    title: "docs",
    type: "folder",
    url: "/docs",
    childNodes: [
      {
        title: "work",
        type: "folder",
        url: "/docs/work",
        childNodes: [
          {
            title: "e.pdf",
            type: "file",
            url: "",
            childNodes: []
          },
          {
            title: "f.ts",
            type: "file",
            url: "",
            childNodes: []
          }
        ]
      },
      {
        title: "c.pdf",
        type: "file",
        url: "",
        childNodes: []
      },
      {
        title: "d.docx",
        type: "file",
        url: "",
        childNodes: []
      }
    ]
  },
  {
    title: "a.pdf",
    type: "file",
    url: "",
    childNodes: []
  },
  {
    title: "b.jpg",
    type: "file",
    url: "",
    childNodes: []
  }
];
