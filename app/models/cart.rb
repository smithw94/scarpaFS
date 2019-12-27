# == Schema Information
#
# Table name: carts
#
#  id          :bigint           not null, primary key
#  product_ids :integer          is an Array
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer
#

class Cart < ApplicationRecord
  validates :user_id, presence: true

  belongs_to :user
  belongs_to :product
end
