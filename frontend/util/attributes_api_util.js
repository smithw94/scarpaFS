export const fetchAttrs = () => (
  $.ajax({
    url: `/api/attributes`
  })
)