export const fetchProducts = () => (
  $.ajax({
    url: `api/products`
  })
);