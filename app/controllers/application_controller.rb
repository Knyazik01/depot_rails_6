class ApplicationController < ActionController::Base
  before_action :set_opened_time
  before_action :authorize

  protected

  def authorize
    unless User.find_by(id: session[:user_id])
      redirect_to login_url, notice: 'Please log in'
    end
  end

  private

  def set_opened_time
    @page_opened_at = Time.now.strftime('%m/%d/%Y %H:%M:%S')
  end
end
