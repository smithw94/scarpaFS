# == Schema Information
#
# Table name: product_attributes
#
#  id           :bigint           not null, primary key
#  product_id   :integer          not null
#  attribute_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class ProductAttribute < ApplicationRecord
end
