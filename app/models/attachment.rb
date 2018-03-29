class Attachment < ApplicationRecord
  mount_base64_uploader :image, ImageUploader, dependent: :destroy
  #mount_uploader :image, ImageUploader, dependent: :destroy

  validates_presence_of :image
  validates_associated :cat, presence: true
  belongs_to :cat,  optional: true # still don't know why this is needed. helpdesk does not seem to require it
  #belongs_to :cat, required: false # This also works
  # https://blog.bigbinary.com/2016/02/15/rails-5-makes-belong-to-association-required-by-default.html
  # could be the database that causes this error ?
  # Might be a rails version issue as one app is 5.0.2 and the other is 5.0.6
  # https://github.com/rails/rails/issues/18233

end
