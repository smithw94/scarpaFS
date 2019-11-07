json.extract!  product, :id, :name, :description, :price, :detail_ids


# json.productAttributes product.details#.pluck(:attribute_name, :attribute_value)