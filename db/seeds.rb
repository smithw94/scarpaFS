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
file = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/boosterS/booster_s.png")
test.photos.attach(io: file, filename: 'booster_s.png')
file2 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/boosterS/booster_s2.png")
test.photos.attach(io: file2, filename: 'booster_s2.png')
file3 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/boosterS/booster_s3.png")
test.photos.attach(io: file3, filename: 'booster_s3.png')

boost = Product.create(name: 'BOOSTIC', price: 200.0, description: "The most supportive shoe in our specialized performance category, the Boostic offers maximum edging capabilities for technical, footwork-intensive routes. The Boostic’s construction ensures the foot is held firmly in place and remains stable on small holds and difficult frontpoint-style climbing.")
# file4 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/boostic/bo.png")
# boost.photos.attach(io: file4, filename: 'bo.png')
# file5 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/boostic/bo2.png")
# boost.photos.attach(io: file5, filename: 'bo2.png')
# file6 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/boostic/bo3.png")
# boost.photos.attach(io: file6, filename: 'bo3.png')

chimera = Product.create(name: 'CHIMERA', price: 200.0, description: "A lace-up version of our revolutionary Drago, the fine-tuned Chimera features the same handcrafted, rubber-wrapped forefoot, aggressively downturned profile and asymmetrical shape with high-level adjustability that suits lower-volume feet.")
# file7 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/chimera/ch.png")
# chimera.photos.attach(io: file7, filename: 'ch.png')
# file8 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/chimera/ch2.png")
# chimera.photos.attach(io: file8, filename: 'ch2.png')
# file9 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/chimera/ch3.png")
# chimera.photos.attach(io: file9, filename: 'ch3.png')

crux = Product.create(name: 'CRUX', price: 150.0, description: "Our burliest, most durable approach shoe for ample support and protection on loose talus, steep trails and rugged descents, the Crux features a full-coverage toe rand, sticky Vibram® sole and lace-to-toe design that help you quickly dispatch slabby scrambles and low fifth-class terrain.")
# file10 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/crux/cr.png")
# crux.photos.attach(io: file10, filename: 'ch.png')
# file11 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/crux/cr2.png")
# crux.photos.attach(io: file11, filename: 'ch2.png')
# file12 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/crux/cr3.png")
# crux.photos.attach(io: file12, filename: 'ch3.png')