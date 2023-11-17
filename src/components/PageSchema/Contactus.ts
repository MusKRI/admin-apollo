export let ContactSchema = [
  {
    Section1: [
      {
        Heading: "Upload Contact us Slides",
        Parent: "row",
        Page: "ContactUs",
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
            name: "SlideSubContent",
            className: "col-12 mt-3 form-control",
          },
        ],
      },
    ],
    Section2: [
      {
        Heading: "Information Section",
        Parent: "row",
        child: [
          {
            type: "text",
            name: "Address",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "text",
            name: "PrimaryNumber",
            className: "col-12 mt-3 form-control",
          },
          {
            type: "text",
            name: "SecondaryNumber",
            className: "col-12 mt-3 form-control",
          },

          {
            type: "text",
            name: "PrimaryEmail",
            className: "col-12 mt-3 form-control",
            placeholder: "Main Heading",
          },
          {
            type: "Area",
            name: "SecondaryEmail",
            className: "col-12 mt-3 form-control",
            placeholder: "Main Description",
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
