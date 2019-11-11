# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#Products climbing
Product.create(name: 'CHIMERA', price: 210.0, description: "The pinnacle of rock shoe construction—specialized, meticulously crafted and refined to perform at the highest level.")
Product.create(name: 'BOOSTER S', price: 190.0, description: "Building on the original Furia, the versatile and sensitive Furia S has a redesigned heel and closure for a glove-like fit")
Product.create(name: 'DRAGO', price: 200.0, description: "Sensitive yet supportive, powerful yet precise— the superlative shoe for steep, demanding terrain. ")
Product.create(name: 'FURIA S', price: 200.0, description: "A lace-up version of our revolutionary Drago. ")
Product.create(name: 'FURIA AIR', price: 117.0, description: "Sensitivity redefined, a new second skin feeling featuring a cutting edge design at an incredibly low weight.")
Product.create(name: 'MAGO', price: 195.0, description: "Our most supportive lace up is built to excel on micro edges on steep, demanding routes.")
Product.create(name: 'BOOSTIC', price: 190.0, description: "The most supportive shoe in our specialized performance category. ")
Product.create(name: 'INSTINCT', price: 175.0, description: "The most supportive shoe in the Instinct family. ")
Product.create(name: 'INSTINCT AIR', price: 180.0, description: "The most sensitive Instinct shoe-a soft, specialized slipper for training and bouldering. ")
Product.create(name: 'INSTINCT VSR', price: 185.0, description: "The softest shoe in the Instinct family with the comfort of a slipper. ")

#Products approaching
Product.create(name: 'Mescalito Mid Men', price: 239.0, description: "A souped-up version of our all-new Mescalito is our premier approach shoe for serious mountain missions.")
Product.create(name: 'Mescalito Mid Women', price: 239.0, description: "A souped-up version of our all-new Mescalito is our premier approach shoe for serious mountain missions.")
Product.create(name: 'Mescalito', price: 189.0, description: "Our premium approach shoe, designed for technical hikes, is both durable and lightweight for ultimate performance.")


# Attributes
Attribute.create(attribute_name: 'category', attribute_value: 'approach')
Attribute.create(attribute_name: 'category', attribute_value: 'climb')

#Joins
ProductAttribute.create(product_id: 1, attribute_id: 2)
ProductAttribute.create(product_id: 2, attribute_id: 2)
ProductAttribute.create(product_id: 3, attribute_id: 2)

ProductAttribute.create(product_id: 11, attribute_id: 1)
ProductAttribute.create(product_id: 12, attribute_id: 1)
ProductAttribute.create(product_id: 13, attribute_id: 1)

#Reviews


