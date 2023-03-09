require "test_helper"

class CartTest < ActiveSupport::TestCase
  test "add unique product" do
    cart = Cart.create

    ruby_book = products(:ruby)

    cart.add_product(ruby_book).save!

    ruby_line_items = cart.line_items.select { |line_item| line_item.product_id == products(:ruby).id }

    # should be only one item in the cart
    assert_equal(1, ruby_line_items.size)

    # line_item should has quantity = 1
    assert_equal(1, ruby_line_items[0].quantity)

    # cart total price should be the same as line_item price
    assert_equal(ruby_book.price, cart.total_price)
  end

  test "add duplicate product" do
    cart = Cart.create

    ruby_book = products(:ruby)

    # add two same products
    cart.add_product(ruby_book).save!
    cart.add_product(ruby_book).save!

    ruby_line_items = cart.line_items.select { |line_item| line_item.product_id == products(:ruby).id }

    # should be only one item in the cart
    assert_equal(1, ruby_line_items.size)

    # line_item should has quantity = 2, as we add 2 products
    assert_equal(2, ruby_line_items[0].quantity)

    # cart total price should be the same as 2 * line_item price
    assert_equal(2 * ruby_book.price, cart.total_price)
  end
end
