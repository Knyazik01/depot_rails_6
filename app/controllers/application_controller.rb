class ApplicationController < ActionController::Base
  before_action :set_i18n_locale_from_params
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

  protected

  def set_i18n_locale_from_params
    if params[:locale]
      if I18n.available_locales.map(&:to_s).include?(params[:locale])
        I18n.locale = params[:locale]
      else
        flash.now[:notice] =
          "#{params[:locale]} translation not available"
        logger.error flash.now[:notice]
      end
    end
  end
end