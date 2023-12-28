class StoreController < ApplicationController
  skip_before_action :authorize
  include CurrentCart
  before_action :set_cart

  def index
    # TODO Remove Playtime P.T.
    session[:counter] = 0 if session[:counter].nil?
    session[:counter] += 1

    @products = Product.order(:title)
  end
end
