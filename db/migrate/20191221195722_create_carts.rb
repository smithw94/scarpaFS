class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.string :user_id, null: false
      t.integer :product_ids, array: true
      t.timestamps
    end
  end
end
