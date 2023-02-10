class ApplicationController < ActionController::Base
  before_action :set_opened_time

  private
  def set_opened_time
    @page_opened_at = Time.now.strftime('%m/%d/%Y %H:%M:%S')
  end
end
