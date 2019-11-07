json.extract!  product, :id, :name, :description, :price
json.productAttributes product.details.pluck(:attribute_name, :attribute_value)