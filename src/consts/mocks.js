export const mockData = [
  {
    id: 1,
    title: "In progress",
    issues: [
      { id: "1", title: "have a breakfast", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." },
      { id: "2", title: "code", description: "lorem ipsum dolor sit amet consectetur" },
      { id: "3", title: "go to sleep", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid fugiat nulla ab voluptates veritatis, beatae illum natus illo dolorem ullam." },
    ]
  },
  {
    id: 2,
    title: "Done",
    issues: [
      { id: "4", title: "wake up", description: "wake up on 7AM and make a bed" },
    ]
  }
]

export const initialIssue = { id: "", title: "", description: "" }

export const initialSection = { id: "", title: "", issues: [{}] }
