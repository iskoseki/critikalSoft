import BentoItem from "./BentoItem";

export default function Bento() {
  const Items = [
    {
      title: "Bespoken Web development",
      content: "E-Commerce and Web development services.",
      img: `https://images.unsplash.com/photo-1581089781785-603411fa81e5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      className: "col-span-10 md:col-span-6",
    },
    {
      title: "UI/UX Design",
      content: "Find the latest drops from the world's top artists.",
      img: `https://images.unsplash.com/photo-1532619187608-e5375cab36aa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      uri: "/ ",
      className: "col-span-10 text-sm  md:col-span-4",
    },

    {
      title: "",
      content: "Explore the world of art with us.",
      img: `https://images.unsplash.com/flagged/photo-1562599838-8cc871c241a5?q=80&w=2824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      className: "col-span-10 md:col-span-4",
    },
    {
      title: "About us",
      content: "Know more about our culture and philosophy.",
      img: `https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      className: "col-span-10 md:col-span-6",
    },
  ];

  return (
    <section
      className={` 
        max-w-[1400px] md:grid md:grid-cols-10 auto-rows-[20rem] gap-4 mx-auto px-10 md:px-20 h-full
        `}
    >
      {Items.map((item) => (
        <BentoItem key={item.title} {...item} />
      ))}
    </section>
  );
}
