import React from "react";

const blog = {
  topic: "Advice From a Software Engineer With 8 Years of Experience",
  title: "blog title",
  description: "Practical tips for those who want to advance in their careers",
  author: "tadiwa pfachi",
  image: "blog image",
  link: "blog link",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper ante vitae est tristique, vel fermentum arcu cursus. Duis ac sem nec elit tincidunt tincidunt. Quisque a lacinia augue. Phasellus efficitur, justo eu fermentum tempus, ligula augue consequat mauris, a bibendum neque ligula vel justo. Curabitur eu urna vitae nunc congue bibendum. Maecenas id vestibulum urna. In hac habitasse platea dictumst. Sed tristique sapien non est facilisis, at laoreet nunc fringilla. In cursus libero vel quam gravida, vel hendrerit libero temporVestibulum aliquam arcu vel nunc suscipit, vel hendrerit elit euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ullamcorper metus ut felis imperdiet eleifend. Nam in nulla sit amet lectus fermentum tempus. Nullam vel erat vitae libero dictum facilisis id vel velit. Aenean vehicula, metus eu fermentum tincidunt, libero metus ultrices turpis, ac scelerisque libero felis sit amet libero. Proin ullamcorper mi vel bibendum malesuada. Aenean nec ex ac sapien eleifend bibendum.Pellentesque euismod elit ac augue iaculis, vel cursus urna feugiat. Integer non magna nec sapien finibus congue. Morbi ut eros eu felis feugiat scelerisque nec ac tortor. Vivamus vehicula ipsum eget tellus sodales, eget dictum dui cursus. Integer eu metus vel dolor suscipit luctus ac quis dui. Suspendisse potenti. Sed semper, metus sit amet tincidunt sagittis, sem felis luctus velit, ut tincidunt dui odio a tellus. Curabitur aliquet dui eu sem ullamcorper, ac lacinia dolor dignissim.",
};
const date = new Date();
function Blogpost() {
  return (
    <div className="flex flex-col  items-center">
      <span className="p-2">
        <code className="">By {blog.author}</code>
        <code>On {date.toString()}</code>
      </span>
      <h2 className="text-2xl font-semibold p-4">{blog.topic}</h2>
      <p className=""></p>
    </div>
  );
}

export default Blogpost;
