@attributes.each do |attribute|
  json.set! attribute.id do 
    json.partial! 'attribute', attribute: attribute
  end
end

