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
  validates :product_id, :attribute_id, presence: true

  belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product

  belongs_to :m_attribute,
    foreign_key: :attribute_id,
    class_name: :Attribute


end
