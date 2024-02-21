const server = `http://localhost:8000`;

/** fetches images from backend at server
 *  params category- string category to fetch images from
 *         page- number index to start collecting images from
 */
export const fetchImages = async (category, page) => {
  let url = `${server}/category?category=${category}&page=${page}`;
  const response = await fetch(url);
  return await response.json();
};

/** fetches from backend at server ordered images of the displayed slice in browser
 * params sortkey- string key to sort on
 *        orderAsc- boolean
 *        category- string category to fetch images from
 *        page- number index to start collecting images form
 * returns awaited response in json format of images
 */
export const manageSort = async (sortKey, orderAsc, category, page) => {
  let url = `${server}/sort`;
  const dto = {
    sort_by: sortKey,
    order_asc: orderAsc,
    category: category,
    page: page,
  };
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dto),
  });
  return await response.json();
};
