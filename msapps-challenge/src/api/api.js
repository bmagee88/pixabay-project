const server = `http://localhost:8000`;
export const fetchImages = async (category, page) => {
  let url = `${server}/category?category=${category}&page=${page}`;
  const response = await fetch(url);
  return await response.json();
};

export const manageSort = async (sortKey, orderAsc, category, page) => {
      let url = `${server}/sort`;
      const dto = {
        sort_by: sortKey,
        order_asc: orderAsc,
        category: category,
        page: page
      };
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto),
      });
      return await response.json();
  };