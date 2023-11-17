export let PeopleSchema = [
  {
    Section1: [
      {
        Heading: " People Section",
        Parent: "row",
        Page: "PeoplePlant",
        child: [
          {
            type: "file",
            name: "Slide1",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "text",
            name: "SlideHeading",
            className: "col-12 mt-3 form-control",
          },
          {
            type: "text",
            name: "SlideContent",
            className: "col-12 mt-3 form-control",
          },
        ],
      },
    ],
    Section2: [
      {
        Heading: "Secondary Section",
        Parent: "row",
        child: [
          {
            type: "text",
            name: "SecondarySectionHeading",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "text",
            name: "SecondarySectionContent",
            className: "col-12 mt-3 form-control",
          },
          {
            type: "file",
            name: "SecondarySectionImage",
            className: "col-12 mt-3 form-control",
          },
        ],
      },
    ],
    Section3: [
      {
        Heading: "Tertiary Section",
        Parent: "row",
        child: [
          {
            type: "text",
            name: "TertiaryLeftHeading",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "file",
            name: "TertiaryImage",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "text",
            name: "TertiaryRightHeading",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "text",
            name: "TertiaryRightContent",
            className: "col-12 mt-3 form-control ",
          },
        ],
      },
    ],
    Section4: [
      {
        Heading: "Final Section",
        Parent: "row",
        child: [
          {
            type: "text",
            name: "FinalSectionHeading",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "text",
            name: "FinalSectionContent",
            className: "col-12 mt-3 form-control",
          },
        ],
      },
    ],
    Section5: [
      {
        Heading: "Image Section",
        Parent: "row",
        child: [
          {
            type: "file",
            name: "img1",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "file",
            name: "img2",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "file",
            name: "img3",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "file",
            name: "img4",
            className: "col-12 mt-3 form-control ",
          },
        ],
        btnContainer: "col-3 mt-4",
        btnClass: "btn",
        btnContent: "Submit",
        Btnstyle: { background: "blue", color: "white" },
      },
    ],
  },
];
