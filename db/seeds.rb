# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

#Products climbing
test = Product.create(name: 'BOOSTER S', price: 190.0, description: "Building on the original Furia, the versatile and sensitive Furia S has a redesigned heel and closure for a glove-like fit")

file = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/booster_s.png")
test.photo.attach(io: file, filename: 'booster_s.png')
