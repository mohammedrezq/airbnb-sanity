export default {
  name: "review",
  title: "Review",
  type: "object",
  fields: [
    {
      name: "reviewDescription",
      title: "Review Description",
      type: "string",
    },
    {
      name: "traveller",
      title: "Traveller",
      type: "traveller",
    },
    {
      name: "rating",
      title: "Rating",
      type: "string",
      options: {
        list: [
          {
            title: "5 Stars",
            value: "5-starts",
          },
          {
            title: "4 Stars",
            value: "4-starts",
          },
          {
            title: "4 Stars",
            value: "4-starts",
          },
          {
            title: "3 Stars",
            value: "3-starts",
          },
          {
            title: "2 Stars",
            value: "2-starts",
          },
          {
            title: "1 Stars",
            value: "1-starts",
          },
        ],
        layout: 'radio'
      },
    },
  ],
};
