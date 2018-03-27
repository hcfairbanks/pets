class Attachment < ApplicationRecord
  mount_base64_uploader :image, ImageUploader, dependent: :destroy
  #mount_uploader :image, ImageUploader, dependent: :destroy
  #validates_presence_of :image
  belongs_to :cat, required: false
  #validates_associated :cat, presence: true

end
