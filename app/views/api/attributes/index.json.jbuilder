@attributes.each do |attr|
  json.extract! attr, :id, :attribute_value, :attribute_value, :product_ids
end