class Order < ApplicationRecord
  has_many :line_items, dependent: :destroy
  enum pay_type: {
    'Check' => 0,
    'Credit card' => 1,
    'Purchase order' => 2,
  }

  # validations
  validates :name, :address, :email, presence: true
  validates :pay_type, inclusion: pay_types.keys

  def add_items_from_cart(cart)
    cart.line_items.each do |item|
      # unlink cart from line_item
      item.cart_id = nil
      # line_items - order field
      line_items << item
    end
  end
end
