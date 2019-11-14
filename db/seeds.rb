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
file4 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/boostic/bo.png")
boost.photos.attach(io: file4, filename: 'bo.png')
file5 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/boostic/bo2.png")
boost.photos.attach(io: file5, filename: 'bo2.png')
file6 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/boostic/bo3.png")
boost.photos.attach(io: file6, filename: 'bo3.png')

chimera = Product.create(name: 'CHIMERA', price: 200.0, description: "A lace-up version of our revolutionary Drago, the fine-tuned Chimera features the same handcrafted, rubber-wrapped forefoot, aggressively downturned profile and asymmetrical shape with high-level adjustability that suits lower-volume feet.")
file7 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/chimera/ch.png")
chimera.photos.attach(io: file7, filename: 'ch.png')
file8 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/chimera/ch2.png")
chimera.photos.attach(io: file8, filename: 'ch2.png')
file9 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/chimera/ch3.png")
chimera.photos.attach(io: file9, filename: 'ch3.png')

crux = Product.create(name: 'CRUX', price: 150.0, description: "Our burliest, most durable approach shoe for ample support and protection on loose talus, steep trails and rugged descents, the Crux features a full-coverage toe rand, sticky Vibram® sole and lace-to-toe design that help you quickly dispatch slabby scrambles and low fifth-class terrain.")
file10 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/crux/cr.png")
crux.photos.attach(io: file10, filename: 'cr.png')
file11 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/crux/cr2.png")
crux.photos.attach(io: file11, filename: 'cr2.png')
file12 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/crux/cr3.png")
crux.photos.attach(io: file12, filename: 'cr3.png')

cruxw = Product.create(name: "CRUX WOMEN'S", price: 150.0, description: "Our burliest, most durable approach shoe for ample support and protection on 
loose talus, steep trails and rugged descents, the Crux features a full-coverage toe rand, sticky Vibram® sole and lace-to-toe design that 
help you quickly dispatch slabby scrambles and low fifth-class terrain.")
file13 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/cruxw/crw.png")
cruxw.photos.attach(io: file13, filename: 'crw.png')
file14 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/cruxw/crw2.png")
cruxw.photos.attach(io: file14, filename: 'crw2.png')
file15 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/cruxw/crw3.png")
cruxw.photos.attach(io: file15, filename: 'crw3.png')

drago = Product.create(name: "DRAGO", price: 200.0, description: "Aggressively downturned and highly asymmetric, with a forefoot wrapped in sticky rubber, the Drago represents the pinnacle of rock shoe construction—specialized, meticulously crafted and refined to perform at the highest level on demanding boulders and steep sport routes.")
file16 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/drago/dr.png")
drago.photos.attach(io: file16, filename: 'dr.png')
file17 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/drago/dr2.png")
drago.photos.attach(io: file17, filename: 'dr2.png')
file18 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/drago/dr3.png")
drago.photos.attach(io: file18, filename: 'dr3.png')

furiaair = Product.create(name: "FURIA AIR", price: 200.0, description: "Sensitivity redefined, the new Furia Air brings a second skin feeling to a climbers foot, featuring a cutting edge design combined with the most advanced materials to create a climbing shoe that allows the foot to be fully engaged when climbing, at an incredibly low weight. The sensitivity and performance of the Furia Air must be experienced to be believed!")
file19 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/furiaair/fa.png")
furiaair.photos.attach(io: file19, filename: 'fa.png')
file20 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/furiaair/fa2.png")
furiaair.photos.attach(io: file20, filename: 'fa2.png')
file21 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/furiaair/fa3.png")
furiaair.photos.attach(io: file21, filename: 'fa3.png')

furias = Product.create(name: "FURIA S", price: 190.0, description: "Building on the versatile precision and sensitivity of our best-selling Furia, the all-new Furia S features a slightly softer design for an ultra-sensitive feel as well as a redesigned heel and Z-closure system for a superior, glove-like fit.")
file22 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/furias/fs.png")
furias.photos.attach(io: file22, filename: 'fs.png')
file23 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/furias/fs2.png")
furias.photos.attach(io: file23, filename: 'fs2.png')
file24 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/furias/fs3.png")
furias.photos.attach(io: file24, filename: 'fs3.png')

gecko = Product.create(name: "GECKO", price: 120.0, description: "Our do-it-all approach shoe that doesn’t sacrifice style for function. The Gecko sticks to low-angle slabs and technical walk-offs, holds up against rocky trails and unintentional bushwhacks, and is comfortable enough for post-climb beers in town.")
file25 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/gecko/ge.png")
gecko.photos.attach(io: file25, filename: 'ge.png')
file26 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/gecko/ge2.png")
gecko.photos.attach(io: file26, filename: 'ge2.png')
file27 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/gecko/ge3.png")
gecko.photos.attach(io: file27, filename: 'ge3.png')

geckow = Product.create(name: "GECKO WOMEN'S", price: 120.0, description: "Our do-it-all approach shoe that doesn’t sacrifice style for function. The Gecko sticks to low-angle slabs and technical walk-offs, holds up against rocky trails and unintentional bushwhacks, and is comfortable enough for post-climb beers in town.")
file28 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/geckow/gew.png")
geckow.photos.attach(io: file28, filename: 'gew.png')
file29 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/geckow/gew2.png")
geckow.photos.attach(io: file29, filename: 'gew2.png')
file30 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/geckow/gew3.png")
geckow.photos.attach(io: file30, filename: 'gew3.png')