class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    # For additional fields in app/views/devise/registrations/new.html.erb
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:username, :email, :password, :profile_photo) }
    devise_parameter_sanitizer.permit(:account_update) do |u|
      u.permit(:username, :email, :password, :current_password, :profile_photo)
    end
  end
end
