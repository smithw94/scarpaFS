@products.each do |product|
  json.products do 
    json.set! product.id do
      json.partial! 'product', product: product
    end
  end
  json.details do 
    product.details.each do |detail|
      json.set! detail.id do 
        json.extract! detail, :id, :attribute_name, :attribute_value, :product_ids
      end
    end
  end
  json.product_attributes do 
    product.product_attributes.each do |attribute|
      json.set! attribute.id do 
        json.extract! attribute, :id, :product_id, :attribute_id
      end
    end
  end
  json.reviews do
    product.reviews.each do |review|
      json.set! review.id do
        json.extract! review, :id, :body, :rating, :product_id, :user_id, :username
      end
    end
  end
end