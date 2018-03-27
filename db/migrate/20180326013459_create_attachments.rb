class CreateAttachments < ActiveRecord::Migration[5.0]
  def change
    create_table :attachments do |t|
      t.string :image

      t.references :cat, foreign_key: true
      t.string :image


      t.timestamps
    end
  end
end
