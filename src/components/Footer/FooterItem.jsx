const FooterItem = ({ item, active, handleClick }) => {
  return (
    <section
      className="relative text-gray-700 font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/5"
      key={item.id}
    >
      <div className="md:hidden">
        <button
          onClick={() => handleClick(item.id)}
          className="text-sm font-bold tracking-wider text-slate-600 focus:outline-none border-t border-white py-4 w-full text-left"
          type="button"
        >
          {item.title}
        </button>
      </div>
      <a
        className="text-sm font-bold tracking-wider text-slate-600 hidden md:block"
        href="#1"
      >
        {item.title}
      </a>
      <article className={active}>
        <ul className="my-5 text-xs tracking-wide font-bold text-gray-400">
          {item.items.map((listItem) => (
            <li
              className="my-3 tracking-wide hover:text-slate-600 transition-all transition-duration: 150ms"
              key={listItem.id}
            >
              <a href="#1">{listItem.link}</a>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default FooterItem;
