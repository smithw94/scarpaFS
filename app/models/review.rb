# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  rating     :integer          not null
#  product_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  username   :string
#

class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5) }
  validates :username, presence: true

  belongs_to :product
  belongs_to :user
end
