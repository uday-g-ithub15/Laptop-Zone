import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <section>
        <h2>What is context api ?</h2>
        <p>
          Context is a process that can make the props drilling easier.In basic
          react application, data passes parent component to child components as
          props.But if we want to passes data to child of child component,in
          that case the process 'props drilling' is not so easy. For removing
          this problem, now we can use context.Context is just like a global
          variable.
        </p>
      </section>
      <section>
        <h2>What is semantic tag ?</h2>
        <p>
          Semantic html elements are those that explain their meaning as human
          readable.It exactly defines its content.Some of semantic elements are{" "}
          <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>,{" "}
          <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>,{" "}
          <code>&lt;aside&gt;</code>, and <code>&lt;footer&gt;</code> act more
          or less like <code>&lt;div&gt;</code> elements.Semantic elements makes
          code easier to read.It has greater accessibility.
        </p>
      </section>
      <section>
        <h2>
          What is the difference among inline, block and inline-block elements ?
        </h2>
        <article>
          <p>1. Inline elements</p>
          <p>
            It doesn't allows to set width and height on the element.Some of
            inline elements are <code>&lt;a&gt; , &lt;span&gt;</code> etc.
          </p>
        </article>
        <article>
          <p>2.inline-Block elements</p>
          <p>
            It allows to set width and height on the element.But there are not
            elements that initially set up as inline-block.We can an element
            inline-block using <code>display:inline-block;</code>
          </p>
        </article>
        <article>
          <p>1. Block elements</p>
          <p>
            It starts on a new line and takes up full width.Some of block
            elements are <code>&lt;div&gt; , &lt;p&gt;</code> etc.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Blogs;
