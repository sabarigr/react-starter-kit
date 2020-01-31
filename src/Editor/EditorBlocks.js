export default {
  blocks: [
    {
      id: "title",
      label: "<h2>Title</h2>",
      attributes: { class: "title-section" },
      content: `<h2>This is a title</h2>`
    },
    {
      id: "subtitle",
      label: "<h3>Subtitle</h3>",
      attributes: { class: "subtitle-section" },
      content: `<h3>This is a subtitle</h3>`
    },
    {
      id: "text",
      label: "Text",
      attributes: { class: "paragraph-section" },
      content: "<p>Insert your text here</p>"
    },
    {
      id: "image",
      label: "Image",
      select: true,
      content: { type: "image" },
      activate: true
    }
  ]
};
