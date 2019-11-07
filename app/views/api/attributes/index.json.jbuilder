@attributes.each do |attr|
  json.set! attr.id do 
    json.extract! attr, :id, :attribute_name, :attribute_value, :product_ids
  end
end