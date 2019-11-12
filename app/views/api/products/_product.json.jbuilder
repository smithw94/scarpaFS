json.extract!  product, :id, :name, :description, :price, :average_rating, :detail_ids, :review_ids

if product.photo
  json.photoUrl url_for(product.photo)
end 


# json.details do
#   product.details.each do |detail|



# products slice
# details slice
# product details slice


# json.productAttributes product.details#.pluck(:attribute_name, :attribute_value)