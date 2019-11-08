export const fetchAttrs = () => (
  $.ajax({
    url: `/api/attributes`
  })
)

export const fetchAttr = attrId => (
  $.ajax({
    url: `api/attributes/${attrId}`
  })
)