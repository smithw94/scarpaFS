# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

ProductAttribute.delete_all
Product.delete_all
Attribute.delete_all

#Products climbing
# 1
test = Product.create(name: 'BOOSTER S', price: 190.0, description: "Building on the original Furia, the versatile and sensitive Furia S has a redesigned heel and closure for a glove-like fit")
file = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/boosterS/booster_s.png")
test.photos.attach(io: file, filename: 'booster_s.png')
file2 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/boosterS/booster_s2.png")
test.photos.attach(io: file2, filename: 'booster_s2.png')
file3 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/boosterS/booster_s3.png")
test.photos.attach(io: file3, filename: 'booster_s3.png')
# 2
boost = Product.create(name: 'BOOSTIC', price: 200.0, description: "The most supportive shoe in our specialized performance category, the Boostic offers maximum edging capabilities for technical, footwork-intensive routes. The Boostic’s construction ensures the foot is held firmly in place and remains stable on small holds and difficult frontpoint-style climbing.")
file4 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/boostic/bo.png")
boost.photos.attach(io: file4, filename: 'bo.png')
file5 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/boostic/bo2.png")
boost.photos.attach(io: file5, filename: 'bo2.png')
file6 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/boostic/bo3.png")
boost.photos.attach(io: file6, filename: 'bo3.png')
# 3
chimera = Product.create(name: 'CHIMERA', price: 200.0, description: "A lace-up version of our revolutionary Drago, the fine-tuned Chimera features the same handcrafted, rubber-wrapped forefoot, aggressively downturned profile and asymmetrical shape with high-level adjustability that suits lower-volume feet.")
file7 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/chimera/ch.png")
chimera.photos.attach(io: file7, filename: 'ch.png')
file8 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/chimera/ch2.png")
chimera.photos.attach(io: file8, filename: 'ch2.png')
file9 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/chimera/ch3.png")
chimera.photos.attach(io: file9, filename: 'ch3.png')
# 4
crux = Product.create(name: 'CRUX', price: 150.0, description: "Our burliest, most durable approach shoe for ample support and protection on loose talus, steep trails and rugged descents, the Crux features a full-coverage toe rand, sticky Vibram® sole and lace-to-toe design that help you quickly dispatch slabby scrambles and low fifth-class terrain.")
file10 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/crux/cr.png")
crux.photos.attach(io: file10, filename: 'cr.png')
file11 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/crux/cr2.png")
crux.photos.attach(io: file11, filename: 'cr2.png')
file12 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/crux/cr3.png")
crux.photos.attach(io: file12, filename: 'cr3.png')
# 5
cruxw = Product.create(name: "CRUX WOMEN'S", price: 150.0, description: "Our burliest, most durable approach shoe for ample support and protection on 
loose talus, steep trails and rugged descents, the Crux features a full-coverage toe rand, sticky Vibram® sole and lace-to-toe design that 
help you quickly dispatch slabby scrambles and low fifth-class terrain.")
file13 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/cruxw/crw.png")
cruxw.photos.attach(io: file13, filename: 'crw.png')
file14 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/cruxw/crw2.png")
cruxw.photos.attach(io: file14, filename: 'crw2.png')
file15 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/cruxw/crw3.png")
cruxw.photos.attach(io: file15, filename: 'crw3.png')
# 6
drago = Product.create(name: "DRAGO", price: 200.0, description: "Aggressively downturned and highly asymmetric, with a forefoot wrapped in sticky rubber, the Drago represents the pinnacle of rock shoe construction—specialized, meticulously crafted and refined to perform at the highest level on demanding boulders and steep sport routes.")
file16 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/drago/drago.png")
drago.photos.attach(io: file16, filename: 'drago.png')
file17 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/drago/drago2.png")
drago.photos.attach(io: file17, filename: 'drago2.png')
file18 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/drago/drago3.png")
drago.photos.attach(io: file18, filename: 'drago3.png')
# 7
furiaair = Product.create(name: "FURIA AIR", price: 200.0, description: "Sensitivity redefined, the new Furia Air brings a second skin feeling to a climbers foot, featuring a cutting edge design combined with the most advanced materials to create a climbing shoe that allows the foot to be fully engaged when climbing, at an incredibly low weight. The sensitivity and performance of the Furia Air must be experienced to be believed!")
file19 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/furiaair/fa.png")
furiaair.photos.attach(io: file19, filename: 'fa.png')
file20 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/furiaair/fa2.png")
furiaair.photos.attach(io: file20, filename: 'fa2.png')
file21 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/furiaair/fa3.png")
furiaair.photos.attach(io: file21, filename: 'fa3.png')
# 8
furias = Product.create(name: "FURIA S", price: 190.0, description: "Building on the versatile precision and sensitivity of our best-selling Furia, the all-new Furia S features a slightly softer design for an ultra-sensitive feel as well as a redesigned heel and Z-closure system for a superior, glove-like fit.")
file22 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/furias/fs.png")
furias.photos.attach(io: file22, filename: 'fs.png')
file23 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/furias/fs2.png")
furias.photos.attach(io: file23, filename: 'fs2.png')
file24 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/furias/fs3.png")
furias.photos.attach(io: file24, filename: 'fs3.png')
# 9
gecko = Product.create(name: "GECKO", price: 120.0, description: "Our do-it-all approach shoe that doesn’t sacrifice style for function. The Gecko sticks to low-angle slabs and technical walk-offs, holds up against rocky trails and unintentional bushwhacks, and is comfortable enough for post-climb beers in town.")
file25 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/gecko/ge.png")
gecko.photos.attach(io: file25, filename: 'ge.png')
file26 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/gecko/ge2.png")
gecko.photos.attach(io: file26, filename: 'ge2.png')
file27 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/gecko/ge3.png")
gecko.photos.attach(io: file27, filename: 'ge3.png')
# 10
geckow = Product.create(name: "GECKO WOMEN'S", price: 120.0, description: "Our do-it-all approach shoe that doesn’t sacrifice style for function. The Gecko sticks to low-angle slabs and technical walk-offs, holds up against rocky trails and unintentional bushwhacks, and is comfortable enough for post-climb beers in town.")
file28 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/geckow/gew.png")
geckow.photos.attach(io: file28, filename: 'gew.png')
file29 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/geckow/gew2.png")
geckow.photos.attach(io: file29, filename: 'gew2.png')
file30 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/geckow/gew3.png")
geckow.photos.attach(io: file30, filename: 'gew3.png')
# 11
helix = Product.create(name: "HELIX", price: 190.0, description: "Comfortable, durable and undeniably classic, the flat-lasted Helix combines elemental yet refined features to yield one of our most popular shoes. With a highly adjustable lace-up construction, padded tongue and relatively symmetrical profile, the Helix is perfect for guides, advancing climbers and anyone prioritizing all-day comfort.")
file31 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/helix/he.png")
helix.photos.attach(io: file31, filename: 'he.png')
file32 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/helix/he2.png")
helix.photos.attach(io: file32, filename: 'he2.png')
file33 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/helix/he3.png")
helix.photos.attach(io: file33, filename: 'he3.png')
# 12
helixw = Product.create(name: "HELIX WOMEN'S", price: 190.0, description: "Comfortable, durable and undeniably classic, the flat-lasted Helix combines elemental yet refined features to yield one of our most popular shoes. With a highly adjustable lace-up construction, padded tongue and relatively symmetrical profile, the Helix is perfect for guides, advancing climbers and anyone prioritizing all-day comfort.")
file34 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/helixw/hew.png")
helixw.photos.attach(io: file34, filename: 'hew.png')
file35 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/helixw/hew2.png")
helixw.photos.attach(io: file35, filename: 'hew2.png')
file36 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/helixw/hew3.png")
helixw.photos.attach(io: file36, filename: 'hew3.png')
# 13
instinct = Product.create(name: "INSTICT", price: 190.0, description: "With a curved, asymmetric last, highly adjustable lace-up design and a chiseled low-profile toe for added precision in pockets and on restrictive footholds, the Instinct is the most supportive shoe in the Instinct family that excels across a variety of styles and disciplines.")
file34 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/instinct/in.png")
instinct.photos.attach(io: file34, filename: 'in.png')
file35 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/instinct/in2.png")
instinct.photos.attach(io: file35, filename: 'in2.png')
file36 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/instinct/in3.png")
instinct.photos.attach(io: file36, filename: 'in3.png')
# 14
instinctvs = Product.create(name: "INSTICT VS", price: 200.0, description: "Combining a curved, asymmetrical last with a slightly softer construction and thinner sole for enhanced flexibility and sensitivity, the Instinct VS is the cornerstone of our Performance line—an all-around shoe that handles a variety of styles at the highest level.")
file37 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/instinctvs/iv.png")
instinctvs.photos.attach(io: file37, filename: 'iv.png')
file38 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/instinctvs/iv2.png")
instinctvs.photos.attach(io: file38, filename: 'iv2.png')
file39 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/instinctvs/iv3.png")
instinctvs.photos.attach(io: file39, filename: 'iv3.png')
# 15
instinctvsw = Product.create(name: "INSTICT VS WOMEN'S", price: 200.0, description: "Combining a curved, asymmetrical last with a slightly softer construction and thinner sole for enhanced flexibility and sensitivity, the Instinct VS is the cornerstone of our Performance line—an all-around shoe that handles a variety of styles at the highest level.")
file40 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/instinctvsw/ivw.png")
instinctvsw.photos.attach(io: file40, filename: 'ivw.png')
file41 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/instinctvsw/ivw2.png")
instinctvsw.photos.attach(io: file41, filename: 'ivw2.png')
file42 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/instinctvsw/ivw3.png")
instinctvsw.photos.attach(io: file42, filename: 'ivw3.png')
# 16
mescal = Product.create(name: "Mescalito Mid GTX", price: 170.0, description: "A souped-up version of our all-new Mescalito that adds a taller cuff and GORE-TEX for increased support and protection on rugged alpine approaches, the Mescalito Mid GTX is our premier approach shoe for serious mountain missions.")
file43 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/mescal/me.png")
mescal.photos.attach(io: file43, filename: 'me.png')
file44 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/mescal/me2.png")
mescal.photos.attach(io: file44, filename: 'me2.png')
file45 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/mescal/me3.png")
mescal.photos.attach(io: file45, filename: 'me3.png')
# 17
mescalw = Product.create(name: "Mescalito Mid GTX WOMEN'S", price: 170.0, description: "A souped-up version of our all-new Mescalito that adds a taller cuff and GORE-TEX for increased support and protection on rugged alpine approaches, the Mescalito Mid GTX is our premier approach shoe for serious mountain missions.")
file46 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/mescalw/mew.png")
mescalw.photos.attach(io: file46, filename: 'mew.png')
file47 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/mescalw/mew2.png")
mescalw.photos.attach(io: file47, filename: 'mew2.png')
# 18
vaporvw = Product.create(name: "VAPOR V", price: 180.0, description: "A percise, versatile and best-selling shoe that marries a comfortable fit with steep climbing performance, the redesigned Vapor V features fresh colors, a microfiber upper and our Bi-Tension™ active rand for a premium combo of durability and sensitivity.")
file48 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/vaporvw/vaw.png")
vaporvw.photos.attach(io: file48, filename: 'vaw.png')
file49 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/vaporvw/vvw2.png")
vaporvw.photos.attach(io: file49, filename: 'vvw2.png')
file50 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/vaporvw/vvw3.png")
vaporvw.photos.attach(io: file50, filename: 'vvw3.png')
# 19
vaporw = Product.create(name: "VAPOR", price: 170.0, description: "Our most supportive lace-up, the Vapor is a technical trad shoe that provides serious stability and plush comfort, whether you’re jamming cracks or out on the face. The Vapor’s stiff platform features minimal stitching to increase comfort and eliminate hotspots.")
file51 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/vaporw/vw.png")
vaporw.photos.attach(io: file51, filename: 'vw.png')
file52 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/vaporw/vw2.png")
vaporw.photos.attach(io: file52, filename: 'vw2.png')
file53 = open("https://active-storage-scrapa-dev.s3-us-west-1.amazonaws.com/vaporw/vw3.png")
vaporw.photos.attach(io: file53, filename: 'vw3.png')

# A
# TT
# T T
# R  R
# I   I
# B    B
# U     U
# T      T
# E       E

# Best Use
# 1
Attribute.create(attribute_name: "BEST USE", attribute_value: "Approach")
# 2
Attribute.create(attribute_name: "BEST USE", attribute_value: "Bouldering")
# 3
Attribute.create(attribute_name: "BEST USE", attribute_value: "Competition")
# 4
Attribute.create(attribute_name: "BEST USE", attribute_value: "Trad")

# Category
# 5
Attribute.create(attribute_name: "CATEGORY", attribute_value: "Men's")
# 6
Attribute.create(attribute_name: "CATEGORY", attribute_value: "Women's")
# 7
Attribute.create(attribute_name: "CATEGORY", attribute_value: "Youth")

# Closure
# 8
Attribute.create(attribute_name: "CLOSURE", attribute_value: "Lace")
# 9
Attribute.create(attribute_name: "CLOSURE", attribute_value: "Slipper")
# 10
Attribute.create(attribute_name: "CLOSURE", attribute_value: "Strap")

# Primary Material
# 11
Attribute.create(attribute_name: "PRIMARY MATERIAL", attribute_value: "Leather")
# 12
Attribute.create(attribute_name: "PRIMARY MATERIAL", attribute_value: "Leather & Synthetic")
# 13
Attribute.create(attribute_name: "PRIMARY MATERIAL", attribute_value: "Synthetic")

# Sole Rubber
# 14
Attribute.create(attribute_name: "SOLE RUBBER", attribute_value: "SCRAPA Vision™")
# 15
Attribute.create(attribute_name: "SOLE RUBBER", attribute_value: "Vibram® XS Edge")
# 16
Attribute.create(attribute_name: "SOLE RUBBER", attribute_value: "Vibram® XS Grip2")


# PR
#  RO
#   OD
#    DU
#     UC
#      CT
#       
# AT
#  TT
#   TR
#    RI
#     IB
#      BU
#       UT
#        TE

# MENS
ProductAttribute.create(product_id: 1, attribute_id: 5)
ProductAttribute.create(product_id: 2, attribute_id: 5)
ProductAttribute.create(product_id: 3, attribute_id: 5)
ProductAttribute.create(product_id: 4, attribute_id: 5)
ProductAttribute.create(product_id: 6, attribute_id: 5)
ProductAttribute.create(product_id: 7, attribute_id: 5)
ProductAttribute.create(product_id: 8, attribute_id: 5)
ProductAttribute.create(product_id: 9, attribute_id: 5)
ProductAttribute.create(product_id: 11, attribute_id: 5)
ProductAttribute.create(product_id: 13, attribute_id: 5)
ProductAttribute.create(product_id: 14, attribute_id: 5)
ProductAttribute.create(product_id: 16, attribute_id: 5)
ProductAttribute.create(product_id: 18, attribute_id: 5)
ProductAttribute.create(product_id: 19, attribute_id: 5)

# WOMENS
ProductAttribute.create(product_id: 5, attribute_id: 6)
ProductAttribute.create(product_id: 10, attribute_id: 6)
ProductAttribute.create(product_id: 12, attribute_id: 6)
ProductAttribute.create(product_id: 15, attribute_id: 6)
ProductAttribute.create(product_id: 17, attribute_id: 6)
ProductAttribute.create(product_id: 18, attribute_id: 6)
ProductAttribute.create(product_id: 19, attribute_id: 6)

# APPROACH
ProductAttribute.create(product_id: 4, attribute_id: 1)
ProductAttribute.create(product_id: 5, attribute_id: 1)
ProductAttribute.create(product_id: 9, attribute_id: 1)
ProductAttribute.create(product_id: 10, attribute_id: 1)
ProductAttribute.create(product_id: 16, attribute_id: 1)
ProductAttribute.create(product_id: 17, attribute_id: 1)

# BOULDERING
ProductAttribute.create(product_id: 1, attribute_id: 2)
ProductAttribute.create(product_id: 2, attribute_id: 2)
ProductAttribute.create(product_id: 3, attribute_id: 2)
ProductAttribute.create(product_id: 6, attribute_id: 2)
ProductAttribute.create(product_id: 7, attribute_id: 2)
ProductAttribute.create(product_id: 8, attribute_id: 2)
ProductAttribute.create(product_id: 13, attribute_id: 2)
ProductAttribute.create(product_id: 14, attribute_id: 2)
ProductAttribute.create(product_id: 15, attribute_id: 2)
ProductAttribute.create(product_id: 18, attribute_id: 2)

# COMPETITION
ProductAttribute.create(product_id: 1, attribute_id: 3)
ProductAttribute.create(product_id: 2, attribute_id: 3)
ProductAttribute.create(product_id: 6, attribute_id: 3)
ProductAttribute.create(product_id: 7, attribute_id: 3)

# TRAD
ProductAttribute.create(product_id: 11, attribute_id: 4)
ProductAttribute.create(product_id: 12, attribute_id: 4)
ProductAttribute.create(product_id: 13, attribute_id: 4)

# CLOSURE
ProductAttribute.create(product_id: 3, attribute_id: 8)
ProductAttribute.create(product_id: 11, attribute_id: 8)
ProductAttribute.create(product_id: 12, attribute_id: 8)
ProductAttribute.create(product_id: 13, attribute_id: 8)
ProductAttribute.create(product_id: 19, attribute_id: 8)

# LEATHER
ProductAttribute.create(product_id: 4, attribute_id: 11)
ProductAttribute.create(product_id: 5, attribute_id: 11)
ProductAttribute.create(product_id: 9, attribute_id: 11)
ProductAttribute.create(product_id: 10, attribute_id: 11)
ProductAttribute.create(product_id: 11, attribute_id: 11)
ProductAttribute.create(product_id: 12, attribute_id: 11)
ProductAttribute.create(product_id: 16, attribute_id: 11)
ProductAttribute.create(product_id: 17, attribute_id: 11)

# LEATHER & SYNTHETIC
ProductAttribute.create(product_id: 18, attribute_id: 12)

# SYNTHETIC
ProductAttribute.create(product_id: 1, attribute_id: 13)
ProductAttribute.create(product_id: 3, attribute_id: 13)
ProductAttribute.create(product_id: 6, attribute_id: 13)
ProductAttribute.create(product_id: 7, attribute_id: 13)
ProductAttribute.create(product_id: 8, attribute_id: 13)
ProductAttribute.create(product_id: 13, attribute_id: 13)
ProductAttribute.create(product_id: 14, attribute_id: 13)
ProductAttribute.create(product_id: 18, attribute_id: 13)
ProductAttribute.create(product_id: 19, attribute_id: 13)

# XS EDGE
ProductAttribute.create(product_id: 2, attribute_id: 15)
ProductAttribute.create(product_id: 11, attribute_id: 15)
ProductAttribute.create(product_id: 12, attribute_id: 15)
ProductAttribute.create(product_id: 13, attribute_id: 15)
ProductAttribute.create(product_id: 14, attribute_id: 15)
ProductAttribute.create(product_id: 18, attribute_id: 15)
ProductAttribute.create(product_id: 19, attribute_id: 15)

# XS GRIP2
ProductAttribute.create(product_id: 1, attribute_id: 16)
ProductAttribute.create(product_id: 3, attribute_id: 16)
ProductAttribute.create(product_id: 6, attribute_id: 16)
ProductAttribute.create(product_id: 7, attribute_id: 16)
ProductAttribute.create(product_id: 8, attribute_id: 16)
ProductAttribute.create(product_id: 14, attribute_id: 16)
ProductAttribute.create(product_id: 15, attribute_id: 16)
ProductAttribute.create(product_id: 18, attribute_id: 16)