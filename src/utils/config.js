export const DEFAULT_FOLDER_CONFIG = {
  title: "root",
  type: "folder",
  url: "/",
  childNodes: {
    apps: {
      title: "apps",
      type: "folder",
      url: "/apps",
      info: {
        size: "1GB",
        creator: "Devansh",
        date: "1st Nov, 2019"
      },
      childNodes: {}
    },
    pictures: {
      title: "pictures",
      type: "folder",
      url: "/pictures",
      info: {
        size: "1GB",
        creator: "Devansh",
        date: "1st Nov, 2019"
      },
      childNodes: {}
    },
    videos: {
      title: "videos",
      type: "folder",
      url: "/videos",
      info: {
        size: "1GB",
        creator: "Devansh",
        date: "1st Nov, 2019"
      },
      childNodes: {
        movies: {
          title: "movies",
          type: "folder",
          url: "/videos/movies",
          info: {
            size: "1GB",
            creator: "Devansh",
            date: "1st Nov, 2019"
          },
          childNodes: {}
        }
      }
    },
    docs: {
      title: "docs",
      type: "folder",
      url: "/docs",
      info: {
        size: "1GB",
        creator: "Devansh",
        date: "1st Nov, 2019"
      },
      childNodes: {
        work: {
          title: "work",
          type: "folder",
          url: "/docs/work",
          info: {
            size: "1GB",
            creator: "Devansh",
            date: "1st Nov, 2019"
          },
          childNodes: {
            "e.pdf": {
              title: "e.pdf",
              type: "file",
              url: "/docs/work/e.pdf",
              info: {
                size: "1GB",
                creator: "Devansh",
                date: "1st Nov, 2019"
              }
            },
            "f.ts": {
              title: "f.ts",
              type: "file",
              url: "/docs/work/f.ts",
              info: {
                size: "1GB",
                creator: "Devansh",
                date: "1st Nov, 2019"
              }
            }
          }
        },
        "c.pdf": {
          title: "c.pdf",
          type: "file",
          url: "/docs/c.pdf",
          info: {
            size: "1GB",
            creator: "Devansh",
            date: "1st Nov, 2019"
          }
        },
        "d.docx": {
          title: "d.docx",
          type: "file",
          url: "/docs/d.docx",
          info: {
            size: "1GB",
            creator: "Devansh",
            date: "1st Nov, 2019"
          }
        }
      }
    },
    "a.pdf": {
      title: "a.pdf",
      type: "file",
      url: "/a.pdf",
      info: {
        size: "1GB",
        creator: "Devansh",
        date: "1st Nov, 2019"
      }
    },
    "b.jpg": {
      title: "b.jpg",
      type: "file",
      url: "/b.jpg",
      info: {
        size: "1GB",
        creator: "Devansh",
        date: "1st Nov, 2019"
      }
    }
  }
};
