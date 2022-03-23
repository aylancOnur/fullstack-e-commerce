const Searchbar = ({ setFocus, buttonClass }) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative flex lg:w-1/2 w-full my-auto"
    >
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
      <input
        onFocus={() => setFocus(true)}
        className="font-medium placeholder:text-gray-400 block bg-white w-full border-2 border-gray-400 rounded-l-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 sm:text-sm"
        placeholder="Ürün, kategori veya marka ara"
        type="text"
        name="search"
      />
      <button
        type="submit"
        className={
          buttonClass
            ? buttonClass
            : "absolute inset-y-0 right-0 font-medium bg-gray-500 px-4 text-white"
        }
      >
        ARA
      </button>
    </form>
  );
};

export default Searchbar;
