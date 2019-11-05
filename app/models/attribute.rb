# == Schema Information
#
# Table name: attributes
#
#  id              :bigint           not null, primary key
#  attribute_name  :string           not null
#  attribute_value :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Attribute < ApplicationRecord
  validates :attribute_name, :attribute_value, presence: true

  has_many :product_attributes
end
