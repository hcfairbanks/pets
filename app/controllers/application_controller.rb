class ApplicationController < ActionController::Base
  #protect_from_forgery with: :exception
  protect_from_forgery with: :null_session, only: Proc.new { |c| c.request.format.json? } # This should be secured with JWT or something
end
